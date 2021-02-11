sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/viz/ui5/format/ChartFormatter',
	'sap/viz/ui5/api/env/Format',
	'tsl/hrCOVID/InitPage'

], function(Controller, JSONModel, ChartFormatter, Format, InitPageUtil) {
	"use strict";
	
	return Controller.extend("tsl.hrCOVID.controller.Home", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tsl.hrCOVID.view.Home
		 */
		 //this.getView().byId("countryListTitleId").setVisible(true);
		oVizFrame: null,
			oVizFrame1: null,
		onInit: function() {
			this.array = [];
			
			var oComponent = this.getOwnerComponent();
			this._router = oComponent.getRouter();
			this._router.getRoute("TargetHome").attachMatched(this.HomeDetails, this);
			this._router.getRoute("TargetHomeOnly").attachMatched(this.HomeDetails, this);
			this._router.getRoute("TargetState").attachMatched(this.HomeStateDetails, this);
			
			var oModel = this.getOwnerComponent().getModel();
			// this._router.getRoute("TargetMasterOnly").attachMatched(this.HomeDetails, this);

			Format.numericFormatter(ChartFormatter.getInstance());
			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
			
			
			oVizFrame.setVizProperties({
				legend: {
					title: {
						visible: true
					}
				},
				plotArea: {
					dataLabel: {
						visible: true
					},
					colorPalette: d3.scale.category20().range(),
					drawingEffect: "glossy"
				},
				title: {
					text: "World Statistics COVID-19 ",
					visible: true
				}
			});
			debugger;
			var oModel = new JSONModel();
			oModel.loadData("https://coronavirus-19-api.herokuapp.com/countries");
			oModel.attachEventOnce("requestCompleted",function( ){
				this.getData().splice(0,1);
			});
			oVizFrame.setModel(oModel);
			var oPopOver = this.getView().byId("idPopOver");
			oPopOver.connect(oVizFrame.getVizUid());
			oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);

			InitPageUtil.initPageSettings(this.getView());

			// var that = this;
			// oModel.attachRequestCompleted(function() {
			// 	that.dataSort(this.getData());
			// });
		},
			// onBeforeRendering: function() {
			// 	var oGetModel = this.getView().getModel();
			// 	debugger
			// 	},
		HomeDetails:function(oEvent){
			this.getOwnerComponent().getModel("indiaStats").setProperty("/hide",false);
			var sCountryName = oEvent.getParameter("arguments").country;
			var oModel = new JSONModel();
			oModel.loadData("https://coronavirus-19-api.herokuapp.com/countries/"+sCountryName);
			this.getView().setModel(oModel,"oModelAll");
			
		},
		HomeStateDetails:function(oEvent){
			this.getOwnerComponent().getModel("indiaStats").setProperty("/hide",true);
			debugger;
			var sStateName = oEvent.getParameter("arguments").state;
			var oModel = this.getOwnerComponent().getModel("state");
			
			Format.numericFormatter(ChartFormatter.getInstance());
			var oVizFrame1 = this.oVizFrame1 = this.getView().byId("idVizFrame1");
			
			
			oVizFrame1.setVizProperties({
				legend: {
					title: {
						visible: true
					}
				},
				plotArea: {
					dataLabel: {
						visible: true
					},
					colorPalette: d3.scale.category10().range(),
					// colorPalette : ['red','green','orange'],
					drawingEffect: "glossy"
				},
				title: {
					text: "India Statistics COVID-19 ",
					visible: true
				}
			});
			// var oModel = new JSONModel();
			// oModel.loadData("https://coronavirus-19-api.herokuapp.com/countries");
			// oModel.attachEventOnce("requestCompleted",function( ){
			// 	this.getData().splice(0,1);
			// });
			// oVizFrame1.setModel(oModel);
						
					var value = oModel.oData;
				
				$.each(value, function (index) {
					if (value[index].state === sStateName){
						var district = [];
						
						district = this.districtData;
						this.array = district;
						var oModel1 = new JSONModel();
						oModel1.setData(district);
							oVizFrame1.setModel(oModel1);
						
					}
				});
				
			
			var oPopOver1 = this.getView().byId("idPopOver1");
			oPopOver1.connect(oVizFrame1.getVizUid());
			oPopOver1.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);

			InitPageUtil.initPageSettings(this.getView());
		},
		
		// dataSort: function(dataset) {
		// 	//let data sorted by revenue
		// 	if (dataset && dataset.hasOwnProperty("milk")) {
		// 		var arr = dataset.milk;
		// 		arr = arr.sort(function(a, b) {
		// 			return b.Revenue - a.Revenue;
		// 		});
		// 	}
		// },
		onPressDetailBack:function(oEvent){
				
					this._router.getTargets().display("Master");
				// this._router.navTo("TargetMasterOnly");
				// oApp.to("MasterViewId");
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tsl.hrCOVID.view.Home
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tsl.hrCOVID.view.Home
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tsl.hrCOVID.view.Home
		 */
		//	onExit: function() {
		//
		//	}

	});

});