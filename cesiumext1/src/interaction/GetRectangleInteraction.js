/* Copyright (c) 2019-Today CesiumExt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * Class used to retrieve the Rectangle from the user through
 * mouse input.
 * @class CesiumExt.interaction.GetRectangleInteraction
 *
 * @author Paulo Sergio SAMPAIO de ARAGAO
 */
 
 Ext.define('CesiumExt.interaction.GetRectangleInteraction', {
    extend: 'CesiumExt.interaction.Interaction',
	
	config: {
		firstCornerMessage: '&lt;CTRL&gt; + Click to select the first corner or &lt;esc&gt; to cancel',
		secondCornerMessage: 'Drag to second corner',
		rectangle : {
			material : Cesium.Color.RED.withAlpha(0.5),
		}
	},
	
	_entityLabel: null,
	
	_entityRectangle: null,
	
	// the rectangle: A two dimensional region specified as longitude and
	// latitude coordinates.
	_rectangleSelector: new Cesium.Rectangle(),
	
	//_screenSpaceEventHandler: null,
	
	_mouseDown: false,
	
	_firstPointSet: false,
	
	_curCartesianPosition: new Cesium.Cartesian3(),
	
	_curCartographicPosition: new Cesium.Cartographic(),
	
	_firstPoint: new Cesium.Cartographic(),
	
	getBoxRectangleCallbackProperty: null,
	
	getBoxRectangleCallbackFunction: function(me) {
		var callbackFunction =  function(time, result) {
			return Cesium.Rectangle.clone(me._rectangleSelector, result);
		};
		return callbackFunction;
	},
	
	/**
	* @param {Object} The configuration object for this Interaction.
	* @inheritdoc
	*/
	constructor: function(config) {
		var me = this;
        config = config || {};
		me.callParent([config]);
		me.initConfig(config);
		
		//create entity rectangle
		//me.getRectangle().coordinates = me.getSelectorLocation;
		me.getRectangle().show = false;
		me._entityRectangle = me.getViewer().entities.add({
			rectangle : me.getRectangle()
		});
		
		//set the callback property to force the visualization of the rectangle during dragging
		me.getBoxRectangleCallbackProperty = new Cesium.CallbackProperty(me.getBoxRectangleCallbackFunction(me), false);
		
		//register event handler for mouse interaction
		me.getScreenSpaceEventHandler().setInputAction(function(movement) {me.requestFirstCornerHandler(movement, me);}, 
			Cesium.ScreenSpaceEventType.MOUSE_MOVE);
			
		me.getScreenSpaceEventHandler().setInputAction(function(movement) {me.startClickCtrlHandler(movement, me);}, 
			Cesium.ScreenSpaceEventType.LEFT_DOWN,
			Cesium.KeyboardEventModifier.CTRL);
			
		me.getScreenSpaceEventHandler().setInputAction(function(movement) {me.drawSelector(movement, me);}, 
			Cesium.ScreenSpaceEventType.MOUSE_MOVE,
			Cesium.KeyboardEventModifier.CTRL);
			
		me.getScreenSpaceEventHandler().setInputAction(function(movement) {me.endClickCtrlHandler(movement, me);}, 
			Cesium.ScreenSpaceEventType.LEFT_UP);
			
		me.getScreenSpaceEventHandler().setInputAction(function(movement) {me.endClickCtrlHandler(movement, me);}, 
			Cesium.ScreenSpaceEventType.LEFT_UP,
			Cesium.KeyboardEventModifier.CTRL);
	},
	
	/**
	* Event handler to show the label requesting the first corner
	* This method will be the first one to be called
	*
	* @private
	*/
	requestFirstCornerHandler: function(movement, context) {
		var me = (context ? context : this);
		me.getViewer().scene.screenSpaceCameraController.enableInputs  = false;
		me._curCartesianPosition = me.getPositionFromMouse(movement.endPosition, me._curCartesianPosition);
        if (me._curCartesianPosition) {
			me.showTooltip(movement.endPosition, me.getFirstCornerMessage());
        } else {
             me.hideTooltip();
        }
	},
	
	
	/**
	* Event Handler called after the user selects the the first corner
	*
	* @private
	*/
	startClickCtrlHandler: function(movement, context) {
		var me = (context ? context : this);
		me._mouseDown = true;
		me._entityRectangle.rectangle.coordinates =  me.getBoxRectangleCallbackProperty;
	},
	
	/**
	* Event handler called during the drawing of the rectangle, immediately
	* after user selects the first corner. The second corner of the rectangle
	* will be updated by the current position of the mouse
	*
	* @private
	*/
	drawSelector: function(movement, context) {
		var me = (context ? context : this);
		if (!me._mouseDown) {
			return;
		}
		me._curCartesianPosition = me.getPositionFromMouse(movement.endPosition, me._curCartesianPosition);
		if (me._curCartesianPosition) {
			var ellipsoid = me.getViewer().scene.globe.ellipsoid;
			//show message requesting second corner in the current mouse position
			me.showTooltip(movement.endPosition, me.getSecondCornerMessage());
			//
			me._curCartographicPosition = Cesium.Cartographic.fromCartesian(me._curCartesianPosition,
					ellipsoid, me._curCartographicPosition);

			if (!me._firstPointSet) {
				Cesium.Cartographic.clone(me._curCartographicPosition, me._firstPoint);
				me._firstPointSet = true;
			} else {
				me._rectangleSelector.east = Math.max(me._curCartographicPosition.longitude,
						me._firstPoint.longitude);
				me._rectangleSelector.west = Math.min(me._curCartographicPosition.longitude,
						me._firstPoint.longitude);
				me._rectangleSelector.north = Math.max(me._curCartographicPosition.latitude,
						me._firstPoint.latitude);
				me._rectangleSelector.south = Math.min(me._curCartographicPosition.latitude,
						me._firstPoint.latitude);
				me._entityRectangle.rectangle.show = true;
			}
		}
		else {
			 me.hideTooltip();
		}
	},
	
	/**
	* Event handler called once the user selects the second corner or the rectangle
	* This method will fire the event `drawend'. So, the caller of this class should
	* register the callback for this event.
	*
	* @private
	*/
	endClickCtrlHandler: function(movement, context) {
		var me = (context ? context : this);
		me._entityRectangle.rectangle.coordinates = me._rectangleSelector;
		var data = me._entityRectangle.rectangle.coordinates.getValue().clone();
		//cleanup
		me.cleanup();
		//fire event
		me.fireEvent('drawend', data);
	},
	
	
	/**
	* Cleanup the resources
	* @private
	*/
	cleanup: function() {
		var me = this;
		me.callParent(arguments);
		me.getViewer().scene.screenSpaceCameraController.enableInputs  = true;
		me._mouseDown = false;
		me._rectangleSelector = new Cesium.Rectangle();
		me._firstPointSet = false;
		me._curCartesianPosition = new Cesium.Cartesian3();
		me._curCartographicPosition = new Cesium.Cartographic();
		me._firstPoint = new Cesium.Cartographic();
		//remove rectangle
		if (me._entityRectangle) {
			me.getViewer().entities.remove(me._entityRectangle);
			me._entityRectangle = null;
		}
	},
	
	 /**
     * @inheritdoc
     */
    destroy: function() { 
		this.cleanup();
		this.callParent(arguments);
	}
 });