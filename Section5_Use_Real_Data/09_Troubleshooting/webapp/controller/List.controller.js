sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/m/MessageToast",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
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
		onSortProductByPrice: function () {
			var oListBinding = this.byId("productList").getBinding("items"); // gridlist aggreagation binding items

			// apply sorter to gridlist items
			oListBinding.sort(
				new Sorter("Price", "desc")
			);
		},

		// handle refresh button press event
		onRefresh: function () {
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
		},

		// handle create product button press event
		onCreateProduct: function () {
			var oView = this.getView();
			// create dialog lazily if can't find the dialog by it's id
			if (!this.byId("createProductDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "demo.ui5.ProductListApp.view.fragments.CreateProductDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				// open dialog
				this.byId("createProductDialog").open();
			}
		},

		// handle submit new product button (in create product dialog) press event
		onSubmitNewProduct: function () {
			// get values from the input of dialog
			var oIpProductId = this.byId("inputId"),
				oIpProductName = this.byId("inputName"),
				oIpPrice = this.byId("inputPrice"),
				oIpRating = this.byId("inputRating"),
				oDPReleaseDate = this.byId("DTP1"),
				oIpDesciption = this.byId("inputDescription"),
				oNewProduct = {},
				oModel;

			// get default OData service model
			oModel = this.getView().getModel();

			// new product data
			oNewProduct.ID = oIpProductId.getValue();
			oNewProduct.Name = oIpProductName.getValue();
			oNewProduct.Price = oIpPrice.getValue();
			oNewProduct.Rating = parseInt(oIpRating.getValue(), 10); // parse string to integer: oInputRating.getValue() is a string
			oNewProduct.ReleaseDate = oDPReleaseDate.getValue();
			oNewProduct.Description = oIpDesciption.getValue();

			/**
			 * use OData (v2) create() method to create a new entity
			 * create(sPath, oData, mParameters?)
			 * sPath is the entityset path: /Products
			 * oData is the product (entity entry)  will be created
			 */
			oModel.create("/Products", oNewProduct, {
				success: function (res) {
					MessageToast.show("New product created");
				},
				error: function (err) {
					MessageToast.show("Failed to create new product");
				}
			});

			this.byId("createProductDialog").close();
		},

		// close create product dialog
		onCancelCreateProduct: function () {
			this.byId("createProductDialog").close();
		},

		// handle update product button (in product dialog) press event
		onUpdateProduct: function () {
			var oModel = this.getView().getModel(),
				oTextArea = this.byId("textAreaProdDesc"),
				sPath = this.byId("productDialog").getElementBinding().getPath(), // dialog element binding path
				oData = {}; // empty object

			// set Description to the value of sap.m.TextArea
			oData.Description = oTextArea.getValue();

			/**
			 * use OData (v2) update() method to update an entity entry
			 * update(sPath, oData, mParameters?)
			 * sPath is the entity path like: /Products(1)
			 * oData is the product (entity entry) will be updated
			 */
			oModel.update(sPath, oData, {
				// when update succeed
				success: function (res) {
					MessageToast.show("Product updated");
				},
				// when update failed
				error: function (err) {
					MessageToast.show("Failed to update product");
				}
			});

			// close dialog
			this.byId("productDialog").close();
		},

		// handle delete product event
		onDeleteProduct: function (oEvent) {
			var oProduct = oEvent.getParameter("listItem"), // get product marked for delete operation
				oModel = this.getView().getModel(),
				sPath;

			// get the binding path for the item
			sPath = oProduct.getBindingContext().getPath();

			// use remove() method to delete an entry
			oModel.remove(sPath, {
				success: function (res) {
					MessageToast.show("Product deleted");
				},
				error: function (err) {
					MessageToast.show("Failed to delete product");
				}
			});
		},

		// handle switch gridlist mode button press event
		onSwitchGridListMode: function (oEvent) {
			var oButton = oEvent.getSource(),
				sMode = this.byId("productList").getMode(),
				sNewMode = "None",
				sType = "Transparent";

			if (sMode === "None") {
				sNewMode = "Delete";
				sType = "Emphasized";
			}

			oButton.setType(sType);
			this.byId("productList").setMode(sNewMode);
		}

		/*
		 * example code for OData model read() for OData V2
		 * 
		 oModel.read("/Products(0)", {
			success: function (res) {
				console.log(res);
			},
			error: function (err) {
				console.log(err);
			}
		})
		 */

	});

});