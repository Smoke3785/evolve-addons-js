![Smoke's Evolve Addons](https://raw.githubusercontent.com/Smoke3785/evolve-addons-js/main/logo/Smoke's%20Evolve%20Addons%201.png)

# Smoke's Evolve Addons

Smoke's Evolve Addons is a Chromium browser extension which provides several fixes for [Infovision Software's Evolve](https://www.infovisionsoftware.com/), as well as adds functionality. A substantial portion of Evolve's UI is inconsistent, ugly, or incompatible with resolutions which are prevalent in local library infrastructure. 

[GitHub](https://github.com/Smoke3785/evolve-addons-js) **|** [View on Website](https://owenrossikeen.com/docs/smokes-evolve-addons) **|** [Donate](https://owenrossikeen.com/donate)

## Installation

1. Download the .zip file from [my website](https://owenrossikeen.com/downloads?evolve)
2. Extract the zip file
3. Navigate to chrome://extensions in your preferred Chromium browser

**Note:** Steps 3 and 4 may be slightly different depending on your browser.

4. Toggle Developer Mode to **ON** in the top-right of the developer screen
5. Click "Load unpacked"
6. Select your unpacked *Smoke's Evolve Addons* folder
7. Enjoy!

## Features

- [Keyboard Shortcuts](#keyboardShortcuts)
- [Navbar Fixes](#navbarFixes)
- [Modal Click Outside](#modalClickOutside)
- [Favicon](#favicon)
- [Quick Navigation](#quickNav)
- [Styling Fixes](#styling)

<a name="keyboardShortcuts"></a>
### Keyboard Shortcuts

Adds the following keyboard shortcuts to button promts: 

| Button    | Key       | Prompt           |
| --------- | --------- | ---------------- |
| ↩        | Search     | Search (↩)      |
| ↩        | Close      | Close (↩)       |
| ↩        | Save       | Save (↩)        |
| Y        | Fine       | Fine (Y)         |
| Y        | Yes        | Yes (Y)          |
| N        | No         | No (N)           |
| N        | Waive Fine | Waive Fine (N)   |

It also allows all windows with an X to be exited with the escape key, although this feature can be occasionally laggy due to the fact that *evolve renders all modal windows at all times and hides them with CSS when not being used.* Perhaps a better developer than I can work around this.


<a name="navbarFixes"></a>
### Navbar Fixes

The old navbar links look terrible, have unclear interactivity, aren't consistently centered, and fail at reasonable resolutions. This centers the navbar links vertically, makes their interactive zone clear, and sorts out the war-crime of a dropdown menu.

![navbarComparison](https://user-images.githubusercontent.com/51245634/193696008-45852e15-d77a-4c30-918a-4fcba1f6e021.png)

This feature also fixes many of the broken links and prevent what I am (generously) assuming was an un-intended page reload on every nav-link click. Lastly, it allows the Evolve logo to be clicked, returning the user to the homepage. I believe this functionality was intended, but broken.

<a name="modalClickOutside"></a>
### Modal Click Outside

This feature allows all the modals and pop-ups in the app to be dismissed by clicking outside of them. This is especially helpful when you want to re-focus the barcode input, but a user/holding-specific popup is preventing you from scanning the next item. 

<a name="favicon"></a>
### Favicon

Add this does is add a favicon to the browser tab. This makes it far easier to find Evolve when you're moving between different tabs.

![faviconAddition](https://user-images.githubusercontent.com/51245634/193697084-8f01f7f2-2e04-4cbe-8084-d2896bd71895.png)

<a name="quickNav"></a>
### Quick Nav
Allows users to execute toolbar commands by clicking Alt+<Number of toolbar command>. Holding alt also displays the number of each toolbar command. Users may or may not appreciate this feature, so in the future I will make it configurable. For now, it is enabled by default.

![toolbarShortcuts](https://user-images.githubusercontent.com/51245634/193697725-0efe2587-b850-48fd-9af7-de377729ad90.png)

<a name="styling"></a>
### Styling

The list of styling changes are expansive, but I will attempt to list them all here:
- Converts main page container to flex
- Standardizes element padding
- Overhauls the navbar
  - Converts the navbar to flexbox, allowing for greater compatibility with older/smaller monitors and increased magnification (a necessary accommodation for older librarians).
  - Centers nav items vertically
  - Justifies nav items to left
  - Makes hover-state clearer
  - Makes interactive zone more intuitive
  - Makes dropdown items clearer, more consistently maintains `:hover` state.
  - Vertically centers left-mode navigation dropdown, standardizes padding.
- Overhauls the toolbar
  - Converts toolbar to flex, allows toolbar items to wrap at smaller viewport sizes.
  - Centers toolbar items in their container
- Overhauls the barcode entry window
  - Standardizes padding NOTE: There is currently a bug which adds extra padding to the top of this window. Will resolve.
- Several stying changes for the Patron Search and Holding Search windows
  - Increases size of search window. This is perhaps the single most helpful change of this entire extension.
  - Converts results window to flex, standardizing padding
  - Rounds off all four corners of the search window
  - Changes styles on the results table, allowing more information to be immediately visible.
  - Makes exit button consistently justified from top and left
- Minor fixes to left-justified panel for Patrons and Holdings
  - Expands submission button to be full-width
  - Increases size of panel
  - Justifies input labels with icons to the same line
  - Allows input elements to expand to usable size
- Pretties up the numbered notification symbol
  - Centers number within icon
  
  
This is not an exhaustive list of changes, but covers all of the more important ones. The file [override.css](https://github.com/Smoke3785/evolve-addons-js/blob/main/override.css) has its own documentation, which you are free to review.

I will be adding features, fixing bugs, etc. over time. If you have a request or report, reach out through my [website's contact form](https://owenrossikeen.com#contact). This project won't fix many of the systemic issues with Infovision's Evolve, but it should make the experience more usable.

--- 

Made by Owen Rossi-Keen 

[GitHub](https://github.com/Smoke3785/) **|** [Website](https://owenrossikeen.com/) **|** [Donate](https://owenrossikeen.com/donate)
