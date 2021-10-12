import React  from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = generateChartData();

// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "visits";
series.dataFields.dateX = "date";
series.strokeWidth = 1;
series.minBulletDistance = 10;
series.tooltipText = "{valueY}";
series.fillOpacity = 0.1;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.fillOpacity = 0.5;
series.tooltip.label.padding(12, 12, 12, 12)

let seriesRange = dateAxis.createSeriesRange(series);
seriesRange.contents.strokeDasharray = "2,3";
seriesRange.contents.stroke = chart.colors.getIndex(8);
seriesRange.contents.strokeWidth = 1;

let pattern = new am4core.LinePattern();
pattern.rotation = -45;
pattern.stroke = seriesRange.contents.stroke;
pattern.width = 1000;
pattern.height = 1000;
pattern.gap = 6;
seriesRange.contents.fill = pattern;
seriesRange.contents.fillOpacity = 0.5;

// Add scrollbar
chart.scrollbarX = new am4core.Scrollbar();


function Amcharts(){
   
    let chartData = [];
    let firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 200);
    let visits = 1200;
    for (var i = 0; i < 200; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      let newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
  
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  
      chartData.push({
        date: newDate,
        visits: visits
      });
    }
    return chartData;
  }
  
  
  // add range
  let range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
  range.grid.stroke = chart.colors.getIndex(0);
  range.grid.strokeOpacity = 1;
  range.bullet = new am4core.ResizeButton();
  range.bullet.background.fill = chart.colors.getIndex(0);
  range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);
  range.bullet.minX = 0;
  range.bullet.adapter.add("minY", function(minY, target) {
    target.maxY = chart.plotContainer.maxHeight;
    target.maxX = chart.plotContainer.maxWidth;
    return chart.plotContainer.maxHeight;
  })
  
  range.bullet.events.on("dragged", function() {
    range.value = dateAxis.xToValue(range.bullet.pixelX);
    seriesRange.value = range.value;
  })
  
  
  let firstTime = chart.data[0].date.getTime();
  let lastTime = chart.data[chart.data.length - 1].date.getTime();
  let date = new Date(firstTime + (lastTime - firstTime) / 2);
  
  range.date = date;
  
  seriesRange.date = date;
  seriesRange.endDate = chart.data[chart.data.length - 1].date;
  
 
  
}