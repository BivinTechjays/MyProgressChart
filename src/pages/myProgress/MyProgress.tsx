import anychart from "anychart";
import styles from "./MyProgress.module.css";
import { useEffect } from "react";

function MyProgress() {
  useEffect(() => {
    // create polar chart
    const chart = anychart.polar();

    chart.xScale("ordinal");
    // define the order of values on the scale
    chart
      .xScale()
      .values([
        "Endurance",
        "strength",
        "agility",
        "balance",
        "enjoyment",
        "connections",
        "finances",
        "breaks",
        "consistency",
        "calm",
        "devices",
        "environment",
        "plan",
        "nourish",
        "limit",
        "hydrate",
      ]);

    // set a single marker type
    chart.markerPalette(["circle"]);

    // const chartData = [
    //   { category: "Endurance", value: 24 },
    //   { category: "Endurance", value: 26 },
    //   { category: "Strength", value: 68 },
    //   { category: "agility", value: 40 },
    //   { category: "balance", value: 80 },
    //   { category: "enjoyment", value: 50 },
    //   { category: "connections", value: 90 },
    //   { category: "finances", value: 99 },
    //   { category: "breaks", value: 20 },
    //   { category: "consistency", value: 45 },
    //   { category: "calm", value: 24 },
    //   { category: "devices", value: 68 },
    //   { category: "environment", value: 90 },
    //   { category: "plan", value: 24 },
    //   { category: "nourish", value: 84 },
    //   { category: "limit", value: 34 },
    //   { category: "hydrate", value: 50 },
    //   { category: "hydrate", value: 70 },
    // ];


    // const sampledata = [
    //   {
    //     name: "Endurance",
    //     values: { phase1: 100, phase2: 40, phase3: 80 }
    //   },
    //   {
    //     name: "Strength",
    //     values: { phase1: 95, phase2: 90, phase3: 80 }
    //   },
    //   // other regions go here
    // ];


    // const chartData = [];

    // sampledata.forEach(data => {
    //   Object.keys(data.values).forEach(phase => {
    //     let phaseVal = data.values[phase];
    //     // Check and cap phase value at certain thresholds
    //     if (phase === "phase1") {
    //       phaseVal = phaseVal > 25 ? 25 : phaseVal;
    //     } else if (phase === "phase2") {
    //       phaseVal = phaseVal > 50 ? 50 : phaseVal;
    //     } else if (phase === "phase3") {
    //       phaseVal = phaseVal > 75 ? 75 : phaseVal;
    //     }
    //     // Push an object for each phase
    //     chartData.push({ category: data.name, value: phaseVal });
    //   });
    // });

    const data = {
      "hydrate": 50,
      "nourish": 86.67,
      "consistency": 86.67,
      "strength": 73.33,
      "enjoyment": 47.5
  };
  
  const chartData = Object.keys(data).map(category => ({ category, value: data[category] }));
  
  
  chart.background().fill("#132238"); 


    let minValue = Math.min.apply(
      null,
      chartData.map(function (point) {
        return point.value;
      })
    );
    let maxValue = Math.max.apply(
      null,
      chartData.map(function (point) {
        return point.value;
      })
    );

    const thresholdMin = 10;
    const thresholdMax = 90;

    minValue = Math.min(minValue, thresholdMin);
    maxValue = Math.max(maxValue, thresholdMax);

    chart.innerRadius(50);

    // set marker series as default
    chart.defaultSeriesType("marker");

    const customColors = ["#75B1D3", "#73B084", "#2F4059"];

    // Replace the palette colors with your custom colors
    const palette = customColors;

    // set opacity for each color in palette
    const gridPalette = palette?.map(function (color) {
      return anychart.color.setOpacity(color, 1);
    });

    // Marker theme

    anychart.appendTheme({
      polar: {
        defaultSeriesSettings: {
          marker: {
            normal: {
              size: 6,
              stroke: "grey 1",
              fill: "red",
            },
            hovered: {
              size: 7,
              stroke: "grey 1",
              fill: "red",
            },
          },
        },
      },
    });


    chart.yGrid().stroke({
      color: "#141D2A",
      thickness: 10,
      opacity: 1,
    });



    chart.xAxis().stroke({ color: "white", dash: "2 2" }); 
    // chart.yScale().ticks().interval([20,30,40])

    // set scales settings
    chart.xScale("ordinal");
    chart.yScale().maximum(100);
    // chart.yScale().maximum(maxValue);
    // chart.yScale().minimum(minValue);

    chart.yScale().ticks().set([0, 25, 50, 75]);
    // chart.yScale().ticks().set([0, maxValue * 0.25, maxValue*0.60, maxValue * 0.75, maxValue])

    // disable Y-axis labels
    chart.yAxis().labels(false);

    // set Y-grid background
    chart.yGrid().palette(gridPalette);

    chart.spreadValues("valueEqual");

    // set chart data
    chart.data(chartData);

    // set title margin
    chart.title().margin().bottom(20);

    // set tooltip settings
    chart.tooltip().titleFormat("{%category}").format("under {%value}");

    // setup legend
    const legend = chart.legend();
    // legend.enabled(true);
    legend.position("right");
    legend.itemsLayout("vertical");
    legend.align("center");

    // set chart container id
    chart.container("container");

    // initiate chart drawing
    chart.draw();
    // });
    const creditsTextElement = document.querySelector(".anychart-credits");

    if (creditsTextElement) {
      creditsTextElement.style.display = "none";
    }

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <div
        id="container"
        style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
      ></div>
    </>
  );
}

export default MyProgress;
