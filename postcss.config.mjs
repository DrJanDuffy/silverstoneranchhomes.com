// Ensure native mode is disabled before loading Tailwind
process.env.TAILWIND_DISABLE_NATIVE = 'true'
process.env.npm_config_tailwind_disable_native = 'true'

// Next.js requires PostCSS config to export a plain object, not a function
const config = {
  plugins: ['@tailwindcss/postcss'],
}

export default config
