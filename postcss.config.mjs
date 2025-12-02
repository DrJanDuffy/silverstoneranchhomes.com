// Ensure native mode is disabled before loading Tailwind
process.env.TAILWIND_DISABLE_NATIVE = 'true'
process.env.npm_config_tailwind_disable_native = 'true'

// Conditionally load Tailwind only for files that need it
export default function (ctx) {
  // Skip Tailwind processing for node_modules CSS files
  if (ctx.file && ctx.file.includes('node_modules')) {
    return {
      plugins: [],
    }
  }

  // For our CSS files, use Tailwind
  return {
    plugins: ['@tailwindcss/postcss'],
  }
}
