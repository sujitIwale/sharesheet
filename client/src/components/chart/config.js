// Appearance customization to improve readability.
// See https://vega.github.io/vega-lite/docs/
const dark = '#3e3c38';
export const config = {
    axis: {
        domain: false,
        tickColor: 'lightGray'
    },
    style: {
        "guide-label": {
            fontSize: 20,
            fill: dark
        },
        "guide-title": {
            fontSize: 30,
            fill: dark
        }
    }
};