Ext.data.JsonP.CesiumExt_format_filter_NotEqualTo({"tagname":"class","name":"CesiumExt.format.filter.NotEqualTo","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"NotEqualTo.js","href":"NotEqualTo.html#CesiumExt-format-filter-NotEqualTo"}],"author":[{"tagname":"author","name":"Paulo Sergio SAMPAIO de ARAGAO","email":null}],"aliases":{},"alternateClassNames":[],"extends":"CesiumExt.format.filter.ComparisonBinary","mixins":[],"requires":[],"uses":[],"members":[{"name":"expression","tagname":"cfg","owner":"CesiumExt.format.filter.ComparisonBinary","id":"cfg-expression","meta":{}},{"name":"matchCase","tagname":"cfg","owner":"CesiumExt.format.filter.ComparisonBinary","id":"cfg-matchCase","meta":{}},{"name":"propertyName","tagname":"cfg","owner":"CesiumExt.format.filter.ComparisonBinary","id":"cfg-propertyName","meta":{}},{"name":"tagName","tagname":"cfg","owner":"CesiumExt.format.filter.AbstractFilter","id":"cfg-tagName","meta":{}},{"name":"TPL","tagname":"property","owner":"CesiumExt.format.filter.NotEqualTo","id":"static-property-TPL","meta":{"private":true,"static":true}},{"name":"constructor","tagname":"method","owner":"CesiumExt.format.filter.NotEqualTo","id":"method-constructor","meta":{}},{"name":"encodeFilterAsXmlString","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-encodeFilterAsXmlString","meta":{}},{"name":"getExpression","tagname":"method","owner":"CesiumExt.format.filter.ComparisonBinary","id":"method-getExpression","meta":{}},{"name":"getMatchCase","tagname":"method","owner":"CesiumExt.format.filter.ComparisonBinary","id":"method-getMatchCase","meta":{}},{"name":"getPropertyName","tagname":"method","owner":"CesiumExt.format.filter.ComparisonBinary","id":"method-getPropertyName","meta":{}},{"name":"getTagName","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-getTagName","meta":{}},{"name":"setExpression","tagname":"method","owner":"CesiumExt.format.filter.ComparisonBinary","id":"method-setExpression","meta":{}},{"name":"setMatchCase","tagname":"method","owner":"CesiumExt.format.filter.ComparisonBinary","id":"method-setMatchCase","meta":{}},{"name":"setPropertyName","tagname":"method","owner":"CesiumExt.format.filter.ComparisonBinary","id":"method-setPropertyName","meta":{}},{"name":"setTagName","tagname":"method","owner":"CesiumExt.format.filter.AbstractFilter","id":"method-setTagName","meta":{}},{"name":"toString","tagname":"method","owner":"CesiumExt.format.filter.NotEqualTo","id":"method-toString","meta":{"private":true}}],"code_type":"ext_define","id":"class-CesiumExt.format.filter.NotEqualTo","classIcon":"icon-class","superclasses":["Ext.Base","CesiumExt.format.filter.AbstractFilter","CesiumExt.format.filter.Comparison","CesiumExt.format.filter.ComparisonBinary"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='docClass'>CesiumExt.format.filter.AbstractFilter</a><div class='subclass '><a href='#!/api/CesiumExt.format.filter.Comparison' rel='CesiumExt.format.filter.Comparison' class='docClass'>CesiumExt.format.filter.Comparison</a><div class='subclass '><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='docClass'>CesiumExt.format.filter.ComparisonBinary</a><div class='subclass '><strong>CesiumExt.format.filter.NotEqualTo</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/NotEqualTo.html#CesiumExt-format-filter-NotEqualTo' target='_blank'>NotEqualTo.js</a></div></pre><div class='doc-contents'><p>Represents a <code>&lt;PropertyIsNotEqualTo&gt;</code> binary comparison operator.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-expression' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-expression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-expression' class='name expandable'>expression</a> : String | Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The expression</p>\n</div><div class='long'><p>The expression</p>\n</div></div></div><div id='cfg-matchCase' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-matchCase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-matchCase' class='name expandable'>matchCase</a> : Boolean|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Case-sensitive?</p>\n</div><div class='long'><p>Case-sensitive?</p>\n</div></div></div><div id='cfg-propertyName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-propertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-propertyName' class='name expandable'>propertyName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The property name</p>\n</div><div class='long'><p>The property name</p>\n<p>Overrides: <a href=\"#!/api/CesiumExt.format.filter.Comparison-cfg-propertyName\" rel=\"CesiumExt.format.filter.Comparison-cfg-propertyName\" class=\"docClass\">CesiumExt.format.filter.Comparison.propertyName</a></p></div></div></div><div id='cfg-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The xml tag name</p>\n</div><div class='long'><p>The xml tag name</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-TPL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.format.filter.NotEqualTo'>CesiumExt.format.filter.NotEqualTo</span><br/><a href='source/NotEqualTo.html#CesiumExt-format-filter-NotEqualTo-static-property-TPL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.NotEqualTo-static-property-TPL' class='name expandable'>TPL</a> : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'&lt;{0}&gt;' + '&lt;PropertyName&gt;{1}&lt;/PropertyName&gt;' + '&lt;Literal&gt;{2}&lt;/Literal&gt;' + '&lt;/{0}&gt;'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.format.filter.NotEqualTo'>CesiumExt.format.filter.NotEqualTo</span><br/><a href='source/NotEqualTo.html#CesiumExt-format-filter-NotEqualTo-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CesiumExt.format.filter.NotEqualTo-method-constructor' class='name expandable'>CesiumExt.format.filter.NotEqualTo</a>( <span class='pre'>propertyName, expression, matchCase</span> ) : <a href=\"#!/api/CesiumExt.format.filter.NotEqualTo\" rel=\"CesiumExt.format.filter.NotEqualTo\" class=\"docClass\">CesiumExt.format.filter.NotEqualTo</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The constructor method. ...</div><div class='long'><p>The constructor method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>Name of the context property to compare.</p>\n</div></li><li><span class='pre'>expression</span> : String | number<div class='sub-desc'><p>The value to compare.</p>\n</div></li><li><span class='pre'>matchCase</span> : Boolean<div class='sub-desc'><p>Case-sensitive?</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CesiumExt.format.filter.NotEqualTo\" rel=\"CesiumExt.format.filter.NotEqualTo\" class=\"docClass\">CesiumExt.format.filter.NotEqualTo</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-method-constructor\" rel=\"CesiumExt.format.filter.ComparisonBinary-method-constructor\" class=\"docClass\">CesiumExt.format.filter.ComparisonBinary.constructor</a></p></div></div></div><div id='method-encodeFilterAsXmlString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-method-encodeFilterAsXmlString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-encodeFilterAsXmlString' class='name expandable'>encodeFilterAsXmlString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Encode the filter in a xml string format ...</div><div class='long'><p>Encode the filter in a xml string format</p>\n</div></div></div><div id='method-getExpression' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-expression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-method-getExpression' class='name expandable'>getExpression</a>( <span class='pre'></span> ) : String | Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of expression. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-expression\" rel=\"CesiumExt.format.filter.ComparisonBinary-cfg-expression\" class=\"docClass\">expression</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String | Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMatchCase' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-matchCase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-method-getMatchCase' class='name expandable'>getMatchCase</a>( <span class='pre'></span> ) : Boolean|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of matchCase. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-matchCase\" rel=\"CesiumExt.format.filter.ComparisonBinary-cfg-matchCase\" class=\"docClass\">matchCase</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean|undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPropertyName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-propertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-method-getPropertyName' class='name expandable'>getPropertyName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of propertyName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-propertyName\" rel=\"CesiumExt.format.filter.ComparisonBinary-cfg-propertyName\" class=\"docClass\">propertyName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.format.filter.Comparison-method-getPropertyName\" rel=\"CesiumExt.format.filter.Comparison-method-getPropertyName\" class=\"docClass\">CesiumExt.format.filter.Comparison.getPropertyName</a></p></div></div></div><div id='method-getTagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-getTagName' class='name expandable'>getTagName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of tagName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName\" rel=\"CesiumExt.format.filter.AbstractFilter-cfg-tagName\" class=\"docClass\">tagName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setExpression' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-expression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-method-setExpression' class='name expandable'>setExpression</a>( <span class='pre'>expression</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of expression. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-expression\" rel=\"CesiumExt.format.filter.ComparisonBinary-cfg-expression\" class=\"docClass\">expression</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : String | Number<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMatchCase' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-matchCase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-method-setMatchCase' class='name expandable'>setMatchCase</a>( <span class='pre'>matchCase</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of matchCase. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-matchCase\" rel=\"CesiumExt.format.filter.ComparisonBinary-cfg-matchCase\" class=\"docClass\">matchCase</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchCase</span> : Boolean|undefined<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setPropertyName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.ComparisonBinary' rel='CesiumExt.format.filter.ComparisonBinary' class='defined-in docClass'>CesiumExt.format.filter.ComparisonBinary</a><br/><a href='source/ComparisonBinary.html#CesiumExt-format-filter-ComparisonBinary-cfg-propertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.ComparisonBinary-method-setPropertyName' class='name expandable'>setPropertyName</a>( <span class='pre'>propertyName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of propertyName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.ComparisonBinary-cfg-propertyName\" rel=\"CesiumExt.format.filter.ComparisonBinary-cfg-propertyName\" class=\"docClass\">propertyName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.format.filter.Comparison-method-setPropertyName\" rel=\"CesiumExt.format.filter.Comparison-method-setPropertyName\" class=\"docClass\">CesiumExt.format.filter.Comparison.setPropertyName</a></p></div></div></div><div id='method-setTagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CesiumExt.format.filter.AbstractFilter' rel='CesiumExt.format.filter.AbstractFilter' class='defined-in docClass'>CesiumExt.format.filter.AbstractFilter</a><br/><a href='source/AbstractFilter.html#CesiumExt-format-filter-AbstractFilter-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.AbstractFilter-method-setTagName' class='name expandable'>setTagName</a>( <span class='pre'>tagName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of tagName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.format.filter.AbstractFilter-cfg-tagName\" rel=\"CesiumExt.format.filter.AbstractFilter-cfg-tagName\" class=\"docClass\">tagName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tagName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.format.filter.NotEqualTo'>CesiumExt.format.filter.NotEqualTo</span><br/><a href='source/NotEqualTo.html#CesiumExt-format-filter-NotEqualTo-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.format.filter.NotEqualTo-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});