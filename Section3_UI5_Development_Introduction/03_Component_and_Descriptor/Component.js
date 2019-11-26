sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("demo.ui5.ProductListApp.Component", {
        // load the manifest.json app descriptor file
        metadata: {
            manifest: "json"
        },


        init : function () {
			// call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
		}

    });
});