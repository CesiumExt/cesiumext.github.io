Ext.data.JsonP.CesiumExt_format_filter_And({"tagname":"class","name":"CesiumExt.format.filter.And","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"And.js","href":"And.html#CesiumExt-format-filter-And"}],"author":[{"tagname":"author","name":"Paulo Sergio SAMPAIO de ARAGAO","email":null}],"aliases":{},"alternateClassNames":[],"extends":"CesiumExt.format.filter.LogicalNary","mixins":[],"requires":[],"uses":[],"members":[{"name":"conditions","tagname":"cfg","owner":"CesiumExt.format.filter.LogicalNary","id":"cfg-conditions","meta":{}},{"name":"tagName","tagname":"cfg","owner":"CesiumExt.format.filter.AbstractFilter","id":"cfg-tagName","meta":{}},{"name":"constructor","tagname":"method","owner":"CesiumExt.format.filter.And","id":"method-constructor","meta":{}},{"name":"encodeFilterAsXmlString","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-encodeFilterAsXmlString","meta":{}},{"name":"getConditions","tagname":"method","owner":"CesiumExt.format.filter.LogicalNary","id":"method-getConditions","meta":{}},{"name":"getTagName","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-getTagName","meta":{}},{"name":"setConditions","tagname":"method","owner":"CesiumExt.format.filter.LogicalNary","id":"method-setConditions","meta":{}},{"name":"setTagName","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-setTagName","meta":{}},{"name":"toString","tagname":"method","owner":"CesiumExt.format.filter.LogicalNary","id":"method-toString","meta":{}}],"code_type":"ext_define","id":"class-CesiumExt.format.filter.And","classIcon":"icon-class","superclasses":["Ext.Base","CesiumExt.format.filter.AbstractFilter","CesiumExt.format.filter.LogicalNary"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='docClass'>CesiumExt.format.filter.AbstractFilter</a><div class='subclass '><a href='#!/api/CesiumExt.format.filter.LogicalNary' rel='CesiumExt.format.filter.LogicalNary' class='docClass'>CesiumExt.format.filter.LogicalNary</a><div class='subclass '><strong>CesiumExt.format.filter.And</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/And.html#CesiumExt-format-filter-And' target='_blank'>And.js</a></div></pre><div class='doc-contents'><p>Class representing the logical <code>&lt;And&gt;</code> operator between two or more\nfilter conditions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-conditions' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.LogicalNary' rel='CesiumExt.format.filter.LogicalNary' class='defined-in docClass'>CesiumExt.format.filter.LogicalNary</a><br/><a href='source/LogicalNary.html#CesiumExt-format-filter-LogicalNary-cfg-conditions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.LogicalNary-cfg-conditions' class='name expandable'>conditions</a> : [CesiumExt.format.filter.AbstractFilter]<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The conditions for the n-ary logical operator</p>\n</div><div class='long'><p>The conditions for the n-ary logical operator</p>\n</div></div></div><div id='cfg-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The xml tag name</p>\n</div><div class='long'><p>The xml tag name</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.format.filter.And'>CesiumExt.format.filter.And</span><br/><a href='source/And.html#CesiumExt-format-filter-And-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CesiumExt.format.filter.And-method-constructor' class='name expandable'>CesiumExt.format.filter.And</a>( <span class='pre'>conditions</span> ) : <a href=\"#!/api/CesiumExt.format.filter.And\" rel=\"CesiumExt.format.filter.And\" class=\"docClass\">CesiumExt.format.filter.And</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The constructor method. ...</div><div class='long'><p>The constructor method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conditions</span> : Object<div class='sub-desc'><p>The config\nobject having the filter conditions.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CesiumExt.format.filter.And\" rel=\"CesiumExt.format.filter.And\" class=\"docClass\">CesiumExt.format.filter.And</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.format.filter.LogicalNary-method-constructor\" rel=\"CesiumExt.format.filter.LogicalNary-method-constructor\" class=\"docClass\">CesiumExt.format.filter.LogicalNary.constructor</a></p></div></div></div><div id='method-encodeFilterAsXmlString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-method-encodeFilterAsXmlString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-encodeFilterAsXmlString' class='name expandable'>encodeFilterAsXmlString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Encode the filter in a xml string format ...</div><div class='long'><p>Encode the filter in a xml string format</p>\n</div></div></div><div id='method-getConditions' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.LogicalNary' rel='CesiumExt.format.filter.LogicalNary' class='defined-in docClass'>CesiumExt.format.filter.LogicalNary</a><br/><a href='source/LogicalNary.html#CesiumExt-format-filter-LogicalNary-cfg-conditions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.LogicalNary-method-getConditions' class='name expandable'>getConditions</a>( <span class='pre'></span> ) : [CesiumExt.format.filter.AbstractFilter]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of conditions. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.LogicalNary-cfg-conditions\" rel=\"CesiumExt.format.filter.LogicalNary-cfg-conditions\" class=\"docClass\">conditions</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>[CesiumExt.format.filter.AbstractFilter]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-getTagName' class='name expandable'>getTagName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of tagName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName\" rel=\"CesiumExt.format.filter.AbstractFilter-cfg-tagName\" class=\"docClass\">tagName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConditions' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.LogicalNary' rel='CesiumExt.format.filter.LogicalNary' class='defined-in docClass'>CesiumExt.format.filter.LogicalNary</a><br/><a href='source/LogicalNary.html#CesiumExt-format-filter-LogicalNary-cfg-conditions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.LogicalNary-method-setConditions' class='name expandable'>setConditions</a>( <span class='pre'>conditions</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of conditions. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.LogicalNary-cfg-conditions\" rel=\"CesiumExt.format.filter.LogicalNary-cfg-conditions\" class=\"docClass\">conditions</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conditions</span> : [CesiumExt.format.filter.AbstractFilter]<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-setTagName' class='name expandable'>setTagName</a>( <span class='pre'>tagName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of tagName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName\" rel=\"CesiumExt.format.filter.AbstractFilter-cfg-tagName\" class=\"docClass\">tagName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tagName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.LogicalNary' rel='CesiumExt.format.filter.LogicalNary' class='defined-in docClass'>CesiumExt.format.filter.LogicalNary</a><br/><a href='source/LogicalNary.html#CesiumExt-format-filter-LogicalNary-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.LogicalNary-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the xml string of the filter ...</div><div class='long'><p>Returns the xml string of the filter</p>\n</div></div></div></div></div></div></div>","meta":{}});