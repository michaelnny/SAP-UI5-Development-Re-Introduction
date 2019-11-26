sap.ui.define([
	"sap/m/Text",
	"sap/m/Button"
], function (Text, Button) {
	"use strict";

	sap.ui.jsview("demo.ui5.ProductListApp.App", {

		getControllerName: function () {
			return "demo.ui5.ProductListApp.App";
		},

		createContent: function () {
			return [new Text({
				text: "Views and Controllers in UI5 (JS View)"
			}),
			new Button({
				text: "A simple Button",
				press: this.getController().onButtonPressed
			})]
		}
	});

});