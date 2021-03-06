/* Copyright (c) 2019-Present CesiumExtJS
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
 * Abstract class only used for creating subclasses and not instantiated in apps.
 * Base class for WFS GetFeature property comparison filters.
 *
 * @class CesiumExt.format.filter.Comparison
 * @author Paulo Sergio SAMPAIO de ARAGAO
 */
Ext.define('CesiumExt.format.filter.Comparison', {
    extend:'CesiumExt.format.filter.AbstractFilter',
	
	
	config: {
		/**
		* The xml property name
		* @cfg {String} propertyName
		*/
		propertyName: null
	},
	
	/**
	* Constructor method
	* @param {String} tagName The XML tag name for this filter.
	* @param {String} propertyName Name of the context property to compare.
	*/
	constructor: function(config) {
		var me = this;
		config = config || {};
		me.callParent([config]);
		me.initConfig(config);
    },
	
});

