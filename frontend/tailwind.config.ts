import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    1: '#00C261',
                    2: '#005155',
                },
                black: '#444444',
                gray: {
                    dark: '#A5A5A5',
                    light: '#D9D9D9',
                    lightest: '#ECECEC'
                },
                white: {
                    1: '#FFFFFF',
                    2: '#F1F5F9',
                },
                gradient: {
                    1: "linear-gradient(180deg, #005155 0%, #00C261 100%)"
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
