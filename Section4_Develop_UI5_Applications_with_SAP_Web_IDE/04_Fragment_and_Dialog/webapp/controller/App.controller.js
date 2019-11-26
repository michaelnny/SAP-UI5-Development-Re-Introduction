sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"demo/ui5/ProductListApp/model/formatter"
], function (Controller, Fragment) {
	"use strict";

	return Controller.extend("demo.ui5.ProductListApp.controller.App", {
		onInit: function () {

		},
		
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

			// get item binding context like: /Products(1)
			sPath = oItem.getBindingContext().getPath();
			// use element binding to bind data to the dialog
			this.byId("productDialog").bindElement({
				path: sPath
			});
		},
		
		// function to handle close button press event (in product dialog)
		onCloseProductDialog: function(){
			this.byId("productDialog").close();
		}

	});
});