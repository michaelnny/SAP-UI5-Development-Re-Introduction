sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast"
], function (Controller, Fragment, MessageToast) {
	"use strict";

	return Controller.extend("demo.ui5.MyContactsApp.controller.App", {

		// handle list item press event
		onListItemPress: async function (oEvent) {

			try {
				var oView = this.getView(),
					oItem = oEvent.getSource(),
					oDialog = null,
					sPath;

				if (!this.byId("contactDialog")) {
					// load asynchronous XML fragment
					oDialog = await Fragment.load({
						id: oView.getId(),
						name: "demo.ui5.MyContactsApp.view.fragments.ContactDialog",
						controller: this
					});

					// connect dialog to this view controller
					oView.addDependent(oDialog);

					// open dialog
					oDialog.open();
				} else {
					// open dialog
					this.byId("contactDialog").open();
				}

				// item binding context like: /Products(1)
				sPath = oItem.getBindingContext().getCanonicalPath();

				// bind element to dialog, the binding path is the same as item binding context like: /Products(1)
				this.byId("contactDialog").bindElement({
					path: sPath
				});

			} catch (err) {
				MessageToast.show("Failed to load dialog fragment");
			}
		},

		// handle close contact dialog button press event
		onCloseDialog: function () {
			this.byId("contactDialog").close();
		}

	});
});