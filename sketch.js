let barCharts = [];
let data1;
let data2;
let cleanData1=[];
let cleanData2=[];
let numRows;
let colors = ["#8C5483","#6C4166"];


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

        data:cleanData1,
        
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
        yValues:["Female","Male"],
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
        titleText: "How many Children Enrolled to Primary School from 1st - 6th Class",
        titleXOffset: CENTER,
        titleYOffset: BOTTOM,
        titleSize: 22,
        titleFontStyle:fontReg,
		titleColour: "#46387C",

        
    }

    // let barChart03 = {
    //     data:cleanData2,
    //     chartHeight:300,
    //     chartWidth:300,
    //     xPos:900,
    //     yPos:350,
    //     axisLineColour:"#d9d9d9",
    //     labelColour:"#37b3cc",
    //     barWidth:30,
    //     yValue: "Female",
    //     xValue:"Jorney_Time",
    //     labelRotation:45,
    //     labelSize:100,
    //     numTicks:5,
    //     barColor:"#03fc8c",
    //     barStroke:"#fcba03",
    //     barStrokeWeight:3,
    //     labelRotation:45,
    //     labelTextSize:10,
    //     tickColor:"#9003fc",
    //     tickValueColor:"#fc0335",
    //     valueGap:-10,
    //     tickLength:-5
    // }

    // let barChart04 = {
    //     data:cleanData2,
    //     chartHeight:300,
    //     chartWidth:300,
    //     xPos:100,
    //     yPos:750,
    //     axisLineColour:"#d9d9d9",
    //     labelColour:"#37b3cc",
    //     barWidth:30,
    //     yValues: "Female",
    //     xValue:"Jorney_Time",
    //     labelRotation:45,
    //     labelSize:100,
    //     numTicks:5,
    //     barColor:"#03fc8c",
    //     barColor2:"#f54275",
    //     barStroke:"#fcba03",
    //     barStrokeWeight:3,
    //     labelRotation:45,
    //     labelTextSize:10,
    //     tickColor:"#9003fc",
    //     tickValueColor:"#fc0335",
    //     valueGap:-10,
    //     tickLength:-5
    // }

    // let barChart05 = {
    //     data:cleanData2,
    //     chartHeight:300,
    //     chartWidth:300,
    //     xPos:500,
    //     yPos:750,
    //     axisLineColour:"#d9d9d9",
    //     labelColour:"#37b3cc",
    //     barWidth:30,
    //     yValue: "Female",
    //     xValue:"Jorney_Time",
    //     labelRotation:45,
    //     labelSize:100,
    //     numTicks:5,
    //     barColor:"#03fc8c",
    //     barStroke:"#fcba03",
    //     barStrokeWeight:3,
    //     labelRotation:45,
    //     labelTextSize:10,
    //     tickColor:"#9003fc",
    //     tickValueColor:"#fc0335",
    //     valueGap:-10,
    //     tickLength:-5
    // }


    barCharts.push(new BarChart(barChart))
    barCharts.push(new StackedBarChart(stackedBarChart))
    // barCharts.push(new BarChart(barChart03))
    // barCharts.push(new StackedBarChart(barChart04))
    // barCharts.push(new ScatterPlotChart(barChart05))
}

function draw() {
    background("#F2F2F2");
    barCharts.forEach(bar => bar.render())
}

