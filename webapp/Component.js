sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"tsl/hrCOVID/model/models",
	"sap/ui/model/json/JSONModel"
	
], function(UIComponent, Device, models,JSONModel) {
	"use strict";

	return UIComponent.extend("tsl.hrCOVID.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
				this.oRouter = this.getRouter();
			
			var oModel = new JSONModel();
			oModel.loadData("https://coronavirus-19-api.herokuapp.com/countries");	
			this.setModel(oModel);
			
			var oModelAll = new JSONModel();
			oModelAll.loadData("https://coronavirus-19-api.herokuapp.com/all");	
			this.setModel(oModelAll,"oModelAll");
			
			
						// set device model
			var oDeviceModel = new JSONModel({
				// feature toggle for a save for later functionality in the Cart.view.xml
				isTouch: sap.ui.Device.support.touch,
				isNoTouch: !sap.ui.Device.support.touch,
				isPhone: sap.ui.Device.system.phone,
				isNoPhone: !sap.ui.Device.system.phone,
				listMode: (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
				listItemType: (sap.ui.Device.system.phone) ? "Active" : "Inactive"
			});
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
				if (!sap.ui.Device.system.phone) {
				// this.oRouter.getTargets().display("Home");
				}
					this.oRouter.initialize();
			
			var oModel = new JSONModel();
			oModel.loadData("model/countryCode.json");
			this.setModel(oModel,"countryFlag");
			
			var oDateModel = new JSONModel({
					"date" : new Date()
			});
			this.setModel(oDateModel,"oDateModel");
			
			var oModel = new JSONModel();
			oModel.loadData("https://api.covid19india.org/v2/state_district_wise.json");
			this.setModel(oModel,"state");
			
			var oModel = new JSONModel({
				hide:false
			});
			this.setModel(oModel,"indiaStats");
			
			
			
			// var oModel = new JSONModel();
			// oModel.loadData("https://api.printful.com/countries");
			// this.setModel("oModel","countryFlag");
		
			// var oModel1 = new JSONModel();
			// oModel1.loadData("https://api.covid19india.org/data.json");
			// this.setModel("oModel1","indianState");
			
		}
	});
});