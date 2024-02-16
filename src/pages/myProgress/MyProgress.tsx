import anychart from 'anychart'
// import AnyChart from 'anychart-react'
import styles from './MyProgress.module.css'

function MyProgress() {

  anychart.onDocumentReady(function () {
    // create polar chart
    var chart = anychart.polar();

    // // create data set on our data
    // var chartData = {
    //   // title: 'Annual revenue from products sold in the regions',

    //   rows: [
    //     ['Endurance', 25, 0],
    //     ['Strength', 65],
    //     ['agil', 0],
    //     ['balance', 5],
    //     ['enjoyment', 40],
    //     ['connec', 50],
    //     ['fina', 60,],
    //     ['breaks', 20],
    //     ['consistency', 68],
    //     ['calm', 15,],
    //     ['devices', 77,],
    //     ['environment', 55,],
    //     ['plan', 25,],
    //     ['nourish', 70,],
    //     ['limit', 90,],
    //     ['hydrate', 45,],
    //   ]
    // };


    var chartData = [
      { "category": "Endurance", "value": 24 },
      { "category": "Strength", "value": 68 },
      { "category": "agility", "value": 40 },
      { "category": "balance", "value": 80 },
      { "category": "enjoyment", "value": 50 },
      { "category": "connections", "value": 90 },
      { "category": "finances", "value": 99 },
      { "category": "breaks", "value": 20 },
      { "category": "consistency", "value": 45 },
      { "category": "calm", "value": 24 },
      { "category": "devices", "value": 68 },
      { "category": "environment", "value": 90 },
      { "category": "plan", "value": 24 },
      { "category": "nourish", "value": 84 },
      { "category": "limit", "value": 34 },
      { "category": "hydrate", "value": 50 },
    ];


    chart.innerRadius(50);
  
    // set marker series as default
    chart.defaultSeriesType('marker');


    var customColors = ['gray', 'blue', 'green', 'gray'];
    // var customColors = ['#2F4059'];

    // Replace the palette colors with your custom colors
    var palette = customColors


    // set opacity for each color in palette
    var gridPalette = palette?.map(function (color) {
      return anychart.color.setOpacity(color, 1);
    });

    // Marker theme

    anychart.appendTheme({
      polar: {
        defaultSeriesSettings: {
          marker: {
            normal: {
              size: 6,
              stroke: 'grey 1',
              fill:'red'
            },
            hovered: {
              size: 7,
              stroke: 'grey 1',
              fill:'red'
            }
          }
        }
      }
    });




    chart.xAxis().stroke({dash: '2 2'});
    // chart.yScale().ticks().interval([20,30,40])


    // set scales settings
    chart.xScale('ordinal');
    chart.yScale().maximum(100);
    chart.yScale().ticks().set([0, 20, 65, 85]);

    // disable Y-axis labels
    chart.yAxis().labels(false);

    // set Y-grid background
    chart.yGrid().palette(gridPalette);

    chart.spreadValues('valueEqual');


    // set chart data
    chart.data(chartData);

    // set title margin
    chart.title().margin().bottom(20);

    // set tooltip settings
    chart.tooltip()
      .titleFormat('{%seriesName}')
      .format('under ${%value}');

    // setup legend
    var legend = chart.legend();
    // legend.enabled(true);
    legend.position('right');
    legend.itemsLayout('vertical');
    legend.align('center');

    // set chart container id
    chart.container('container');

    // initiate chart drawing
    chart.draw();
  });




  return (
    <>
      {/* <div className={styles.container}>  */}
      <div id='container' style={{ width: '100%', height: '100vh', margin: 0, padding: 0, background: 't' }}></div>
      {/* </div> */}
    </>
  )
}





export default MyProgress