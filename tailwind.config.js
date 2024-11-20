/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                purple: {
                    50: '#f6eeff',
                    100: '#e7d9f7',
                    200: '#cab1ea',
                    300: '#ad86dd',
                    400: '#9462d2',
                    500: '#854bcb',
                    600: '#7d3fc9',
                    700: '#6b31b2',
                    800: '#5f2ba0',
                    900: '#52238d'
                }
            }
        },
        container: {
            center: true,
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
    },
    plugins: [require('tailwindcss-motion')],
}