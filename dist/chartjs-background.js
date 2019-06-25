(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'chart.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('chart.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.chart);
    global.chartjsBackground = mod.exports;
  }
})(this, function (exports, _chart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _chart2 = _interopRequireDefault(_chart);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Chart = typeof _chart2.default === 'function' ? _chart2.default : window.Chart;

  // Create the plugin
  // Import chart.js
  var chartjsBackground = {
    id: 'backgroundcolor',
    beforeDraw: function beforeDraw(chart, easing) {
      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
        var ctx = chart.chart.ctx;
        var chartAreaOptions = chart.config.options.chartArea;

        ctx.save();
        ctx.fillStyle = chartAreaOptions.backgroundColor;
        if (chartAreaOptions.coverAll) {
          var _chart$chart = chart.chart,
              width = _chart$chart.width,
              height = _chart$chart.height;

          ctx.fillRect(0, 0, width, height);
        } else {
          var chartArea = chart.chartArea;
          ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        }
        ctx.restore();
      }
    }
  };

  // Register the plugin
  Chart.pluginService.register(chartjsBackground);

  // Export the plugin
  exports.default = chartjsBackground;
});