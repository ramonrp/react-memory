import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS } from './theme';
const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Atkinson Hyperlegible', sans-serif;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

html{
  --color-white1: hsl(${COLORS.white1});
  --color-white2: hsl(${COLORS.white2});
  --color-orange: hsl(${COLORS.orange});
  --color-blue-100: hsl(${COLORS.blue[100]});
  --color-blue-300: hsl(${COLORS.blue[300]});
  --color-blue-500: hsl(${COLORS.blue[500]});
  --color-blue-700: hsl(${COLORS.blue[700]});
  --color-blue-900: hsl(${COLORS.blue[900]});

  --weight-regular:${WEIGHTS.regular};
  --weight-bold:${WEIGHTS.bold};
}

`;

export { GlobalStyles };
