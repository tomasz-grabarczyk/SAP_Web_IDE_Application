sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"PrimordialApp/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("PrimordialApp.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				person: {
					name: "Tomasz",
					surname: "Grabarczyk"
				},
				
				car: {
					brand: "Opel",
					year: "2020"
				}
			};
			
			this.setModel(new JSONModel(oData));
			this.helloDialog = new HelloDialog();
		}
	});
});