// Set this before loading Tailwind to prevent native binding errors
process.env.TAILWIND_DISABLE_NATIVE = 'true';

const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
