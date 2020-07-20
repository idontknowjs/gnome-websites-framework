module.exports = {
  plugins: [
    require('postcss-omit-import-tilde'),
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};