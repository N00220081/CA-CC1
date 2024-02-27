class BarChart{
	constructor (obj){

		this.data = obj.data;

		//Charts dimensions & position
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;

		// Axis
		this.axisLineColour = obj.axisLineColour;
		this.axisLineThickness = obj.axisLineThickness;

		// Bar decoration
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		this.barColor = obj.barColor;
		//Bars
		this.barWidth = obj.barWidth;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;

		// Calculates maximum value in the data
		// map() = remaps a numver from one range to another
		this.maxValue = max(this.data.map(d => d[this.yValue]));
		// Scales based of chartHeight divided by maximum value
		this.scale = this.chartHeight / this.maxValue;

		//Labels
		this.labelColour = obj.labelColour;
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		this.labelFontStyle = obj.labelFontStyle;


		//Ticks
		this.numTicks = obj.numTicks;
		this.tickColor =  obj.tickColor;
		this.tickValueColor = obj.tickValueColor;
		this.tickTextSize = obj.tickTextSize;
		this.valueGap = obj.valueGap;
		this.tickLength = obj.tickLength;
		this.tickFontStyle = obj.tickFontStyle;


		// Title
		this.titleText = obj.titleText;
		this.titleFontStyle = obj.titleFontStyle;
		this.titleXOffset = obj.titleXOffset;
		this.titleYOffset = obj.titleYOffset;
		this.titleSize = obj.titleSize;
		this.titleColour = obj.titleColour;
		this.titleWidth = this.chartWidth/2;
		
	}

	render(){
		
		// Drawing the axis of the chart
		push();
		// Positioning of axis
		translate (this.xPos, this.yPos);
		strokeWeight(this.axisLineThickness)
		stroke(this.axisLineColour);
		// Height
		line(0,0,0,-this.chartHeight);
		// Width
		line(0,0,this.chartWidth,0 );
		
		// Calculates gap between bars
		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length + 1);
		// Extracting data from xValue for labels
		let xLabels = this.data.map(d => d[this.xValue]);

		
		push();

		// Moves the bars
		translate(gap, 0);
		for(let i = 0; i < this.data.length; i++){
			
			// Making the bars
			fill(this.barColor)
			noStroke();
			rect(0,0, this.barWidth, -this.data[i][this.yValue]*this.scale);
			
			// Labels
			push();
			// Moves the labels
			translate(this.barWidth/2,5);
			textAlign(LEFT, TOP);
			rotate(this.labelRotation);
			fill(this.labelColour);
			textSize(this.labelTextSize);
			textFont(this.labelFontStyle);
			text(xLabels[i],0,0);
			pop()
			// Moves the between the bars and labels
			translate(gap+this.barWidth,0)
		}
		pop();
// Ticks
		for(let i = 0; i<=this.numTicks;i++){
			push();
			// Moves the ticks
			translate(0,i*(-this.chartHeight/this.numTicks))
			noFill();
			stroke(this.tickColor)
			line(0,0,this.tickLength,0)
			textAlign(RIGHT, CENTER);
			noStroke();
			fill(this.tickValueColor);
			textSize(this.tickTextSize);
			textFont(this.tickFontStyle);

			let tickGap =  (this.maxValue / this.numTicks).toFixed(2);
			text((tickGap*i).toFixed(2),(this.valueGap) - 5,0)
			pop();
		}

	// Making the title for the chart
	textAlign(this.titleXOffset, this.titleYOffset);
	textSize(this.titleSize);
	textFont(this.titleFontStyle);
	fill(this.titleColour);
	text(this.titleText, this.titleWidth, -this.chartHeight-25);



		pop();
		
	}


}