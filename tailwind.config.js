/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')


export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme:{
        extend: {},
    },
    plugins: [
        plugin(function({ addBase, config}){
        addBase ({
            'h1': {fontSize: config('theme.fontSize.2x1')},
            'h2': {fontSize: config('theme.fontSize.x1')},
            'h3': {fontSize: config('theme.fontSize.lg')},
            })
        })
    ],
}