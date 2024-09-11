<template>
   <div class="div1">

    <body class="bg-white dark:bg-black font-normal">
    <!-- LIGHT DARK TOGGLE BTN START -->
    <div class="fixed top-[12%] translate-y-[-12%] right-0 z-50">
      <button class="bg-light dark:bg-dark w-[50px] h-[50px] text-white flex justify-center items-center rounded-l-lg" id="light__to--dark">
        <i id="moonIcon" class="text-3xl -rotate-[20deg] fa-solid fa-moon"></i>
        <i id="sunIcon" class="text-3xl -rotate-[20deg] fa-solid fa-sun"></i>
      </button>
    </div>
    <!-- LIGHT DARK TOGGLE BTN END -->
  
    <!-- PRICING ONE START -->
    <section id="pricing-1" class="pricing-1 md:py-24 py-12">
      <div class="container">
        <!-- TITLE START -->
        <div class="text-center max-w-3xl mx-auto mb-10">
          <h2 class="md:text-5xl text-3xl font-semibold text-light dark:text-dark">
            Discover Your Capabilities
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
            Choose from Our Flexible Plans for a Personalized Journey. Embrace a Spectrum of Opportunities to Elevate Your Path to Success.
          </p>
        </div>
        <!-- TITLE END -->
  
        <!-- PRICING LIST START -->
        <ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <!-- PRICING TABLE START -->
          <li class="contents">
            <div class="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:border-gray-600 xl:p-8 dark:bg-[#171717] dark:text-white relative">
              <!-- ITEM HEADING -->
              <h3 class="mb-4 text-2xl font-semibold">Basic Package</h3>
              <!-- ITEM DESCRIPTION -->
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-[90%]">
                Essential web features for small businesses.
              </p>
              <!-- ITEM PRICE -->
              <div class="my-8 flex items-center">
                <span class="mr-2 text-5xl font-extrabold text-light dark:text-dark">
                  $99
                </span>
                <span>/month</span>
              </div>
  
              <!-- FEATURE LIST -->
              <ul class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Website Design</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Website Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Content Integration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Contact Form</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Responsive Design</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Clean Code</span>
                </li>
              </ul>
              <!-- BUTTON -->
              <a href="#" class="text-xl dark:text-white text-light font-semibold rounded-lg px-5 py-3 text-center border-2 border-light dark:border-dark mt-auto hover:bg-light dark:hover:bg-dark hover:text-white transition-all duration-500">
                Get started
              </a>
            </div>
          </li>
          <!-- PRICING TABLE END -->
  
          <!-- PRICING TABLE START -->
          <li class="contents">
            <div class="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-lg border-2 border-light dark:border-dark shadow-md xl:p-8 dark:bg-[#171717] dark:text-white relative">
              <!-- RECOMMENDED -->
              <div class="ribbon absolute -top-2 -right-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:left-0 before:border-4 before:border-light dark:before:border-dark after:absolute after:right-0 after:bottom-0 after:border-4 after:border-light dark:after:border-dark rounded-md">
                <div class="absolute -right-14 top-[43px] w-60 rotate-45 bg-light dark:bg-dark py-2.5 text-center text-white shadow-md">
                  Recommended
                </div>
              </div>
  
              <!-- ITEM HEADING -->
              <h3 class="mb-4 text-2xl font-semibold">Standard Package</h3>
  
              <!-- ITEM DESCRIPTION -->
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-[90%]">
                Comprehensive web features for growing businesses.
              </p>
              <!-- ITEM PRICE -->
              <div class="my-8 flex items-center">
                <span class="mr-2 text-5xl font-extrabold text-light dark:text-dark">
                  $199
                </span>
                <span>/month</span>
              </div>
  
              <!-- FEATURE LIST -->
              <ul class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Website Design</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Website Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Content Integration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Contact Form</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Google Analytics Integration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>API Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Clean Code</span>
                </li>
              </ul>
              <!-- BUTTON -->
              <a href="#" class="text-xl bg-light dark:bg-dark dark:text-white text-white font-semibold rounded-lg px-5 py-3 text-center border border-light dark:border-dark mt-auto hover:bg-light dark:hover:bg-dark hover:text-white transition-all duration-500">
                Get started
              </a>
            </div>
          </li>
          <!-- PRICING TABLE END -->
  
          <!-- PRICING TABLE START -->
          <li class="contents">
            <div class="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:border-gray-600 xl:p-8 dark:bg-[#171717] dark:text-white relative">
              <!-- ITEM HEADING -->
              <h3 class="mb-4 text-2xl font-semibold">Premium Package</h3>
              <!-- ITEM DESCRIPTION -->
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-[90%]">
                Advanced web features for large enterprises.
              </p>
              <!-- ITEM PRICE -->
              <div class="my-8 flex items-center">
                <span class="mr-2 text-5xl font-extrabold text-light dark:text-dark">
                  $499
                </span>
                <span>/month</span>
              </div>
              <!-- FEATURE LIST -->
              <ul class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Website Design</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Website Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Responsive Design</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>E-commerce Solution</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Maintenance and Support</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>API Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <!-- Icon -->
                  <span class="text-xl text-light dark:text-dark">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!-- FEATURE TEXT -->
                  <span>Clean Code</span>
                </li>
              </ul>
              <!-- BUTTON -->
              <a href="#" class="text-xl dark:text-white text-light font-semibold rounded-lg px-5 py-3 text-center border-2 border-light dark:border-dark mt-auto hover:bg-light dark:hover:bg-dark hover:text-white transition-all duration-500">
                Get started
              </a>
            </div>
          </li>
          <!-- PRICING TABLE END -->
        </ul>
        <!-- PRICING LIST END -->
      </div>
    </section>
    <!-- PRICING ONE END -->
  </body>
   </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDark: localStorage.getItem("theme") === "dark",
        basicFeatures: [
          "Website Design",
          "Website Development",
          "Content Integration",
          "Contact Form",
          "Responsive Design",
          "Clean Code",
        ],
      };
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;
        localStorage.setItem("theme", this.isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", this.isDark);
      },
    },
    mounted() {
      if (this.isDark) {
        document.documentElement.classList.add("dark");
      }
    },
  };
  </script>
  
  <style lang="less" scoped>
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    /* 1 */
    border-width: 0;
    /* 2 */
    border-style: solid;
    /* 2 */
    border-color: #e5e7eb;
    /* 2 */
  }
  
  ::before,
  ::after {
    --tw-content: "";
  }
  
  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured `sans` font-family by default.
  5. Use the user's configured `sans` font-feature-settings by default.
  6. Use the user's configured `sans` font-variation-settings by default.
  */
  
  html {
    line-height: 1.5;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    -moz-tab-size: 4;
    /* 3 */
    -o-tab-size: 4;
    tab-size: 4;
    /* 3 */
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    /* 4 */
    font-feature-settings: normal;
    /* 5 */
    font-variation-settings: normal;
    /* 6 */
  }
  
  /*
  1. Remove the margin in all browsers.
  2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
  */
  
  body {
    margin: 0;
    /* 1 */
    line-height: inherit;
    /* 2 */
  }
  
  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Ensure horizontal rules are visible by default.
  */
  
  hr {
    height: 0;
    /* 1 */
    color: inherit;
    /* 2 */
    border-top-width: 1px;
    /* 3 */
  }
  
  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
  */
  
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  
  /*
  Remove the default font size and weight for headings.
  */
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  
  /*
  Reset links to optimize for opt-in styling instead of opt-out.
  */
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
  
  /*
  Add the correct font weight in Edge and Safari.
  */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /*
  1. Use the user's configured `mono` font family by default.
  2. Correct the odd `em` font sizing in all browsers.
  */
  
  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }
  
  /*
  Add the correct font size in all browsers.
  */
  
  small {
    font-size: 80%;
  }
  
  /*
  Prevent `sub` and `sup` elements from affecting the line height in all browsers.
  */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
  */
  
  table {
    text-indent: 0;
    /* 1 */
    border-color: inherit;
    /* 2 */
    border-collapse: collapse;
    /* 3 */
  }
  
  /*
  1. Change the font styles in all browsers.
  2. Remove the margin in Firefox and Safari.
  3. Remove default padding in all browsers.
  */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    /* 1 */
    font-feature-settings: inherit;
    /* 1 */
    font-variation-settings: inherit;
    /* 1 */
    font-size: 100%;
    /* 1 */
    font-weight: inherit;
    /* 1 */
    line-height: inherit;
    /* 1 */
    color: inherit;
    /* 1 */
    margin: 0;
    /* 2 */
    padding: 0;
    /* 3 */
  }
  
  /*
  Remove the inheritance of text transform in Edge and Firefox.
  */
  
  button,
  select {
    text-transform: none;
  }
  
  /*
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Remove default button styles.
  */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    /* 1 */
    background-color: transparent;
    /* 2 */
    background-image: none;
    /* 2 */
  }
  
  /*
  Use the modern Firefox focus style for all focusable elements.
  */
  
  :-moz-focusring {
    outline: auto;
  }
  
  /*
  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
  */
  
  :-moz-ui-invalid {
    box-shadow: none;
  }
  
  /*
  Add the correct vertical alignment in Chrome and Firefox.
  */
  
  progress {
    vertical-align: baseline;
  }
  
  /*
  Correct the cursor style of increment and decrement buttons in Safari.
  */
  
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  
  /*
  1. Correct the odd appearance in Chrome and Safari.
  2. Correct the outline style in Safari.
  */
  
  [type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
  }
  
  /*
  Remove the inner padding in Chrome and Safari on macOS.
  */
  
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /*
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Change font properties to `inherit` in Safari.
  */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
  }
  
  /*
  Add the correct display in Chrome and Safari.
  */
  
  summary {
    display: list-item;
  }
  
  /*
  Removes the default spacing and border for appropriate elements.
  */
  
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  
  fieldset {
    margin: 0;
    padding: 0;
  }
  
  legend {
    padding: 0;
  }
  
  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /*
  Reset default styling for dialogs.
  */
  
  dialog {
    padding: 0;
  }
  
  /*
  Prevent resizing textareas horizontally by default.
  */
  
  textarea {
    resize: vertical;
  }
  
  /*
  1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
  2. Set the default placeholder color to the user's configured gray 400 color.
  */
  
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    opacity: 1;
    /* 1 */
    color: #9ca3af;
    /* 2 */
  }
  
  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    /* 1 */
    color: #9ca3af;
    /* 2 */
  }
  
  /*
  Set the default cursor for buttons.
  */
  
  button,
  [role="button"] {
    cursor: pointer;
  }
  
  /*
  Make sure disabled buttons don't get the pointer cursor.
  */
  
  :disabled {
    cursor: default;
  }
  
  /*
  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
     This can trigger a poorly considered lint error in some tools but is included by design.
  */
  
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    /* 1 */
    vertical-align: middle;
    /* 2 */
  }
  
  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
  */
  
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  
  /* Make elements with the HTML hidden attribute stay hidden by default */
  
  [hidden] {
    display: none;
  }
  
  *,
  ::before,
  ::after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: 0;
    --tw-pan-y: 0;
    --tw-pinch-zoom: 1;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: 0%;
    --tw-gradient-via-position: 50%;
    --tw-gradient-to-position: 100%;
    --tw-ordinal: normal;
    --tw-slashed-zero: normal;
    --tw-numeric-figure: normal;
    --tw-numeric-spacing: normal;
    --tw-numeric-fraction: normal;
    --tw-ring-inset: 0;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: 0;
    --tw-brightness: 100%;
    --tw-contrast: 100%;
    --tw-grayscale: 0;
    --tw-hue-rotate: 0deg;
    --tw-invert: 0;
    --tw-saturate: 100%;
    --tw-sepia: 0;
    --tw-drop-shadow: 0 0 #0000;
    --tw-backdrop-blur: 0;
    --tw-backdrop-brightness: 100%;
    --tw-backdrop-contrast: 100%;
    --tw-backdrop-grayscale: 0;
    --tw-backdrop-hue-rotate: 0deg;
    --tw-backdrop-invert: 0;
    --tw-backdrop-opacity: 100%;
    --tw-backdrop-saturate: 100%;
    --tw-backdrop-sepia: 0;
  }
  
  ::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: 0;
    --tw-pan-y: 0;
    --tw-pinch-zoom: 1;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: 0%;
    --tw-gradient-via-position: 50%;
    --tw-gradient-to-position: 100%;
    --tw-ordinal: normal;
    --tw-slashed-zero: normal;
    --tw-numeric-figure: normal;
    --tw-numeric-spacing: normal;
    --tw-numeric-fraction: normal;
    --tw-ring-inset: 0;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: 0;
    --tw-brightness: 100%;
    --tw-contrast: 100%;
    --tw-grayscale: 0;
    --tw-hue-rotate: 0deg;
    --tw-invert: 0;
    --tw-saturate: 100%;
    --tw-sepia: 0;
    --tw-drop-shadow: 0 0 #0000;
    --tw-backdrop-blur: 0;
    --tw-backdrop-brightness: 100%;
    --tw-backdrop-contrast: 100%;
    --tw-backdrop-grayscale: 0;
    --tw-backdrop-hue-rotate: 0deg;
    --tw-backdrop-invert: 0;
    --tw-backdrop-opacity: 100%;
    --tw-backdrop-saturate: 100%;
    --tw-backdrop-sepia: 0;
  }
  
  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  
  @media (min-width: 1536px) {
    .container {
      max-width: 1536px;
    }
  }
  
  .fixed {
    position: fixed;
  }
  
  .absolute {
    position: absolute;
  }
  
  .relative {
    position: relative;
  }
  
  .-right-14 {
    right: -3.5rem;
  }
  
  .-right-2 {
    right: -0.5rem;
  }
  
  .-top-2 {
    top: -0.5rem;
  }
  
  .right-0 {
    right: 0px;
  }
  
  .top-\[12\%\] {
    top: 12%;
  }
  
  .top-\[43px\] {
    top: 43px;
  }
  
  .z-50 {
    z-index: 50;
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .mb-10 {
    margin-bottom: 2.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
  
  .mr-2 {
    margin-right: 0.5rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .mt-auto {
    margin-top: auto;
  }
  
  .flex {
    display: flex;
  }
  
  .grid {
    display: grid;
  }
  
  .contents {
    display: contents;
  }
  
  .hidden {
    display: none;
  }
  
  .h-40 {
    height: 10rem;
  }
  
  .h-\[50px\] {
    height: 50px;
  }
  
  .w-40 {
    width: 10rem;
  }
  
  .w-60 {
    width: 15rem;
  }
  
  .w-\[50px\] {
    width: 50px;
  }
  
  .max-w-3xl {
    max-width: 48rem;
  }
  
  .max-w-\[90\%\] {
    max-width: 90%;
  }
  
  .translate-y-\[-12\%\] {
    --tw-translate-y: -12%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .-rotate-\[20deg\] {
    --tw-rotate: -20deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .rotate-45 {
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .gap-8 {
    gap: 2rem;
  }
  
  .space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }
  
  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .rounded-md {
    border-radius: 0.375rem;
  }
  
  .rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  
  .border {
    border-width: 1px;
  }
  
  .border-2 {
    border-width: 2px;
  }
  
  .border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
  }
  
  .border-light {
    --tw-border-opacity: 1;
    border-color: rgb(26 16 60 / var(--tw-border-opacity));
  }
  
  .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  
  .bg-light {
    --tw-bg-opacity: 1;
    background-color: rgb(26 16 60 / var(--tw-bg-opacity));
  }
  
  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  .p-6 {
    padding: 1.5rem;
  }
  
  .px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  
  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .text-left {
    text-align: left;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .text-5xl {
    font-size: 3rem;
    line-height: 1;
  }
  
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  .font-extrabold {
    font-weight: 800;
  }
  
  .font-light {
    font-weight: 300;
  }
  
  .font-normal {
    font-weight: 400;
  }
  
  .font-semibold {
    font-weight: 600;
  }
  
  .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }
  
  .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }
  
  .text-gray-900 {
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }
  
  .text-light {
    --tw-text-opacity: 1;
    color: rgb(26 16 60 / var(--tw-text-opacity));
  }
  
  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  .duration-500 {
    transition-duration: 500ms;
  }
  
  body {
    font-family: "Poppins", sans-serif;
  }
  
  .before\:absolute::before {
    content: var(--tw-content);
    position: absolute;
  }
  
  .before\:left-0::before {
    content: var(--tw-content);
    left: 0px;
  }
  
  .before\:top-0::before {
    content: var(--tw-content);
    top: 0px;
  }
  
  .before\:border-4::before {
    content: var(--tw-content);
    border-width: 4px;
  }
  
  .before\:border-light::before {
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-color: rgb(26 16 60 / var(--tw-border-opacity));
  }
  
  .after\:absolute::after {
    content: var(--tw-content);
    position: absolute;
  }
  
  .after\:bottom-0::after {
    content: var(--tw-content);
    bottom: 0px;
  }
  
  .after\:right-0::after {
    content: var(--tw-content);
    right: 0px;
  }
  
  .after\:border-4::after {
    content: var(--tw-content);
    border-width: 4px;
  }
  
  .after\:border-light::after {
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-color: rgb(26 16 60 / var(--tw-border-opacity));
  }
  
  .hover\:bg-light:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(26 16 60 / var(--tw-bg-opacity));
  }
  
  .hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark .dark\:border-dark) {
    --tw-border-opacity: 1;
    border-color: rgb(0 167 142 / var(--tw-border-opacity));
  }
  
  :is(.dark .dark\:border-gray-600) {
    --tw-border-opacity: 1;
    border-color: rgb(75 85 99 / var(--tw-border-opacity));
  }
  
  :is(.dark .dark\:bg-\[\#171717\]) {
    --tw-bg-opacity: 1;
    background-color: rgb(23 23 23 / var(--tw-bg-opacity));
  }
  
  :is(.dark .dark\:bg-black) {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }
  
  :is(.dark .dark\:bg-dark) {
    --tw-bg-opacity: 1;
    background-color: rgb(0 167 142 / var(--tw-bg-opacity));
  }
  
  :is(.dark .dark\:text-dark) {
    --tw-text-opacity: 1;
    color: rgb(0 167 142 / var(--tw-text-opacity));
  }
  
  :is(.dark .dark\:text-gray-300) {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
  }
  
  :is(.dark .dark\:text-gray-400) {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }
  
  :is(.dark .dark\:text-white) {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark .dark\:before\:border-dark)::before {
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-color: rgb(0 167 142 / var(--tw-border-opacity));
  }
  
  :is(.dark .dark\:after\:border-dark)::after {
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-color: rgb(0 167 142 / var(--tw-border-opacity));
  }
  
  :is(.dark .dark\:hover\:bg-dark:hover) {
    --tw-bg-opacity: 1;
    background-color: rgb(0 167 142 / var(--tw-bg-opacity));
  }
  
  @media (min-width: 640px) {
    .sm\:text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
  
  @media (min-width: 768px) {
    .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  
    .md\:py-24 {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  
    .md\:text-5xl {
      font-size: 3rem;
      line-height: 1;
    }
  
    .md\:text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
  
  @media (min-width: 1024px) {
    .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  
  @media (min-width: 1280px) {
    .xl\:p-8 {
      padding: 2rem;
    }
  }
  
  
  </style>
  