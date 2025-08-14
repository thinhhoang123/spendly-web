import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [heroui({
        "layout": {
            "disabledOpacity": "0.5",

            "borderWidth": {
                small: "1px", // border-small
                medium: "1px", // border-medium (default)
                large: "2px", // border-large
            },
        }
    })],
}

module.exports = config;