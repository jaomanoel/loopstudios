/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        colors: {
            "white": "hsl(0, 0%, 100%)",
            "black": "hsl(0, 0%, 0%)",
            "dark-gray": "hsl(0, 0%, 55%)",
            "very-dark-gray": "hsl(0, 0%, 41%)"
            
        },
        fontFamily: {
            "josefin": ["Josefin Sans", "sans-serif"],
            "alata": ["Alata", "sans-serif"]
        },
        fontSize: {
            "13": "1.3rem",
            "15": "1.5rem",
            "16": "1.6rem",
            "26": "2.6rem",
            "36": "3.6rem",
            "39": "3.9rem"
        },
        extend: {
            spacing: {
                "80": "-60%",
                "20": "-30%",
                "30": "3rem",
                "50": "5rem",
                "68": "6.8rem",
                "300": "30rem",
                "400": "40rem",
                "500": "50rem",
                "600": "60rem",
                "1200": "120rem"
            },
            gridTemplateColumns: {
                '4': 'repeat(auto-fit, minmax(250px, 1fr))'
            }
        },
    },
    plugins: [],
}
