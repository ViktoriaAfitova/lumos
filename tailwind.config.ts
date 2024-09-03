import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3177F2',
        orange: '#FF5D17',
        grey: '#646464',
        black: '#2B2B2B'
      },
      boxShadow: {
        'shadow-header': '0 4px 16px rgba(0, 0, 0, 0.14)',
        'shadow-access-block': '0 3px 11px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
};
export default config;
