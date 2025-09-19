# Accessible Mobile Menus Project

## Brief descrition of the project

The project is to create different mobile menus that are accessible. There are 5 menus on this page that will have different entrances for mobile. The menus are accessible due to toggling of the ARIA attribute <code>aria-expanded</code>.

All the all have "_magic_" numbers. That makes sense for all but menu 1. For menu 1 I think I will give the hamburger icon/button a z-index to make it appear over the menu when it comes down. The same will have to be dome for the other menus as well.

1. Mobile menu 1 comes from the top.
2. Mobile menu 2 comes from the right.
3. Mobile menu 3 comes from the left.
4. Mobile menu 4: right sidebar from top, 10% width, 50% height (100% covered close button)
5. Mobile menu 5: left sidebar from top, 10% width, 100% height
6. TO-DO: I would like to make a menu that opens full-sreen and starts as a circle. I believe it's with a width & height of 200% and border-radisu of 50% - coming soon.

> NOTE: It looks like `7rem` is the number to add to the `top` property if you want to add more. Also,

- I need to add `margin` between the menu items because `gap` and `justify-content` were not working, even though they are flex containers?!?
- Just download the files and open `index.html` in the browser.
- I set the media query breakpoing high (`1300px`) so you can test the menus on desktop.
- Use DevTools to see the toggling of `true`/`false` for the `aria-expanded` attribute on the `<button>`.

**NOTE**: The sidebar menu entrances seem to be "sluggish" for the entrance?!?

## Basic layout

```html
<body>
  <!-- I do not have a skip to link on the page(s) -->
  <a class="skip-to" href="#main" class="sr-text">Skip to main content</a>

  <header aria-label="top navigation bar">
    <div class="container">
      <nav class="nav-bar" aria-label="Main navigation">
        <span class="logo">from top</span>

        <button
          id="hamburger"
          class="hamburger"
          aria-label="open navigation"
          tabindex="0"
          aria-expanded="false"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item"><a href="#" class="nav-link">Link 1</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Link 2</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Link 3</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Link 4</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main">
    <!-- rest of page content here -->
  </main>

  <footer>
    <!-- footer content here -->
  </footer>
</body>
```
