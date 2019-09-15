/**
 * @class
 * presents a `<PropertyIsGreaterThan>` comparison operator.
 * @extends {CesiumExt.ogc.format.filter.ComparisonBinary}
 */
Ext.define('CesiumExt.ogc.format.filter.GreaterThan', {
    extend:'CesiumExt.ogc.format.filter.ComparisonBinary',

	
	/**
	* @constructor
	* @param {!string} propertyName Name of the context property to compare.
	* @param {!number} expression The value to compare.
	*/
	constructor: function(propertyName, expression) {
		this.callParent(['PropertyIsGreaterThan', propertyName, expression]);
    },
});
