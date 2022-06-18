import * as vl from 'vega-lite-api';

const getChartType = (chartType) => {
    console.log(chartType)
    switch (chartType) {
        case 'lineChart':
            return vl.markLine()
        case 'barChart':
            return vl.markBar()
        default:
            return vl.markLine()
    }
}

// const getFieldTypes = (x, y, tooltip) => {
//     console.log(x, y, tooltip)
//     const res = []
//     if (isNaN(Number(x))) res[0] = vl.x().fieldT(x)
//     else res[0] = vl.x().fieldQ(x)

//     if (isNaN(Number(y))) res[1] = vl.y().fieldN(y)
//     else res[1] = vl.y().fieldQ(y)

//     res[2] = vl.tooltip().fieldN(tooltip)

//     return res
// }
export const applyViz = (fields) => {

    let viz = getChartType(fields.chartType)
    console.log(fields.toolTip)
    viz = viz
        .encode(
            vl.x().fieldN(fields.X).scale({ zero: false }),
            vl.y().fieldQ(fields.Y).scale({ zero: false }),
            // vl.color().fieldN('origin'),
            // vl.size().fieldQ('weight'),
            vl.tooltip().fieldN(fields.toolTip)
        );

    return viz
}