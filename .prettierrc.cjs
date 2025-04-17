/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './apps/web/src/index.css', // v4 needs an explicit path
};
