sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/core/UIComponent",
	"demo/ui5/ProductListApp/model/formatter"
], function (Controller, Fragment, UIComponent) {
	"use strict";

	return Controller.extend("demo.ui5.ProductListApp.controller.List", {

		// function to handle product card press event
		onProductCardPressed: function (oEvent) {
			var oView = this.getView(),
				oItem = oEvent.getSource(),
				sPath;

			// create dialog if can't find the dialog by it's id
			if (!this.byId("productDialog")) {
				// load asynchronous XML fragment using promise
				Fragment.load({
					id: oView.getId(),
					name: "demo.ui5.ProductListApp.view.fragments.ProductDialog",
					controller: this
				}).then(function (oDialog) {
					// oDialog is the dialog instance

					// connect dialog to this controller
					oView.addDependent(oDialog);
					// open the dialog
					oDialog.open();
				});
			} else {
				// open the dialog directly
				this.byId("productDialog").open();
			}

			// get item binding context like: /Products/1
			sPath = oItem.getBindingContext().getPath();
			// use element binding to bind data to the dialog
			this.byId("productDialog").bindElement({
				path: sPath
			});
		},

		// function to handle close button press event (in product dialog)
		onCloseProductDialog: function () {
			this.byId("productDialog").close();
		},

		// naviagate to detail view
		onGoToDetail: function (oEvent) {
			var oItem = oEvent.getSource().getParent().getParent(),
				sPath = oItem.getBindingContext().getPath(); // binding path like /Products/1

			var oRouter = UIComponent.getRouterFor(this);

			// use route name 'detail' here
			oRouter.navTo("detail", {
				// only parameters defined in "pattern" in manifest.json will be passed to target
				productId: encodeURIComponent(sPath)
			}, true);
		}

	});

});