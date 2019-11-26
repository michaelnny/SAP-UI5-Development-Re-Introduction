sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast"
], function (Controller, Fragment, MessageToast) {
	"use strict";

	return Controller.extend("demo.ui5.MyContactsApp.controller.App", {

		// handle create contact button press event
		onCreateContact: async function () {
			try {
				var oList = this.byId("contactList"),
					oBinding = oList.getBinding("items"), // list binding items
					// dummy contact information
					oNewContact = {
						"UserName": "testuser01",
						"FirstName": "Test",
						"LastName": "Use01"
					},
					oContext;

				// OData model V4 to create new entry
				oContext = await oBinding.create(oNewContact);

				MessageToast.show("New contact created");
			} catch (err) {
				MessageToast.show("Failed to create new contact");
			}
		},

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
		},

		// update contact
		onUpdateContact: async function () {
			try {
				var oModel = this.getView().getModel();
				await oModel.submitBatch("peopleGroup");

				if (!this.byId("contactList").getBinding("items").hasPendingChanges()) {
					this.byId("contactList").getBinding("items").refresh();
					this.byId("contactDialog").close();
					MessageToast.show("Contact updated");
				}

			} catch (err) {
				MessageToast.show("Failed to update contact");
			}
		},

		// handle delete contact event
		onDeleteContact: async function (oEvent) {
			try {
				var oContact = oEvent.getParameter("listItem");
				await oContact.getBindingContext().delete("$direct");
				MessageToast.show("Contact deleted");
			} catch (err) {
				MessageToast.show("Failed to delete contact");
			}
		},

		// handle reset change button press event
		onResetChanges: async function (oEvent) {
			try {
				var oModel = this.getView().getModel(),
					// Mark the operation as deferred by inserting an ellipsis ("...") in the brackets
					// oOperation = oModel.bindContext("/ResetDataSource(...)");
					oOperation = oEvent.getSource().getObjectBinding();
				await oOperation.execute();
				oModel.refresh();
				MessageToast.show("Reset changes succeed");
			} catch (err) {
				MessageToast.show("Reset changes failed");
			}
		}

	});
});