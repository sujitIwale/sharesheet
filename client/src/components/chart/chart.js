import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { dataWithHeader } from '../../helpers/csvParser';
import { config } from './config';
import { applyViz } from './viz';

vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new Handler().call); }
});


export const run = async (data, fields) => {
    data = dataWithHeader(data)
    const chart = document.getElementById('chart')

    if (!chart) return
    chart.innerHTML = ''
    const viz = applyViz(fields)
    const chartStyle = window.getComputedStyle(chart, null)
    const marks = viz
        .data(data)
        .width(chartStyle.getPropertyValue('width').replace('px', ''))
        .height(chartStyle.getPropertyValue('height').replace('px', '') - 100)
        .autosize({ type: 'fit', contains: 'padding' })
        .config(config);

    chart.appendChild(await marks.render());
};