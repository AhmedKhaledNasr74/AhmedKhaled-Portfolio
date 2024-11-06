/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBlue: "#245DDB",
                tabs: "#EDEAD3",
                selected: "#1660e8",
            },
            fontFamily: {
                MyFont: ['"Noto Sans"', "serif"],
            },
        },
    },
    plugins: [],
};
