function initModel() {
	var sUrl = "/ODATA_ORG/V2/(S(iqxzv0lv3uldwkk4klal1s5m))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}