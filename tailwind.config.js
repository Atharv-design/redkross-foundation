/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rk: {
          bg: "#060608",
          darker: "#040406",
          card: "#0b0b0f",
          surface: "#0e0e14",
          border: "rgba(229, 122, 0, 0.18)",
          borderGlow: "rgba(229, 122, 0, 0.35)",
          orange: "#E57A00",
          orangeLight: "#F08C1A",
          amber: "#F0A500",
          teal: "#0FB7B7",
          tealLight: "#1ED8D8",
          muted: "#9ca3af",
          subtle: "#6b7280"
        }
      },
      fontFamily: {
        royal: ['Cinzel', 'Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(229, 122, 0, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(229, 122, 0, 0.45)' },
        }
      }
    },
  },
  plugins: [],
}
