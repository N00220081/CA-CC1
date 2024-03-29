class HorizontalBarChart {
	constructor(obj) {
		this.data = obj.data;

		//Charts
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
		this.maxValue = max(this.data.map(d => d[this.yValue]));
		this.scale = this.chartWidth / this.maxValue;

		//Labels
		this.labelColour = obj.labelColour;
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		this.labelFontStyle = obj.labelFontStyle;


		//Ticks
		this.numTicks = obj.numTicks;
		this.tickColor = obj.tickColor;
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
		this.titleWidth = this.chartWidth / 2;

	}

	render() {

		push();
		translate(this.xPos, this.yPos);
		strokeWeight(this.axisLineThickness)
		stroke(this.axisLineColour);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);



		let gap = (this.chartHeight - (this.data.length * this.barWidth)) / (this.data.length + 1)
		let xLabels = this.data.map(d => d[this.xValue]);


		push();

		translate(gap, 0);
		for (let i = 0; i < this.data.length; i++) {

			// Making the bars

			fill(this.barColor)
			noStroke();
			rect(0, -300, this.data[i][this.yValue] * this.scale, this.barWidth);

			// Labels
			push();
			translate(-10, -this.chartHeight+10);
			textAlign(RIGHT, CENTER);
			// rotate(this.labelRotation);
			fill(this.labelColour);
			textSize(this.labelTextSize);
			textFont(this.labelFontStyle);
			text(xLabels[i], 0, 0);
			pop()
			translate(0, gap + this.barWidth);
		}
		pop();

		// Ticks
		for (let i = 0; i <= this.numTicks; i++) {
			push();
			translate(i * (this.chartWidth / this.numTicks), 15);
			noFill();
			stroke(this.tickColor);
			line(0, -15, 0, this.tickLength); // Adjust line coordinates
			textAlign(LEFT, TOP); // Change textAlign
			noStroke();
			fill(this.tickValueColor);
			textSize(this.tickTextSize);
			textFont(this.tickFontStyle);

			let tickGap = (this.maxValue / this.numTicks).toFixed(2);
			text((tickGap * i).toFixed(2), 0, -this.valueGap-10); // Adjust text position
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