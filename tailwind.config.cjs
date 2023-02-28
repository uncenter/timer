/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        borderRadius: {
            DEFAULT: '5px',
        },
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
