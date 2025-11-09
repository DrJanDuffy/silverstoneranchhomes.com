// Force Tailwind to use JavaScript engine instead of native oxide
process.env.TAILWIND_DISABLE_NATIVE = '1';

const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
