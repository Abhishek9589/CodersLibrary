module.exports = {
  darkMode: ["class"],
  content: ["./client/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Coders Library Brand Colors
        navy: {
          DEFAULT: "#264653",
          50: "#f0f4f3",
          100: "#d9e5e2",
          200: "#b3cbc5",
          300: "#8db1a8",
          400: "#67978b",
          500: "#417d6e",
          600: "#335f57",
          700: "#264653",
          800: "#1e3741",
          900: "#15282f",
        },
        teal: {
          DEFAULT: "#2a9d8f",
          50: "#f0faf9",
          100: "#ccf2ed",
          200: "#99e5db",
          300: "#66d7c8",
          400: "#33cab6",
          500: "#2a9d8f",
          600: "#228072",
          700: "#1a6355",
          800: "#114638",
          900: "#09291b",
        },
        yellow: {
          DEFAULT: "#e9c46a",
          50: "#fdf9ec",
          100: "#f9f0cc",
          200: "#f3e199",
          300: "#edd266",
          400: "#e7c333",
          500: "#e9c46a",
          600: "#d4a942",
          700: "#a0812e",
          800: "#6c5a1f",
          900: "#38320f",
        },
        orange: {
          DEFAULT: "#f4a261",
          50: "#fef6f0",
          100: "#fce7d6",
          200: "#f9cfad",
          300: "#f6b784",
          400: "#f39f5b",
          500: "#f4a261",
          600: "#e6884a",
          700: "#c86d35",
          800: "#a55222",
          900: "#7a3d1a",
        },
        coral: {
          DEFAULT: "#e76f51",
          50: "#fdf2f0",
          100: "#f9ddd6",
          200: "#f3bbad",
          300: "#ed9984",
          400: "#e7775b",
          500: "#e76f51",
          600: "#d4563e",
          700: "#b8432f",
          800: "#9c3020",
          900: "#7a2318",
        },
        // Base theme colors using the brand palette
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
