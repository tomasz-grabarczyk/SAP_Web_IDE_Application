sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
		
	return Controller.extend("PrimordialApp.controller.PrimordialView1", {
		onShowHello : function () {
			MessageToast.show("Oh... Hello there!");
		}
	}); 
});
	
	
	

