import anychart from 'anychart'
// import AnyChart from 'anychart-react'
import styles from './MyProgress.module.css'

function MyProgress() {

  anychart.onDocumentReady(function () {
    // create polar chart
    var chart = anychart.polar();

    // create data set on our data
    var chartData = {
      // title: 'Annual revenue from products sold in the regions',
     
      rows: [
        ['Endurance', 25,0],
        ['Strength', 65, 15000, 5000, 10000, 10000, 10000],
        ['agil', 80, 5000, 15000, 5000, 10000, 15000],
        ['balance', 50, 10000, 5000, 15000, 15000, 5000],
        ['enjoyment', 40, 10000, 15000, 10000, 15000, 5000],
        ['connec', 50, 20000, 10000, 5000, 15000, 10000],
        ['fina', 60, 15000, 15000, 15000, 10000, 15000],
        ['breaks', 20, 15000, 5000, 10000, 20000, 20000],
        ['consistency', 68, 10000, 5000, 20000, 15000, 20000],
        ['calm', 15, 15000, 15000, 20000, 20000, 20000],
        ['devices', 77, 15000, 15000, 20000, 20000, 20000],
        ['environment', 55, 15000, 15000, 20000, 20000, 20000],
        ['plan', 25, 15000, 15000, 20000, 20000, 20000],
        ['nourish', 70, 15000, 15000, 20000, 20000, 20000],
        ['limit', 90, 15000, 15000, 20000, 20000, 20000],
        ['hydrate', 45, 15000, 15000, 20000, 20000, 20000],
      ]
    };

    // set marker series as default
    chart.defaultSeriesType('marker');

    // get palette from theme or use default theme's palette
    // var palettethem = anycharte()?.[0] ?
    //   anychart?.theme()[0]?.palette?.items :
    //   anychart?.palettes?.defaultPalette;

    var customColors = ['#FF33FF', 'blue', 'green','gray'];
    // var customColors = ['#2F4059'];

    // Replace the palette colors with your custom colors
    var palette = customColors


    // set opacity for each color in palette
    var gridPalette = palette?.map(function (color) {
      return anychart.color.setOpacity(color, 1);
    });

    // set custom theme settings
    anychart.appendTheme({
      polar: {
        defaultSeriesSettings: {
          marker: {
            normal: {
              size: 6,
              stroke: 'grey 1'
            },
            hovered: {
              size: 7,
              stroke: 'grey 1'
            }
          }
        }
      }
    });

    // set scales settings
    chart.xScale('ordinal');
    chart.yScale().maximum(100);
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
      <div id='container' style={{ width: '100%', height: '100vh', margin: 0, padding: 0,background:'t' }}></div>
      {/* </div> */}
    </>
  )
}

export default MyProgress