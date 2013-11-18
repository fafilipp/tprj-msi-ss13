var shapedefs = [
	{
		name: "PI_Vessel_Vertical",
		shapes: [
			{
				name: "RoundedRectangle",
				params: {
					size: {width: 120, height: 60},
					curve: {width: 50, height: 50}
				},
				shapes: [
					{
						name: "Text",
						params: {
							position: {x: 3, y: 20},
							size: {width: 100, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
	{
		name: "PI_Boiler",
		anchors: [
				{type: "fixpoint", x: 0, y: 30},
				{type: "fixpoint", x: 0, y: 70},
				{type: "fixpoint", x: 90, y: 30},
				{type: "fixpoint", x: 90, y: 70},
		],
		shapes: [
			{
				name: "RoundedRectangle",
				params: {
					position: {x: 0, y: 0},
					size: {width: 60, height: 100},
					curve: {width: 30, height: 30}
				},
			}
			,
			{
				name: "Polyline",
				params: {
					points: [
						{
							x: 90,
							y: 70,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 30,
							y: 70,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 50,
							y: 50,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 30,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 90,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
			{
				name: "Text",
				params: {
					position: {x: 60, y: 0},
					size: {width: 100, height: 20},
					align: {
						horizontal: "left",
						vertical: "top"
					},
				}
			}
			,
		]
	}
	,
	{
		name: "PI_CentralHeatingUnit",
		anchors: [
				{type: "fixpoint", x: 30, y: 0},
				{type: "fixpoint", x: 70, y: 0},
				{type: "fixpoint", x: 25, y: 110},
				{type: "fixpoint", x: 75, y: 110},
		],
		shapes: [
			{
				name: "RoundedRectangle",
				params: {
					position: {x: 0, y: 30},
					size: {width: 100, height: 100},
					curve: {width: 20, height: 20}
				},
			}
			,
			{
				name: "Polyline",
				params: {
					points: [
						{
							x: 30,
							y: 0,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 30,
							y: 70,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 50,
							y: 50,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 70,
							y: 70,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 70,
							y: 0,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
			{
				name: "Text",
				params: {
					position: {x: 100, y: 0},
					size: {width: 100, height: 20},
					align: {
						horizontal: "left",
						vertical: "top"
					},
				}
			}
			,
			{
				name: "Rectangle",
				params: {
					position: {x: 25, y: 100},
					size: {width: 50, height: 20},
				},
			}
			,
		]
	}
	,
	{
		name: "PI_Vessel_Horizontal",
		shapes: [
			{
				name: "RoundedRectangle",
				params: {
					size: {width: 60, height: 120},
					curve: {width: 50, height: 50}
				},
				shapes: [
					{
						name: "Text",
						params: {
							position: {x: 3, y: 50},
							size: {width: 60, height: 20},
							align: {
								horizontal: "left",
								vertical: "top"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
	{
		name: "PI_HeatExchanger",
		anchors: [
				{type: "fixpoint", x: 0, y: 50},
				{type: "fixpoint", x: 90, y: 30},
				{type: "fixpoint", x: 90, y: 70},
		],
		shapes: [
			{
				name: "Ellipse",
				params: {
					position: {x: 0, y: 20},
					size: {width: 60, height: 60},
				},
			}
			,
			{
				name: "Polyline",
				params: {
					points: [
						{
							x: 90,
							y: 70,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 30,
							y: 70,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 50,
							y: 50,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 30,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 90,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
			{
				name: "Text",
				params: {
					size: {width: 100, height: 20},
					align: {
						horizontal: "left",
						vertical: "top"
					},
				}
			}
			,
		]
	}
	,
	{
		name: "PI_Valve",
		shapes: [
			{
				name: "Polygon",
				params: {
					points: [
						{
							x: 0,
							y: 0,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 120,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 120,
							y: 0,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 0,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				},
			}
			,
			{
				name: "Text",
				params: {
					position: {x: 30, y: 0},
					size: {width: 60, height: 20},
					align: {
						horizontal: "left",
						vertical: "top"
					},
				}
			}
			,
		]
	}
	,
	{
		name: "PI_Valve_Manual",
		shapes: [
			{
				name: "Polygon",
				params: {
					points: [
						{
							x: 0,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 120,
							y: 120,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 120,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 0,
							y: 120,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				},
			}
			,
			{
				name: "Line",
				params: {
					points: [
						{
							x: 60,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 60,
							y: 90,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
			{
				name: "Line",
				params: {
					points: [
						{
							x: 40,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 80,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
			{
				name: "Text",
				params: {
					position: {x: 30, y: 100},
					size: {width: 60, height: 20},
					align: {
						horizontal: "left",
						vertical: "top"
					},
				}
			}
			,
		]
	}
	,
	{
		name: "PI_Valve_Control",
		shapes: [
			{
				name: "Polygon",
				params: {
					points: [
						{
							x: 0,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 120,
							y: 120,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 120,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 0,
							y: 120,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				},
			}
			,
			{
				name: "Line",
				params: {
					points: [
						{
							x: 60,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 60,
							y: 90,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
			{
				name: "Polygon",
				params: {
					points: [
						{
							x: 40,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 60,
							y: 0,
							curveBefore: 30,
							curveAfter: 30
						},
						{
							x: 80,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				},
			}
			,
			{
				name: "Text",
				params: {
					position: {x: 30, y: 100},
					size: {width: 60, height: 20},
					align: {
						horizontal: "left",
						vertical: "top"
					},
				}
			}
			,
		]
	}
	,
	{
		name: "PI_Pump",
		shapes: [
			{
				name: "Ellipse",
				params: {
					size: {width: 60, height: 60},
				},
				shapes: [
					{
						name: "Line",
						params: {
							points: [
								{
									x: 8,
									y: 10,
									curveBefore: 0,
									curveAfter: 0
								},
								{
									x: 60,
									y: 30,
									curveBefore: 0,
									curveAfter: 0
								},
							]
						}
					}
					,
					{
						name: "Line",
						params: {
							points: [
								{
									x: 8,
									y: 50,
									curveBefore: 0,
									curveAfter: 0
								},
								{
									x: 60,
									y: 30,
									curveBefore: 0,
									curveAfter: 0
								},
							]
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 5, y: 20},
							size: {width: 60, height: 20},
							align: {
								horizontal: "left",
								vertical: "top"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
	{
		name: "PI_Pump_Vacuum",
		shapes: [
			{
				name: "Ellipse",
				params: {
					size: {width: 60, height: 60},
				},
				shapes: [
					{
						name: "Line",
						params: {
							points: [
								{
									x: 8,
									y: 10,
									curveBefore: 0,
									curveAfter: 0
								},
								{
									x: 57,
									y: 20,
									curveBefore: 0,
									curveAfter: 0
								},
							]
						}
					}
					,
					{
						name: "Line",
						params: {
							points: [
								{
									x: 8,
									y: 50,
									curveBefore: 0,
									curveAfter: 0
								},
								{
									x: 57,
									y: 40,
									curveBefore: 0,
									curveAfter: 0
								},
							]
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 5, y: 20},
							size: {width: 60, height: 20},
							align: {
								horizontal: "left",
								vertical: "top"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
	{
		name: "PI_SystemEnd",
		shapes: [
			{
				name: "Polyline",
				params: {
					points: [
						{
							x: 10,
							y: 30,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 20,
							y: 45,
							curveBefore: 30,
							curveAfter: 30
						},
						{
							x: 10,
							y: 60,
							curveBefore: 0,
							curveAfter: 0
						},
						{
							x: 0,
							y: 75,
							curveBefore: 30,
							curveAfter: 30
						},
						{
							x: 10,
							y: 90,
							curveBefore: 0,
							curveAfter: 0
						},
					]
				}
			}
			,
		]
	}
	,
	{
		name: "PI_Joint",
		shapes: [
			{
				name: "Ellipse",
				params: {
					size: {width: 10, height: 10},
				},
			}
			,
		]
	}
	,
	{
		name: "PI_Location_NoLine",
		shapes: [
			{
				name: "Ellipse",
				params: {
					size: {width: 50, height: 50},
				},
				shapes: [
					{
						name: "Text",
						params: {
							position: {x: 0, y: 5},
							size: {width: 50, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 0, y: 30},
							size: {width: 50, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
	{
		name: "PI_Location_SolidLine",
		shapes: [
			{
				name: "Ellipse",
				params: {
					size: {width: 50, height: 50},
				},
				shapes: [
					{
						name: "Line",
						params: {
							points: [
								{
									x: 0,
									y: 25,
									curveBefore: 0,
									curveAfter: 0
								},
								{
									x: 50,
									y: 25,
									curveBefore: 0,
									curveAfter: 0
								},
							]
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 0, y: 5},
							size: {width: 50, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 0, y: 30},
							size: {width: 50, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
	{
		name: "PI_Location_DashedLine",
		shapes: [
			{
				name: "Ellipse",
				params: {
					size: {width: 50, height: 50},
				},
				shapes: [
					{
						name: "Line",
						params: {
							points: [
								{
									x: 0,
									y: 25,
									curveBefore: 0,
									curveAfter: 0
								},
								{
									x: 50,
									y: 25,
									curveBefore: 0,
									curveAfter: 0
								},
							]
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 0, y: 5},
							size: {width: 50, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
					{
						name: "Text",
						params: {
							position: {x: 0, y: 30},
							size: {width: 50, height: 20},
							align: {
								horizontal: "center",
								vertical: "middle"
							},
						}
					}
					,
				]
			}
			,
		]
	}
	,
]
