const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#34251f",
        clay: "#9b4f38",
        sand: "#f4efe6",
        gold: "#b8995c",
        moss: "#56634b"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: { soft: "0 18px 50px rgba(58, 39, 29, .08)" }
    }
  },
  plugins: []
};
export default config;
