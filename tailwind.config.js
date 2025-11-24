/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Orange Blood Palette (ENHYPEN inspired!)
        primary: {
          50: '#FFF7ED',   // Lightest orange cream
          100: '#FFEDD5',  // Light peach
          200: '#FED7AA',  // Soft orange
          300: '#FDBA74',  // Warm orange
          400: '#FB923C',  // Vibrant orange
          500: '#F97316',  // Main orange (Orange Blood!)
          600: '#EA580C',  // Deep orange
          700: '#C2410C',  // Darker orange
          800: '#9A3412',  // Rich orange
          900: '#7C2D12',  // Deepest orange
        },
        // Light Blue Contrast (Orange Blood aesthetic)
        accent: {
          50: '#F0F9FF',   // Palest sky
          100: '#E0F2FE',  // Light sky
          200: '#BAE6FD',  // Soft blue
          300: '#7DD3FC',  // Light blue
          400: '#38BDF8',  // Bright blue
          500: '#0EA5E9',  // Main blue
          600: '#0284C7',  // Deep blue
          700: '#0369A1',  // Darker blue
          800: '#075985',  // Rich blue
          900: '#0C4A6E',  // Deepest blue
        },
        // Neutral grays for dark mode
        dark: {
          bg: '#0F0A08',      // Almost black with orange tint
          card: '#1A1310',    // Dark brown-black
          elevated: '#251C18', // Elevated surface
          text: '#F5F5F4',    // Off-white text
          muted: '#A8A29E',   // Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 25%, #FED7AA 50%, #FDBA74 75%, #FB923C 100%)',
        'gradient-blue': 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFF7ED 0%, #FFE5D4 50%, #FFD4B8 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F0A08 0%, #1A1310 50%, #251C18 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}