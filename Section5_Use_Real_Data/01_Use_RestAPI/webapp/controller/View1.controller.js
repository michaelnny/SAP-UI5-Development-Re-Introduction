sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("demo.ui5.PublicAPI.controller.View1", {
		onInit: function () {

			this._oModel = new JSONModel({
				demo: []
			});
			this.getView().setModel(this._oModel);
			
			// call function to get data from 
			this.asyncGetData();
			
		},
		
		// use async function to call getAPIData promise function
		asyncGetData: async function () {

			try {
				// call promise to get data
				var response = await fetch('https://jsonplaceholder.typicode.com/todos');
				// convert to json format
				var data = await response.json();
				
				// update model data
				this._oModel.setProperty("/demo", data);
			} catch (err) {
				console.log(err);
			}

		}
	});
});