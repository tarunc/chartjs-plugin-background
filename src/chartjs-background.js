// Import chart.js
import ChartJS from 'chart.js';
const Chart = (typeof(ChartJS) === 'function' ? ChartJS : window.Chart);

// Create the plugin
const chartjsBackground = {
  id: 'backgroundcolor',
  beforeDraw(chart, easing) {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      var ctx = chart.chart.ctx;
      var chartArea = chart.chartArea;

      ctx.save();
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      ctx.restore();
    }
  }
};

// Register the plugin
Chart.pluginService.register(chartjsBackground);

// Export the plugin
export default chartjsBackground;
