# Description

## In this project, I attempt to build a responsive restaurant menu in plain javascript.

# Key Concepts Applied

1. Normalize.css
2. SASS, a CSS preprocessor
3. Importing fonts from Google Fonts
4. HTML comments
5. Javascript code refactoring
6. CSS postprocessing
    - Minify the CSS file : `sass --watch --no-source-map --style=compressed main.scss:main.min.css`
    - Autoprefix the CSS file : `postcss main.min.css --replace --use autoprefixer`
    - Lint the CSS file in the CLI: `npx stylelint "**/*.css"`
    - Automatically fix, where possible with ordering: `npx stylelint --fix "main.scss"`
7. Responsive web design
8. HTML elements
    - article
9. Visual Studio code extensions
    - Lorem ipsum generator
    - live server
    - prettier - code formatter
    - simple react snippets
    - Emmet snippet (in-built)
10. Pixel perfect development
    - web browser perfect pixel add-on
    - Ruler (google chrome plugin)
    - BrowserStack(Google chrome plugin)
11. ColorPick Eyedropper tool to detect color of designs
12. CSS
    - object-fit
    - there is no need for hr sometimes, i can also use an alternative of border-bottom: 0.5px dotted var(--clr-grey-5);
    - Grid, how important the min-width and max-width is as to how the items don't stretch out of shape depending on the screen size.
    - image cover attribute to have a clear photo and not just using the width and height attribute.
    - only set the image height for different screen sizes and have the image width set to 100%. The image will appear different each time with different screen sizes but it will be clear.
    - grid-template-columns, adjust the fraction of things, say you want the image of the menu item to be a set size of 225px, the rest can be normal you do 225px and 1fr. for menu items if you want them to stack side by side with each other, you add 1fr 1fr.
13. Writing the css directly in the inspect element to the see changes immedietly.
14. Using a debugger to view the value of event.currentTarget in the console. Adding breakpoints in the code to step-over.
15. CSS - items on the page shift to the left when there is a lack of a scrollbar. Use overflow-y: overlay; make scrollbars appear on top of content rather than take up space.
16. If you are having trouble accessing the data of a locally contained const variable in a promise for example. It's time to create a new function.
17. Refactoring javascript code to build functions that perform singular tasks.

# Notes

1. HTML events caused by user or from the browser. Add event listeners, type of event (MouseEvent, KeyboardEvent) belongs to event object, event properties are tied to the event object, event methods are tied to the event object as well. In some earlier browsers it was possible to register resize event handlers on any HTML element, but not anymore. Knowing what event object an event belongs to allows me to access the attributes and properties of it. If there are 2 event objects an event belongs to I can access more attributes and properties in those event objects.
