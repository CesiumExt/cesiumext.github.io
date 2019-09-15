Ext.data.JsonP.CesiumExt_interaction_GetPositionInteraction({"tagname":"class","name":"CesiumExt.interaction.GetPositionInteraction","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"GetPositionInteraction.js","href":"GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction"}],"author":[{"tagname":"author","name":"Paulo Sergio SAMPAIO de ARAGAO","email":null}],"aliases":{},"alternateClassNames":[],"extends":"CesiumExt.interaction.Interaction","mixins":[],"requires":[],"uses":[],"members":[{"name":"label","tagname":"cfg","owner":"CesiumExt.interaction.GetPositionInteraction","id":"cfg-label","meta":{"private":true}},{"name":"message","tagname":"cfg","owner":"CesiumExt.interaction.GetPositionInteraction","id":"cfg-message","meta":{"private":true}},{"name":"showCartographicCoordinate","tagname":"cfg","owner":"CesiumExt.interaction.GetPositionInteraction","id":"cfg-showCartographicCoordinate","meta":{"private":true}},{"name":"viewer","tagname":"cfg","owner":"CesiumExt.interaction.GetPositionInteraction","id":"cfg-viewer","meta":{"private":true}},{"name":"_entityLabel","tagname":"property","owner":"CesiumExt.interaction.GetPositionInteraction","id":"property-_entityLabel","meta":{"private":true}},{"name":"_screenSpaceEventHandler","tagname":"property","owner":"CesiumExt.interaction.GetPositionInteraction","id":"property-_screenSpaceEventHandler","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-constructor","meta":{}},{"name":"cleanup","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-cleanup","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-destroy","meta":{}},{"name":"getCoordinateHandler","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-getCoordinateHandler","meta":{"private":true}},{"name":"getLabel","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-getLabel","meta":{}},{"name":"getMessage","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-getMessage","meta":{}},{"name":"getShowCartographicCoordinate","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-getShowCartographicCoordinate","meta":{}},{"name":"getViewer","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-getViewer","meta":{}},{"name":"mouseMoveHandler","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-mouseMoveHandler","meta":{"private":true}},{"name":"setLabel","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-setLabel","meta":{}},{"name":"setMessage","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-setMessage","meta":{}},{"name":"setShowCartographicCoordinate","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-setShowCartographicCoordinate","meta":{}},{"name":"setViewer","tagname":"method","owner":"CesiumExt.interaction.GetPositionInteraction","id":"method-setViewer","meta":{}}],"code_type":"ext_define","id":"class-CesiumExt.interaction.GetPositionInteraction","short_doc":"Class used to retrieve the coordinate position from the user. ...","classIcon":"icon-class","superclasses":["Ext.Base","CesiumExt.interaction.Interaction"],"subclasses":[],"mixedInto":[],"parentMixins":["Ext.util.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/CesiumExt.interaction.Interaction' rel='CesiumExt.interaction.Interaction' class='docClass'>CesiumExt.interaction.Interaction</a><div class='subclass '><strong>CesiumExt.interaction.GetPositionInteraction</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Files</h4><div class='dependency'><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction' target='_blank'>GetPositionInteraction.js</a></div></pre><div class='doc-contents'><p>Class used to retrieve the coordinate position from the user.\nThe coordinate retrieved is the mouse position where the user clicked\nin the canvas</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-label' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-label' class='name expandable'>label</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-message' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-message' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-message' class='name expandable'>message</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Pick Point to retrieve Coordinate'</code></p></div></div></div><div id='cfg-showCartographicCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-showCartographicCoordinate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-showCartographicCoordinate' class='name expandable'>showCartographicCoordinate</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-viewer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-viewer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-viewer' class='name expandable'>viewer</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/CesiumExt.interaction.Interaction-cfg-viewer\" rel=\"CesiumExt.interaction.Interaction-cfg-viewer\" class=\"docClass\">CesiumExt.interaction.Interaction.viewer</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_entityLabel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-property-_entityLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-property-_entityLabel' class='name expandable'>_entityLabel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_screenSpaceEventHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-property-_screenSpaceEventHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-property-_screenSpaceEventHandler' class='name expandable'>_screenSpaceEventHandler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-constructor' class='name expandable'>CesiumExt.interaction.GetPositionInteraction</a>( <span class='pre'>The</span> ) : <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction\" rel=\"CesiumExt.interaction.GetPositionInteraction\" class=\"docClass\">CesiumExt.interaction.GetPositionInteraction</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : Object<div class='sub-desc'><p>configuration object for this Interaction.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction\" rel=\"CesiumExt.interaction.GetPositionInteraction\" class=\"docClass\">CesiumExt.interaction.GetPositionInteraction</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.interaction.Interaction-method-constructor\" rel=\"CesiumExt.interaction.Interaction-method-constructor\" class=\"docClass\">CesiumExt.interaction.Interaction.constructor</a></p></div></div></div><div id='method-cleanup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-method-cleanup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-cleanup' class='name expandable'>cleanup</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getCoordinateHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-method-getCoordinateHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-getCoordinateHandler' class='name expandable'>getCoordinateHandler</a>( <span class='pre'>movement, context</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>movement</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of label. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-label\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-label\" class=\"docClass\">label</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-message' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of message. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-message\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-message\" class=\"docClass\">message</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getShowCartographicCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-showCartographicCoordinate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-getShowCartographicCoordinate' class='name expandable'>getShowCartographicCoordinate</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of showCartographicCoordinate. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-showCartographicCoordinate\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-showCartographicCoordinate\" class=\"docClass\">showCartographicCoordinate</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getViewer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-viewer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-getViewer' class='name expandable'>getViewer</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of viewer. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-viewer\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-viewer\" class=\"docClass\">viewer</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.interaction.Interaction-method-getViewer\" rel=\"CesiumExt.interaction.Interaction-method-getViewer\" class=\"docClass\">CesiumExt.interaction.Interaction.getViewer</a></p></div></div></div><div id='method-mouseMoveHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-method-mouseMoveHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-mouseMoveHandler' class='name expandable'>mouseMoveHandler</a>( <span class='pre'>movement, context</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Event handler to show the label (tooltip) during the mouse movement ...</div><div class='long'><p>Event handler to show the label (tooltip) during the mouse movement</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>movement</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-label' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-setLabel' class='name expandable'>setLabel</a>( <span class='pre'>label</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of label. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-label\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-label\" class=\"docClass\">label</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>label</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-message' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-setMessage' class='name expandable'>setMessage</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of message. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-message\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-message\" class=\"docClass\">message</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setShowCartographicCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-showCartographicCoordinate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-setShowCartographicCoordinate' class='name expandable'>setShowCartographicCoordinate</a>( <span class='pre'>showCartographicCoordinate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of showCartographicCoordinate. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-showCartographicCoordinate\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-showCartographicCoordinate\" class=\"docClass\">showCartographicCoordinate</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>showCartographicCoordinate</span> : Boolean<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setViewer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CesiumExt.interaction.GetPositionInteraction'>CesiumExt.interaction.GetPositionInteraction</span><br/><a href='source/GetPositionInteraction.html#CesiumExt-interaction-GetPositionInteraction-cfg-viewer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CesiumExt.interaction.GetPositionInteraction-method-setViewer' class='name expandable'>setViewer</a>( <span class='pre'>viewer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of viewer. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/CesiumExt.interaction.GetPositionInteraction-cfg-viewer\" rel=\"CesiumExt.interaction.GetPositionInteraction-cfg-viewer\" class=\"docClass\">viewer</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewer</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CesiumExt.interaction.Interaction-method-setViewer\" rel=\"CesiumExt.interaction.Interaction-method-setViewer\" class=\"docClass\">CesiumExt.interaction.Interaction.setViewer</a></p></div></div></div></div></div></div></div>","meta":{}});