sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"tsl/hrCOVID/utill/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function(Controller, formatter, Filter, FilterOperator,JSONModel) {
	"use strict";

	return Controller.extend("tsl.hrCOVID.controller.Master", {
		formatter: formatter,

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tsl.hrCOVID.view.Master
		 */
		onInit: function() {
			var oComponent = this.getOwnerComponent();
			this._router = oComponent.getRouter();
			this._router.getRoute("TargetHomeOnly").attachMatched(this._loadMasterPageOnBack, this);
			// this._router.getRoute("TargetHome").attachMatched(this._loadMasterPageOnBack, this);
			
			// var coolifier = this.onGet("cool");
			// var a = coolifier("conference");
			// alert(a);
		},
		
		// onGet: function(makeadj){
		// return function(string)
		// {
		// 	return makeadj + " "+ string ;
		// };	
		// },
		_loadMasterPageOnBack:function(oEvent){
			var oSelectIndex = oEvent.getParameter("arguments").index;
			var oList = this.getView().byId("myList");
			var itemToBeSelected = oList.getItems()[parseInt(oSelectIndex)];
			oList.setSelectedItem(itemToBeSelected);
		},
		
		onSearch: function(oEvent) {
			var data = oEvent.getParameter("query");
			if (!data) {
				data = oEvent.getParameter("newValue");
			}
			if(data){
			var oFilter = new Filter("country", FilterOperator.Contains, data);
			this.getView().byId("myList").getBinding("items").filter(oFilter);
			}else {
					this.getView().byId("myList").getBinding("items").filter([]);
				}
		},
		onObjectPress:function(oEvent){
			var scountryName = oEvent.getSource().getProperty("title");
			var oBindingData = oEvent.getSource().getBindingContextPath();
				var myIndex = oBindingData.split('/')[oBindingData.split('/').length-1];
			
				if (scountryName !== 'India'){
					
				this._router.navTo("TargetHomeOnly",{
					country : scountryName,
					index : myIndex
				}); 
				
				}else{
					this._router.navTo("TargetHome",{
					country : scountryName,
					index : myIndex
				}); 
				}
		},
		
		onItemPress: function(oEvent) {
				var scountryName = oEvent.getParameter("listItem").getTitle();
				var oBindingData = oEvent.getParameter("listItem").getBindingContextPath();
				var myIndex = oBindingData.split('/')[oBindingData.split('/').length-1];
				if (this.getOwnerComponent().getModel("device") === 'phone' ){
					this._router.navTo("TargetPhoneHomeOnly",{
					country : scountryName,
					index : myIndex
				}); 
					
				}
					
				
				if (scountryName !== 'India'){
					
				this._router.navTo("TargetHomeOnly",{
					country : scountryName,
					index : myIndex
				}); 
				
				}else{
					this._router.navTo("TargetHome",{
					country : scountryName,
					index : myIndex
				}); 
				}
				
				// var oModel = new JSONModel("https://coronavirus-19-api.herokuapp.com/countries/India");
				// // var oModel = this.getOwnerComponent().getModel("oModelAll");
				// sap.ui.getCore().setModel(oModel,"oModelAll");
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf tsl.hrCOVID.view.Master
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tsl.hrCOVID.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tsl.hrCOVID.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});