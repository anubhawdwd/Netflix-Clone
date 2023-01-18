yarn create react-app react-tailwind-css-stater
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
replace tailwind.config.css file :
    module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {},
    },
    plugins: [],
    };

add file in Index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    <!-- packages to installed -->
    For API Call -> axios -> yarn add axios 
    For Navigation -> react-router-dom -> yarn add react-router-dom
    For BackEnd -> firebase -> yarn add firebase
    For Stylish Icons -> react-icons -> yarn add react-icons
    For hiding scrollbar in tailwindCSS -> tailwind-scrollbar-hide -> yarn add tailwind-scrollbar-hide
            and have to add plugins: [require('tailwind-scrollbar-hide')]  in tailwind.config.js file

