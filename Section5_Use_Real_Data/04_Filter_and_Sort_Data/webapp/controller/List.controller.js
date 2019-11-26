sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/m/MessageToast",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"demo/ui5/ProductListApp/model/formatter"
], function (Controller, Fragment, UIComponent, Device, MessageToast, Sorter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("demo.ui5.ProductListApp.controller.List", {
		
		onInit: function () {
			// access sap.ui.Device API
			if (Device.system.phone) {
				MessageToast.show("Change to phone layout");
			}
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
		},
		
		// handle sort product by price buttn press event
		onSortProductByPrice: function(){
			var oListBinding = this.byId("productList").getBinding("items"); // gridlist aggreagation binding items

			// apply sorter to gridlist items
			oListBinding.sort(
				new Sorter("Price", "desc")
			);
		},
		
		// handle refresh button press event
		onRefresh: function(){
			var oListBinding = this.byId("productList").getBinding("items");
			
			// remove all sort on gridlist
			oListBinding.sort();
			
			// refresh model
			this.getView().getModel().refresh();
		},
		
		// handle search product event
		onSearch: function (oEvent) {
			var aFilter = [], // empty array to store filters
				sQuery = oEvent.getParameter("query"), // get user entered search keyword
				oListBinding = this.byId("productList").getBinding("items");
			
			// if the search keyword is not empty
			if (sQuery) {
				// add new filter to array
				// filter on field 'Name', with 'contains' operation, for search value 'sQuery'
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// apply filters to gridlist binding items
			oListBinding.filter(aFilter);
		}

	});

});