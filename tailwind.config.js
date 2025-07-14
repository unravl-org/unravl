/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx,html,css}"
  ],
  theme: {
    extend: {
      colors: {
        unravl: {
          primary: '#2563eb',    // Blue
          secondary: '#7c3aed',  // Purple
          accent: '#0ea5e9',     // Sky blue
          success: '#10b981',    // Emerald
          warning: '#f59e0b',    // Amber
          gradient: {
            start: '#667eea',
            middle: '#764ba2',
            end: '#2563eb'
          }
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-unravl': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #2563eb 100%)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-feature': 'linear-gradient(45deg, #0ea5e9 0%, #2563eb 100%)',
      }
    },
  },
  plugins: [],
}
