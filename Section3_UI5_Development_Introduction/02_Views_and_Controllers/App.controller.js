sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";

    // return an extended sap.ui.core.mvc.Controller class as our controller 'demo.ui5.ProductListApp.App'
    return Controller.extend("demo.ui5.ProductListApp.App", {

        // when controller initialized
        onInit: function(oEvent){
            console.log("controller initialized");
        },

        // before render UI elements
        onBeforeRendering: function(oEvent){
            console.log("controller will render");
        },

        // after render UI elements 
        onAfterRendering: function(oEvent){
            console.log("controller has rendered");

            console.log(oEvent);
        },

        // when controller will be destoried
        onExit: function(oEvent){
            // to do some cleanup activities
        },

        // handle button press event
        onButtonPressed: function(oEvent){
            alert("Button pressed");
        }

    });
});