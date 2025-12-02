// CRITICAL: Set environment variables BEFORE any imports
// This must happen before @tailwindcss/postcss is loaded
process.env.TAILWIND_DISABLE_NATIVE = 'true'
process.env.npm_config_tailwind_disable_native = 'true'

// Next.js requires PostCSS config to export a plain object, not a function
const config = {
  plugins: ['@tailwindcss/postcss'],
}

export default config
