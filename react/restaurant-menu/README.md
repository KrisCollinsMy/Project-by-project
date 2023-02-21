# Description

## In this project, I attempt to build a restaurant menu with the React library.

# Key Concepts Applied

1. Adding a CSS Reset https://create-react-app.dev/docs/adding-css-reset/
2. Adding a Sass Stylesheet and using SASS https://create-react-app.dev/docs/adding-a-sass-stylesheet
    - @extend .color;
    - @include main-color();
    - variables
3. Importing fonts from Google Fonts
4. My React workflow, the approach of building something in React:
    - Setup project in plain HTML, CSS and then the javascript code such as for clicking or looping out data items, filtering out data items before moving the project over to React.
5. Javascript arrow functions, setting a named callback function to an event makes the code easier to read and understand.
6. ES6 
    - Classes
    - Arrow Functions
    - Variables (let, const, var)
    - Array Methods like .map()
    - Destructuring
    - Modules
    - Ternary Operator
    - Spread Operator, allows us to quickly copy all or part of an existing array or object into another array or object.
7. comments in JSX
8. Lift state up in React, sharing state by moving state up to the closest common ancestor of the components that need it. To update state from the inner level components you're gonna have to pass the function that updates the state down into the inner level components.
9. Each child in a list should have a unique "key" prop.

# Notes

1. Redux
2. Prop drilling is a situation where data is passed from one component through multiple interdependent components until you arrive at the component where the data is needed. Solution is React Context API.
3. Local state in React

