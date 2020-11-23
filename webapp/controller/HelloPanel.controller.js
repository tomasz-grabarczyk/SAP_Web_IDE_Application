sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("PrimordialApp.controller.HelloPanel", {
		onShowHello: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sName = this.getView().getModel().getProperty("/person/name");
			var sSurname = this.getView().getModel().getProperty("/person/surname");
			var sCarBrand = this.getView().getModel().getProperty("/car/brand");
			var sCarYear = this.getView().getModel().getProperty("/car/year");
			var sMessage = oBundle.getText("helloMsg", [sName, sSurname, sCarBrand, sCarYear]);
			MessageToast.show(sMessage);
		},
		onOpenDialog: function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	});
});