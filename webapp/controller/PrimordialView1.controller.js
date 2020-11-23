sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("PrimordialApp.controller.PrimordialView1", {
		onOpenDialog: function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	});
});