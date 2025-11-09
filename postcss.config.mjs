import tailwindcss from '@tailwindcss/postcss'

const config = {
  plugins: [
    tailwindcss({
      // Disable Lightning CSS optimizer to avoid native binding issues on Vercel
      optimize: false,
    }),
  ],
};

export default config;
