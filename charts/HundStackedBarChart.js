class HundStackedBarChart {
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
		this.xValue = obj.xValue;
		this.yValues = obj.yValues;
		this.zValue = obj.zValue;
		this.maxValue = max(this.data.map(d => d[this.zValue]));

		//Labels
		this.labelColour = obj.labelColour;
		this.scale = this.chartHeight / this.maxValue;
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

		// Legend
		this.legendX = obj.chartWidth + 20;
        this.legendY = obj.chartHeight/2;
		this.legendWidth = obj.legendWidth;
		this.legendHeight = obj.legendHeight;
		this.legendTextSize = obj.legendTextSize;
		this.legendText = obj.legendText;
		this.legendFontStyle = obj.legendFontStyle;
		this.legendFontColour = obj.legendFontColour;
		this.legendTextX = this.legendX + 25;
		this.legendTextY = this.legendY - 12;

	}

	render() {

		push();
		translate(this.xPos, this.yPos);
		strokeWeight(this.axisLineThickness)
		stroke(this.axisLineColour);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);


		let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1)
		let xLabels = this.data.map(d => d[this.xValue]);


		push();

		translate(gap, 0);

		// Legend
		for (let l = 0; l < this.yValues.length; l++) {
			noStroke();
			textSize(this.legendTextSize);
			textFont(this.legendFontStyle);
			fill(this.legendFontColour);
			text(this.legendText[l], this.legendTextX, -this.legendTextY - (l * 25));
            fill(colors[l]); 
            rect(this.legendX, -this.legendY - (l * 25), this.legendWidth, this.legendHeight);
		}

		// Making the bars
		for (let i = 0; i < this.data.length; i++) {
			push();
		
				for (let y = 0; y < this.yValues.length; y++) {
					let totalValue = (this.data[i][this.yValues[y]] / this.data[i][this.zValue]);
					let barHeight = (this.chartHeight * totalValue);
					noStroke();
					fill(colors[y % colors.length]);
					rect(0, 0, this.barWidth, -barHeight);
					translate(0, -barHeight);
				}
			// Labels
			pop();

			push();
			translate(this.barWidth / 2, 5);
			textAlign(LEFT, TOP);
			rotate(this.labelRotation);
			noStroke();
			fill(this.labelColour);

			textSize(this.labelTextSize);
			textFont(this.labelFontStyle);
			text(xLabels[i], 0, 0);
			pop()

			translate(gap + this.barWidth, 0);

			// Legend
			

		}
		pop();

		// Ticks
		for (let i = 0; i <= this.numTicks; i++) {
			push();
			translate(0, i * (-this.chartHeight / this.numTicks))
			noFill();
			stroke(this.tickColor)
			line(0, 0, this.tickLength, 0)
			textAlign(RIGHT, CENTER);
			noStroke();
			fill(this.tickValueColor);
			textSize(this.tickTextSize);
			textFont(this.tickFontStyle);

			let tickPercentage = (i / this.numTicks) * 100;
			text(tickPercentage.toFixed() + '%', (this.valueGap) - 5, 0);
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