# Description

## In this project, I attempt to build a color flipper in plain javascript. The idea of the project is, when the user presses a button, the background changes to a different color each time. There will be 2 tab choices. The first tab, there will only be a fixed amount of colors and the second tab where it can be any hex color.

# Key Concepts Applied

1. Normalize.css
2. SASS, a CSS preprocessor
3. Importing fonts from Google Fonts
4. Rem vs em
5. CSS calc() Function
6. Javascript arrow functions, setting a named callback function to an event makes the code easier to read and understand.
7. Javascript code refactoring
8. Some examples of good variable names for a div element include:
   - headerContainer
   - mainContent
   - footerSection
   - messageBox
9. Some examples of good variable names for a button element include:
   - submitButton
   - changeColorButton
   - deleteRecordButton
   - toggleMenuButton
10. Place css in the assets/styles/css folder
11. CSS postprocessing
    - Minify the CSS file : `sass --watch --no-source-map --style=compressed main.scss:main.min.css`
    - Autoprefix the CSS file : `postcss main.min.css --replace --use autoprefixer`
    - Lint the CSS file in the CLI: `npx stylelint "**/*.css"`
    - Automatically fix, where possible with ordering: `npx stylelint --fix "main.scss"`
12. Responsive web design

# Workflow Feedback

# Notes

1. SASS command:
   - To convert SASS file to minified CSS file : `sass --watch --no-source-map --style=compressed main.scss:main.min.css`
   - To convert SASS file to CSS file : `sass --watch --no-source-map main.scss:main.css`
2. To install stylelint:
    - `npm install --save-dev stylelint stylelint-config-standard`
    - Create a .stylelintrc.json configuration file in the root of your project with the following content: ```{
        "extends": ["stylelint-config-standard", "stylelint-config-prettier", "stylelint-config-standard-scss", "stylelint-config-idiomatic-order"]
        } ```
    - If you use a pretty printer alongside Stylelint, you should turn off any conflicting rules. `npm install --save-dev stylelint-config-prettier`
    - For SASS - `sudo npm install --save-dev stylelint stylelint-config-standard-scss`
3. To install postcss and autoprefixer : `npm install -g postcss-cli autoprefixer`
4. Install stylelint order : `npm install stylelint-order --save-dev`, `npm install --save-dev stylelint-config-idiomatic-order`
5. Responsive web design media queries
    `/* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
    }`

