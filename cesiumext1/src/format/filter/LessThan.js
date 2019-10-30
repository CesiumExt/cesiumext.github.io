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
 * Represents a `<PropertyIsLessThan>` comparison operator.
 *
 * @class CesiumExt.format.filter.LessThan
 * @author Paulo Sergio SAMPAIO de ARAGAO
 */
Ext.define('CesiumExt.format.filter.LessThan', {
    extend:'CesiumExt.format.filter.ComparisonBinary',

	/**
	 * The constructor method.
	 *
	 * @param {String} propertyName Name of the context property to compare.
	 * @param {!number} expression The value to compare.
	 */
	constructor: function(propertyName, expression) {
		this.callParent(['PropertyIsLessThan', propertyName, expression]);
    },
});