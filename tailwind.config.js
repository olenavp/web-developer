/** @type {import('tailwindcss').Config} */
const config = {
    theme: {
        extend: {
            
            animation: {
                'wave-slow': 'wave 20s linear infinite',
                'fade-up': 'fadeUp 0.8s ease forwards',
                'text-gradient': 'gradientShift 3s ease infinite',
                'light-sweep': 'light-sweep 1.5s ease-in-out infinite',
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'translateX(-25%)' },
                    '50%': { transform: 'translateX(25%)' },
                    '100%': { transform: 'translateX(-25%)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(15px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                gradientShift: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'light-sweep': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
};

export default config;