const keybinds = true;
const user_wm_fix = true;
const navbar_fixes = true;
const modal_click_outside = true;
const second_keybinds = true;
const second_tooltips = true;
const favicon = true;

const inlineStyleProscribed = [
  // Deprecated
];

const btnReplacePairs = {
  //   clear: `Clear ()`,
  search: `Search (↩)`,
  yes: `Yes (Y)`,
  no: `No (N)`,
  close: `Close (↩)`,
  save: `Save (↩)`,
  //   'save/print': `Save/Print ()`,
  fine: `Fine (Y)`,
  'waive fine': `Waive Fine (N)`,
};

const buttonSelector =
  '*:is(.modal, #PN_EditDetails, #UP_HOSearch):not(#PN_InHouse) input:is([value="Search"], [value="Yes"], [value="No"], [value="Close"], [value="Save"], [value="Save/Print"], [value="Fine"], [value="Waive Fine"]), #UP_PatronSearch *:is([value="Search"])';

const linkOverrides = [
  {
    selector: '.topdiv > div:first-of-type > a',
    link: 'https://evolve-library.infovisionsoftware.com/beavercounty/library/circulation.aspx',
  },
  {
    selector: '.topdiv a#BT_Home',
    link: 'https://evolve-library.infovisionsoftware.com/beavercounty/',
  },
  {
    selector: '.topdiv a#BT_Reports',
    link: 'https://evolve-library.infovisionsoftware.com/beavercounty/rmreports.aspx',
  },
];

const helperFunctions = {
  getVisibleFromArray(array) {
    return array.flatMap((button, idx) =>
      [...button.getClientRects()].length ? button : []
    );
  },
  setFavicon(img) {
    let headTitle = document.querySelector('head');
    let favLink = document.createElement('link');
    favLink.setAttribute('rel', 'shortcut icon');
    favLink.setAttribute('href', img);
    headTitle.appendChild(favLink);
  },
  removeInlineStyles(selectorsArray) {
    selectorsArray.forEach((entry, idx) => {
      let selector = entry?.selector || entry;
      [...document.querySelectorAll(selector)].forEach((el, idx) => {
        if (entry.removeProps) {
          entry.removeProps.forEach((propName, idx) => {
            el.style[propName] = '';
          });
          return;
        }
        el.style = '';
      });
    });
  },
  formSubmission(eventTarget, eventArgument = '') {
    const form = document.getElementById('form1');

    form.__EVENTTARGET.value = eventTarget;
    form.__EVENTARGUMENT.value = eventArgument;

    form.submit();
  },
};

const buttonHandlers = {
  escapeCurrentWindow() {
    let allCloseButtons = [...document.querySelectorAll('.close')];

    let visibleCloseButtons = allCloseButtons.flatMap((button, idx) =>
      [...button.getClientRects()].length ? button : []
    );
    visibleCloseButtons.forEach((buttonElement, idx) => {
      buttonElement.click();
    });
  },
  handleModalBtn(key) {
    helperFunctions
      .getVisibleFromArray([
        ...document.querySelectorAll(
          `.modal *[value="${btnReplacePairs[key]}"]`
        ),
      ])
      .forEach((btn, i) => {
        btn.click();
      });
  },
  handleSecondaryMenuBtn(index) {
    let btn = document.querySelector(`.user-menu *[smk-key="smk-${index}"]`);
    helperFunctions.formSubmission(btn.id);
  },
};

const Start = () => {
  // ================
  // FEATURE PRE REQS
  // ================

  const prereq_second_keybinds_tooltips = () => {
    // Get all secondary navbar buttons
    let navbarButtons = [
      ...document.querySelectorAll('#PN_Toolbar .user-menu a'),
    ];

    navbarButtons.forEach((btn, idx) => {
      if (idx > 8) return;
      let customLabel = document.createElement('span');
      customLabel.className = 'smk-customLabel';
      customLabel.textContent = ` ${idx + 1}`;
      customLabel.setAttribute('smk-key', `smk-${idx + 1}`);
      btn.setAttribute('smk-key', `smk-${idx + 1}`);
      btn.append(customLabel);
    });
  };
  // ========
  // FEATURES
  // ========

  const feature_keybinds = () => {
    [...document.querySelectorAll(buttonSelector)].forEach((button, idx) => {
      let temp = button.value.toString().toLowerCase();
      let el = document.getElementById(button.id);
      el.value = btnReplacePairs[temp];
    });

    document.body.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 27:
          {
            // Escape
            buttonHandlers.escapeCurrentWindow();
          }
          break;
        case 89:
          {
            // Y
            buttonHandlers.handleModalBtn('fine');
            buttonHandlers.handleModalBtn('yes');
          }
          break;
        case 78:
          {
            // N
            buttonHandlers.handleModalBtn('waive fine');
            buttonHandlers.handleModalBtn('no');
          }
          break;
        case 13:
          {
            // Enter
            buttonHandlers.handleModalBtn('search');
            buttonHandlers.handleModalBtn('close');
            buttonHandlers.handleModalBtn('save');
          }
          break;
        default:
          {
          }
          break;
      }
    });
  };

  const feature_user_wm_fix = () => {
    let userMenu = document?.querySelector('.userinfo') || false;

    // To prevent infinite re-renders, this checks to see if the patch has already been run.
    if (userMenu && userMenu.innerHTML.toString().includes('Welcome, ')) {
      let children = [...userMenu.children];
      userMenu.textContent = '';
      children.forEach((child, idx) => {
        userMenu.appendChild(child);
      });

      let userButton = userMenu.querySelector('#LB_LoginDetails');
      children = [...userButton.children];
      userButton.textContent = 'Welcome ';
      children.forEach((child, idx) => {
        userButton.appendChild(child);
      });
    }
  };

  const feature_navbar_fixes = () => {
    linkOverrides.forEach((override, idx) => {
      let el = document?.querySelector(override.selector) || false;
      if (el) el.href = override.link;
    });
  };

  const feature_styling_fixes = () => {
    let leftContent =
      document?.querySelector('.detailsleftdiv-container-circ') ||
      document.querySelector('.detailsleftdiv');
    let rightContent =
      document?.querySelector('.right-section-container.rsc-details') ||
      document.querySelector('.right-section-container');

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'smk-contentContainer');

    document.querySelector('#form1').appendChild(contentDiv);
    if (leftContent) contentDiv.appendChild(leftContent);
    if (rightContent) contentDiv.appendChild(rightContent);
  };

  const feature_modal_click_outside = () => {
    let modalBackdrops = [...document.querySelectorAll('.modal-backdrop')];

    modalBackdrops.forEach((el, idx) => {
      el.addEventListener('click', (e) => {
        buttonHandlers.escapeCurrentWindow();
      });
    });
  };

  const feature_second_keybinds = () => {
    document.body.addEventListener('keydown', (e) => {
      if (
        [49, 50, 51, 52, 53, 54, 55, 56, 57].includes(e.keyCode) &&
        e.altKey
      ) {
        e.preventDefault();
        // This is kinda silly, but it works
        buttonHandlers.handleSecondaryMenuBtn(e.keyCode - 48);
      }
    });
  };

  const feature_second_tooltips = () => {
    document.body.addEventListener('keydown', (e) => {
      if (e.altKey) {
        document.documentElement.style.setProperty('--custom-label-opacity', 1);
      }
    });
    document.body.addEventListener('keyup', (e) => {
      if (e.keyCode == 18) {
        e.preventDefault();
        document.documentElement.style.setProperty('--custom-label-opacity', 0);
      }
    });
  };

  const feature_favicon = () => {
    helperFunctions.setFavicon(
      'https://cdn.owenrossikeen.com/public/image/evolveextensions/favicon.ico'
    );
  };

  if (second_keybinds || second_tooltips) prereq_second_keybinds_tooltips();
  // Conditionally initialize single-run functions
  if (navbar_fixes) feature_navbar_fixes();
  if (modal_click_outside) feature_modal_click_outside();
  if (favicon) feature_favicon();
  if (second_keybinds) feature_second_keybinds();
  if (second_tooltips) feature_second_tooltips();

  // This one is mandatory;
  feature_styling_fixes();
  new MutationObserver(() => {
    // Conditionally initialize DOM-reactive functions
    if (keybinds) feature_keybinds();
    if (user_wm_fix) feature_user_wm_fix();
  }).observe(document.body, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });
};

Start();
