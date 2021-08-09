module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        fontFamily: {
            headline: ["Poppins"],
            text: ["Inter"],
        },
        colors: {
            primary: "#7668CB",
            bg: "#181A20",
            bgHighlight: "#262A34",
            hrColor: "#2C2F44",
            colorChat: "#393B4B",
            textColor: "#B5BBC9",
            disabled: "#15171E",
            headline: "#ffffff",
            danger: "#FF968E",
            success: "#28a745",
        },
        extend: {
            fontSize: {
                xss: "11px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
