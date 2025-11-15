/** Tailwind CSS configuration for Ocean Professional theme
 * Merges tokens from assets/tailwind_preset.json into Tailwind theme.
 */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryPressed: "#1D4ED8",
        secondary: "#F59E0B",
        error: "#EF4444",
        canvas: "#F9FAFB",
        surface: "#FFFFFF",
        text: "#111827"
      },
      borderRadius: {
        md: "10px",
        lg: "14px",
        xl: "20px"
      },
      boxShadow: {
        subtle: "0 8px 24px rgba(2,6,23,0.18)",
        elevated: "0 16px 40px rgba(2,6,23,0.24)"
      },
      backgroundImage: {
        "gradient-hero": "radial-gradient(120%_140%_at_20%_20%,#0EA5E9_0%,#2563EB_30%,#4F46E5_55%,#7C3AED_75%,#EC4899_100%)",
        "gradient-ocean-soft": "linear-gradient(135deg, rgba(59,130,246,0.10) 0%, rgba(249,250,251,1) 100%)"
      },
      spacing: {
        "4.5": "18px"
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      transitionDuration: {
        120: "120ms",
        200: "200ms",
        300: "300ms"
      }
    }
  },
  plugins: []
};
