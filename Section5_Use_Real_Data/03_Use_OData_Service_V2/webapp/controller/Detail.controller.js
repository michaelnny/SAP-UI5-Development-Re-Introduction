sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function (Controller, UIComponent, History) {
	"use strict";

	return Controller.extend("demo.ui5.ProductListApp.controller.Detail", {

		onInit: function () {
			var oRouter = UIComponent.getRouterFor(this);

			// listen to router events, when navigate to route 'detail' ocurred, call function '_onObjectMatched'
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			
			
		},

		_onObjectMatched: function (oEvent) {
			// element binding on the entire view
			this.getView().bindElement({
				path: decodeURIComponent(oEvent.getParameter("arguments").productId)
			});
		},

		onNavBack: function () {
			// very simple version for navigate back
			// var oRouter = UIComponent.getRouterFor(this);
			// oRouter.navTo("list");

			// comprehensive version for navigate back, also check browser hash in case user use the navigation buttons on browser toolbar  
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				// if history hash is valid, use the standard JavaScript window.history.go() method
				window.history.go(-1);
			} else {
				// use UI5 routing method to navigate to route 'list'
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("list", {}, true);
			}
		}

	});

});