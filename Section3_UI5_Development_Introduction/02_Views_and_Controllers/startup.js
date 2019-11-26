sap.ui.define([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/mvc/JSView"
], function (XMLView, JSView) {
    "use strict";

    // create XML view
    XMLView.create({
        viewName: "demo.ui5.ProductListApp.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });

    // create JS view
    // JSView.create({
    //     viewName: "demo.ui5.ProductListApp.App"
    // }).then(function (oView) {
    //     oView.placeAt("content");
    // })

})