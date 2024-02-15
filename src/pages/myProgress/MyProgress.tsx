import anychart from 'anychart'
// import AnyChart from 'anychart-react'
import styles from './MyProgress.module.css'

function MyProgress() {

  anychart.onDocumentReady(function () {
    // create polar chart
    var chart = anychart.polar();

    // create data set on our data
    // var chartData = {
    //   // title: 'Annual revenue from products sold in the regions',

    //   rows: [
    //     ['Endurance', 25, 0],
    //     ['Strength', 65, 15000, 5000, 10000, 10000, 10000],
    //     ['agil', 111, 5000, 15000, 5000, 10000, 15000],
    //     ['balance', 50, 10000, 5000, 15000, 15000, 5000],
    //     ['enjoyment', 40, 10000, 15000, 10000, 15000, 5000],
    //     ['connec', 50, 20000, 10000, 5000, 15000, 10000],
    //     ['fina', 60, 15000, 15000, 15000, 10000, 15000],
    //     ['breaks', 20, 15000, 5000, 10000, 20000, 20000],
    //     ['consistency', 68, 10000, 5000, 20000, 15000, 20000],
    //     ['calm', 15, 15000, 15000, 20000, 20000, 20000],
    //     ['devices', 77, 15000, 15000, 20000, 20000, 20000],
    //     ['environment', 55, 15000, 15000, 20000, 20000, 20000],
    //     ['plan', 25, 15000, 15000, 20000, 20000, 20000],
    //     ['nourish', 70, 15000, 15000, 20000, 20000, 20000],
    //     ['limit', 90, 15000, 15000, 20000, 20000, 20000],
    //     ['hydrate', 45, 15000, 15000, 20000, 20000, 20000],
    //   ]
    // };


    var chartData = [
      { "category": "Category 1", "value": 77 },
      { "category": "Category 1", "value": 68 },
      { "category": "Category 2", "value": 40 },
      { "category": "Category 3", "value": 80 },
      { "category": "Category 4", "value": 50 },
      { "category": "Category 5", "value": 90 },
      { "category": "Category 6", "value": 110 },
      { "category": "Category 7", "value": 20 },
      { "category": "Category 8", "value": 45 },
      { "category": "Category 9", "value": 24 },
      { "category": "Category 10", "value": 68 },
      { "category": "Category 11", "value": 90 },
      { "category": "Category 12", "value": 24 },
    ];



    // set marker series as default
    chart.defaultSeriesType('marker');

    // get palette from theme or use default theme's palette
    // var palettethem = anycharte()?.[0] ?
    //   anychart?.theme()[0]?.palette?.items :
    //   anychart?.palettes?.defaultPalette;

    var customColors = ['#FF33FF', 'blue', 'green', 'gray'];
    // var customColors = ['#2F4059'];

    // Replace the palette colors with your custom colors
    var palette = customColors


    // set opacity for each color in palette
    var gridPalette = palette?.map(function (color) {
      return anychart.color.setOpacity(color, 1);
    });





    anychart.appendTheme({
      polar: {
        defaultSeriesSettings: {
          line: {
            // Customize line series settings
            stroke: 'blue',
            markers: {
              enabled: true,
              type: 'circle',
              size: 4
            }
          }
        },
        xAxis: {
          // Customize x-axis settings
          stroke: {
            color: 'black',
            dash: '3 3'
          },
          labels: {
            fontSize: 12,
            padding: 5
          }
        },
        yAxis: {
          // Remove y-axis settings
          enabled: false
        },
        grid: {
          // Customize grid settings
          oddFill: 'lightgrey',
          evenFill: 'transparent',
          stroke: 'grey',
          drawFirstLine: true,
          drawLastLine: true
        },
        background: {
          // Customize background settings
          fill: 'white'
        },
        tooltip: {
          // Customize tooltip settings
          enabled: true,
          title: {
            fontSize: 14,
            fontWeight: 'normal'
          },
          separator: {
            enabled: true
          },
          fontSize: 12
        },
        title: {
          // Remove title settings
          enabled: false
        },
        interactivity: {
          // Define interactivity settings
          hoverMode: 'by-x'
        }
      }
    });









    // set scales settings
    chart.xScale('ordinal');
    chart.yScale().maximum(120);
    chart.yScale().ticks().set([0, 25, 50, 75, 100]);

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