// Import chart.js
import ChartJS from 'chart.js';
const Chart = (typeof(ChartJS) === 'function' ? ChartJS : window.Chart);

// Create the plugin
const chartjsBackground = {
  id: 'backgroundcolor',
  beforeDraw(chart, easing) {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      const ctx = chart.chart.ctx;
      const chartAreaOptions = chart.config.options.chartArea;

      ctx.save();
      ctx.fillStyle = chartAreaOptions.backgroundColor;
      if (chartAreaOptions.coverAll) {
        const { width, height } = chart.chart;
        ctx.fillRect(0, 0, width, height);
      } else {
        const chartArea = chart.chartArea;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      }
      ctx.restore();
    }
  }
};

// Register the plugin
Chart.pluginService.register(chartjsBackground);

// Export the plugin
export default chartjsBackground;
