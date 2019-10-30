Ext.data.JsonP.CesiumExt_format_filter_IsNull({"tagname":"class","name":"CesiumExt.format.filter.IsNull","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"IsNull.js","href":"IsNull.html#CesiumExt-format-filter-IsNull"}],"author":[{"tagname":"author","name":"Paulo Sergio SAMPAIO de ARAGAO","email":null}],"aliases":{},"alternateClassNames":[],"extends":"CesiumExt.format.filter.Comparison","mixins":[],"requires":[],"uses":[],"members":[{"name":"propertyName","tagname":"cfg","owner":"CesiumExt.format.filter.Comparison","id":"cfg-propertyName","meta":{}},{"name":"tagName","tagname":"cfg","owner":"CesiumExt.format.filter.AbstractFilter","id":"cfg-tagName","meta":{}},{"name":"constructor","tagname":"method","owner":"CesiumExt.format.filter.IsNull","id":"method-constructor","meta":{}},{"name":"encodeFilterAsXmlString","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-encodeFilterAsXmlString","meta":{}},{"name":"getPropertyName","tagname":"method","owner":"CesiumExt.format.filter.Comparison","id":"method-getPropertyName","meta":{}},{"name":"getTagName","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-getTagName","meta":{}},{"name":"setPropertyName","tagname":"method","owner":"CesiumExt.format.filter.Comparison","id":"method-setPropertyName","meta":{}},{"name":"setTagName","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-setTagName","meta":{}}],"code_type":"ext_define","id":"class-CesiumExt.format.filter.IsNull","classIcon":"icon-class","superclasses":["Ext.Base","CesiumExt.format.filter.AbstractFilter","CesiumExt.format.filter.Comparison"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='docClass'>CesiumExt.format.filter.AbstractFilter</a><div class='subclass '><a href='#!/api/CesiumExt.format.filter.Comparison' rel='CesiumExt.format.filter.Comparison' class='docClass'>CesiumExt.format.filter.Comparison</a><div class='subclass '><strong>CesiumExt.format.filter.IsNull</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/IsNull.html#CesiumExt-format-filter-IsNull' target='_blank'>IsNull.js</a></div></pre><div class='doc-contents'><p>Represents a <code>&lt;PropertyIsNull&gt;</code> comparison operator.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-propertyName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.Comparison' rel='CesiumExt.format.filter.Comparison' class='defined-in docClass'>CesiumExt.format.filter.Comparison</a><br/><a href='source/Comparison.html#CesiumExt-format-filter-Comparison-cfg-propertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.Comparison-cfg-propertyName' class='name expandable'>propertyName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The xml property name</p>\n</div><div class='long'><p>The xml property name</p>\n</div></div></div><div id='cfg-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The xml tag name</p>\n</div><div class='long'><p>The xml tag name</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.format.filter.IsNull'>CesiumExt.format.filter.IsNull</span><br/><a href='source/IsNull.html#CesiumExt-format-filter-IsNull-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CesiumExt.format.filter.IsNull-method-constructor' class='name expandable'>CesiumExt.format.filter.IsNull</a>( <span class='pre'>propertyName</span> ) : <a href=\"#!/api/CesiumExt.format.filter.IsNull\" rel=\"CesiumExt.format.filter.IsNull\" class=\"docClass\">CesiumExt.format.filter.IsNull</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The constructor method ...</div><div class='long'><p>The constructor method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>Name of the context property to compare.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CesiumExt.format.filter.IsNull\" rel=\"CesiumExt.format.filter.IsNull\" class=\"docClass\">CesiumExt.format.filter.IsNull</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.format.filter.Comparison-method-constructor\" rel=\"CesiumExt.format.filter.Comparison-method-constructor\" class=\"docClass\">CesiumExt.format.filter.Comparison.constructor</a></p></div></div></div><div id='method-encodeFilterAsXmlString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-method-encodeFilterAsXmlString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-encodeFilterAsXmlString' class='name expandable'>encodeFilterAsXmlString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Encode the filter in a xml string format ...</div><div class='long'><p>Encode the filter in a xml string format</p>\n</div></div></div><div id='method-getPropertyName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.Comparison' rel='CesiumExt.format.filter.Comparison' class='defined-in docClass'>CesiumExt.format.filter.Comparison</a><br/><a href='source/Comparison.html#CesiumExt-format-filter-Comparison-cfg-propertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.Comparison-method-getPropertyName' class='name expandable'>getPropertyName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of propertyName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.Comparison-cfg-propertyName\" rel=\"CesiumExt.format.filter.Comparison-cfg-propertyName\" class=\"docClass\">propertyName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-getTagName' class='name expandable'>getTagName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of tagName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName\" rel=\"CesiumExt.format.filter.AbstractFilter-cfg-tagName\" class=\"docClass\">tagName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPropertyName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.Comparison' rel='CesiumExt.format.filter.Comparison' class='defined-in docClass'>CesiumExt.format.filter.Comparison</a><br/><a href='source/Comparison.html#CesiumExt-format-filter-Comparison-cfg-propertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.Comparison-method-setPropertyName' class='name expandable'>setPropertyName</a>( <span class='pre'>propertyName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of propertyName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.Comparison-cfg-propertyName\" rel=\"CesiumExt.format.filter.Comparison-cfg-propertyName\" class=\"docClass\">propertyName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-setTagName' class='name expandable'>setTagName</a>( <span class='pre'>tagName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of tagName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName\" rel=\"CesiumExt.format.filter.AbstractFilter-cfg-tagName\" class=\"docClass\">tagName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tagName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});