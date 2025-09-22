const plugin = require("tailwindcss/plugin");

/**
 * Tailwind configuration that maps project CSS variables (defined in client/global.css)
 * to Tailwind color names so utility classes like `bg-background`, `text-foreground`
 * and `border-border` work correctly.
 */
module.exports = {
  content: [
    "./client/**/*.{js,jsx,ts,tsx,html}",
    "./index.html",
    "./components.json",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    // ensure `border-border` etc. work with @apply in component layers
    plugin(function ({ addUtilities, theme }) {
      // no-op plugin to ensure Tailwind processes extended colors
    }),
  ],
};
