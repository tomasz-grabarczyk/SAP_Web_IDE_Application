sap.ui.define([
	"sap/ui/base/Object"
], function (Object) {
	"use strict";
	return Object.extend("PrimordialApp.controller.HelloDialog", {
		_getDialog: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("PrimordialApp.view.HelloDialog", this);
			}
			return this._oDialog;
		},
		
		open: function (oView) {
			var oDialog = this._getDialog();
			oView.addDependent(oDialog);
			oDialog.open();
		},
		
		onCloseDialog: function () {
			this._getDialog().close();
		}
	});
});