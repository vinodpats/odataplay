sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.patsODataPlay.controller.View1", {
		
		onInit: function() {
			
			//if we define default model in manifest.json, we do not even need below line
				var oModel = this.getOwnerComponent().getModel("oDataModel");
				
				this.getView().setModel(oModel);
				
		}

	});
});