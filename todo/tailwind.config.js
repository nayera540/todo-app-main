/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "Bright-Blue": "hsl(220, 98%, 61%)",
                "Very-Light-Gray": "hsl(0, 0%, 98%)",
                "Very-Light-Grayish-Blue": "hsl(236, 33%, 92%)",
                "Light-Grayish-Blue": "hsl(233, 11%, 84%)",
                "Dark-Blue-Grayish-Blue": "hsl(236, 9%, 61%)",
                "Very-Dark-Grayish-Blue": "hsl(235, 19%, 35%)",
                "Very-Dark-Blue-Dark": "hsl(235, 21%, 11%)",
                "Very-Dark-Desaturated-Blue-Dark": "hsl(235, 24%, 19%)",
                "Light-Grayish-Blue-Dark": "hsl(234, 39%, 85%)",
                "Light-Grayish-Blue-(hover)-Dark": "hsl(236, 33%, 92%)",
                "Dark-Grayish-Blue-Dark": "hsl(234, 11%, 52%)",
                "Very-Dark-Grayish-Blue-1-Dark": "hsl(233, 14%, 35%)",
                "Very-Dark Grayish-Blue-2-Dark": "hsl(237, 14%, 26%)"
                
            },
            fontFamily:{
                "josefin": ["Josefin Sans", "sans-serif"]
            },
            backgroundImage:{
                "desktop-pattern-img-light": "url('/images/bg-desktop-light.jpg')",
                "mobile-pattern-img-light": "url('/images/bg-mobile-light.jpg')",

            }
        },
    },
    plugins: [],
}

