function initModel() {
	var sUrl = "/ODATA_ORG/TripPinRESTierService/(S(4og01lwlg52hl2wguyv41csg))/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}