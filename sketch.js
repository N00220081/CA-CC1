let barCharts = [];
let data1;
let data2;
let cleanData1=[];
let cleanData2=[];
let numRows;
let colors = ["#8C5483","#53324D"];


let fontLight;
let fontReg;
let fontBold;

function preload(){
    data1 = loadTable("data/Enrolls.csv", "csv", "header");
    data2 = loadTable("data/combined.csv", "csv", "header");
    fontLight = loadFont('fonts/Roboto-Thin.ttf');
    fontReg = loadFont('fonts/Roboto-Regular.ttf');
    fontBold = loadFont("fonts/Roboto-Bold.ttf");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    pixelDensity(2);
    angleMode(DEGREES);

    numRows = data1.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData1.push(data1.rows[i].obj)
    }
    console.log(cleanData1)

    numRows = data2.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData2.push(data2.rows[i].obj)
    }
    console.log(cleanData2)

    let barChart = {

        data:cleanData1,
        
        // Size of chart
        chartHeight:300,
        chartWidth:400,

        // Position of chart
        xPos:100,
        yPos:400,

        // Axis decoration and the values of the chart
        axisLineColour:"#151126",
        axisLineThickness: 1.3,
        yValue: "Female",
        xValue:"Year",

        // Bars
        barWidth:28,
        barColor:"#8C5483",
        // barStroke:"#8C5483",
        // barStrokeWeight:1,

        // Labels
        labelRotation:45,
        labelColour:"#2F3159",
        labelTextSize:14,
        labelFontStyle:fontBold,

        
        // Ticks
        numTicks:5,
        tickColor:"#151126",
        tickValueColor:"#151126",
        tickFontStyle:fontReg,
        tickTextSize:14,
        tickLength:-5,
        valueGap:-10,


        // Title
        titleText: "How many Girls Enrolled to Primary School",
        titleXOffset: CENTER,
        titleYOffset: BOTTOM,
        titleSize: 22,
        titleFontStyle:fontReg,
		titleColour: "#46387C",

        
    }

    let stackedBarChart = {

        data:cleanData2,
        
        // Size of chart
        chartHeight:300,
        chartWidth:400,

        // Position of chart
        xPos:700,
        yPos:400,

        // Axis decoration and the values of the chart
        axisLineColour:"#151126",
        axisLineThickness: 1.3,
        xValue: "Year",
        yValues:["Junior_infants","Senior_infants"],
        zValue:"Total",

        // Bars
        barWidth:28,
        // barColor:"#8C5483",
        // barStroke:"#8C5483",
        // barStrokeWeight: 0,

        // Labels
        labelRotation:45,
        labelColour:"#2F3159",
        labelTextSize:14,
        labelFontStyle:fontBold,

        
        // Ticks
        numTicks:5,
        tickColor:"#151126",
        tickValueColor:"#151126",
        tickFontStyle:fontReg,
        tickTextSize:14,
        tickLength:-5,
        valueGap:-10,


        // Title
        titleText: "How many Children Enrolled to Junior & Senior infants Class",
        titleXOffset: CENTER,
        titleYOffset: BOTTOM,
        titleSize: 22,
        titleFontStyle:fontReg,
		titleColour: "#46387C",

        // Legend 
        legendX: 100,
        legendY: 100,
        legendWidth: 15,
        legendHeight: 15,
        legendTextSize: 15,
        legendText: ["Girls","Boys"],
        legendFontStyle: fontBold,
        legendFontColour: "#46387C"
        
        
    }

    let hundStackedBarChart = {

        data:cleanData1,
        
        // Size of chart
        chartHeight:300,
        chartWidth:400,

        // Position of chart
        xPos:100,
        yPos:900,

        // Axis decoration and the values of the chart
        axisLineColour:"#151126",
        axisLineThickness: 1.3,
        xValue: "Year",
        yValues:["Female", "Male"],
        zValue:"Total",

        // Bars
        barWidth:28,
        // barColor:"#8C5483",
        // barStroke:"#8C5483",
        // barStrokeWeight: 0,

        // Labels
        labelRotation:45,
        labelColour:"#2F3159",
        labelTextSize:14,
        labelFontStyle:fontBold,

        
        // Ticks
        numTicks:5,
        tickColor:"#151126",
        tickValueColor:"#151126",
        tickFontStyle:fontReg,
        tickTextSize:14,
        tickLength:-5,
        valueGap:-10,


        // Title
        titleText: "How many Children from 1st - 6th Class Enrolled",
        titleXOffset: CENTER,
        titleYOffset: BOTTOM,
        titleSize: 22,
        titleFontStyle:fontReg,
		titleColour: "#46387C",

        // Legend 
        // legendX: 100,
        // legendY: 100,
        legendWidth: 15,
        legendHeight: 15,
        legendTextSize: 15,
        legendText: ["Girls", "Boys"],
        legendFontStyle: fontBold,
        legendFontColour: "#46387C"
        
        
    }

    let horizontalBarChart = {

        data:cleanData1,
        
        // Size of chart
        chartHeight:300,
        chartWidth:400,

        // Position of chart
        xPos:700,
        yPos:900,

        // Axis decoration and the values of the chart
        axisLineColour:"#151126",
        axisLineThickness: 1.3,
        yValue: "Male",
        xValue:"Year",

        // Bars
        barWidth:28,
        barColor:"#8C5483",
        // barStroke:"#8C5483",
        // barStrokeWeight:1,

        // Labels
        labelRotation:45,
        labelColour:"#2F3159",
        labelTextSize:14,
        labelFontStyle:fontBold,

        
        // Ticks
        numTicks:5,
        tickColor:"#151126",
        tickValueColor:"#151126",
        tickFontStyle:fontReg,
        tickTextSize:14,
        tickLength:-5,
        valueGap:-10,


        // Title
        titleText: "How many Boys Enrolled to Primary School",
        titleXOffset: CENTER,
        titleYOffset: BOTTOM,
        titleSize: 22,
        titleFontStyle:fontReg,
		titleColour: "#46387C",

        
    }

    let scatterPlotChart = {

        data:cleanData2,
        
        // Size of chart
        chartHeight:400,
        chartWidth:500,

        // Position of chart
        xPos:1400,
        yPos:650,

        // Axis decoration and the values of the chart
        axisLineColour:"#151126",
        axisLineThickness: 1.3,
        yValue: "Junior_infants",
        xValue:"Year",

        // Bars
        barWidth:28,
        barColor:"#8C5483",
        // barStroke:"#8C5483",
        // barStrokeWeight:1,

        // Labels
        labelRotation:45,
        labelColour:"#2F3159",
        labelTextSize:14,
        labelFontStyle:fontBold,

        
        // Ticks
        numTicks:10,
        tickColor:"#151126",
        tickValueColor:"#151126",
        tickFontStyle:fontReg,
        tickTextSize:14,
        tickLength:-5,
        valueGap:-10,


        // Title
        titleText: "How many Girls Enrolled to Primary School",
        titleXOffset: CENTER,
        titleYOffset: BOTTOM,
        titleSize: 22,
        titleFontStyle:fontReg,
		titleColour: "#46387C",

        
    }


    barCharts.push(new BarChart(barChart));
    barCharts.push(new StackedBarChart(stackedBarChart));
    barCharts.push(new HundStackedBarChart(hundStackedBarChart));
    barCharts.push(new HorizontalBarChart (horizontalBarChart));
    barCharts.push(new ScatterPlotChart(scatterPlotChart));
}

function draw() {
    background("#F2F2F2");
    barCharts.forEach(bar => bar.render())
}

