sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("PrimordialApp.controller.PrimordialView1", {
		onShowHello: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sName = this.getView().getModel().getProperty("/person/name");
			var sSurname = this.getView().getModel().getProperty("/person/surname");
			var sMessage = oBundle.getText("helloMsg", [sName, sSurname]);
			MessageToast.show(sMessage);
		}
	});
});