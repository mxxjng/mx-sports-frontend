export const API_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.mx-sports.jmmedia-playground.de";
