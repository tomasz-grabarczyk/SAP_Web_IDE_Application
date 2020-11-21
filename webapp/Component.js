sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
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
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});