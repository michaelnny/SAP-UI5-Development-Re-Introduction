/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/ui5/ProductListApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});