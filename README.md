# chartjs-plugin-background

Fill the exact area of a ChartJS chart with a background

## Usage

### Configuration

The configuration for this plugin lives in `chartInstance.options.chartArea`. This looks like the following while setting up your chart:

```
{
    options: {
        chartArea: {
            // Set to background color
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            // To cover only chart area or everything
            coverAll: false
        }
    }
}
```

#### License

chartjs-background is released under the terms of [the MIT License](http://www.opensource.org/licenses/MIT).
