import environmentVars from './env_var';
import menu from './menu';
import homeGen from './home';
import contactGen from './contact';

const env = environmentVars;
const menuGen = menu;
const home = homeGen;
const contact = contactGen;

class Display {
  constructor() {
    this.setNavbar();
    this.addContainer();
  }

  getBody() {
    return document.getElementsByTagName('body')[0];
  }

  cleanTabContainer() {
    const tabContent = document.getElementById('tabContainer');
    while (tabContent.hasChildNodes()) {
      tabContent.removeChild(tabContent.lastChild);
    }
  }

  setNavbar() {
    const nav = [];
    let parent;

    const elemCollection = [
      {
        element: 'nav',
        id: 'main-nav',
        class: 'navbar is-light',
      },
      {
        element: 'div',
        class: 'navbar-brand',
      },
      {
        element: 'a',
        class: 'navbar-item',
      },
      {
        element: 'img',
        id: 'nav-img',
        attributes: { src: env.logoSrc },
      },
    ];

    elemCollection.forEach((item, idx) => {
      const temp = document.createElement(item.element);
      if (item.element === 'a') {
        temp.addEventListener('click', () => {
          this.cleanTabContainer();
          home.generateBanner();
        });
      }
      parent = (idx === 0) ? this.getBody() : parent;
      parent.appendChild(temp);
      if (item.class) temp.className = item.class;
      if (item.id) temp.id = item.id;
      if (item.attributes) {
        Object.keys(item.attributes).forEach((attr) => {
          temp.setAttribute(attr, item.attributes[attr]);
        });
      }
      parent = temp;
    });

    this.createTabs();
    return nav;
  }

  addContainer() {
    const cont = document.createElement('div');
    Object.assign(cont, { id: 'main-container' }, { className: 'container' });
    const tabContainer = Object.assign(document.createElement('div'), { id: 'tabContainer' });
    cont.appendChild(tabContainer);
    this.getBody().appendChild(cont);
  }

  createTabs() {
    const nav = document.getElementById('main-nav');
    const tabs = [
      {
        name: 'Home',
        event: () => home.generateBanner(),
      },
      {
        name: 'Menu',
        event: () => menuGen.generateMenuContainer(),
      },
      {
        name: 'Contact',
        event: () => contact.generateBanner(),
      },
    ];
    const menu = Object.assign(document.createElement('div'), { className: 'navbar-menu' });
    const start = Object.assign(document.createElement('div'), { className: 'navbar-start' });

    tabs.forEach((tab) => {
      const temp = document.createElement('a');
      Object.assign(temp, { className: 'navbar-item' }, { textContent: tab.name });
      temp.addEventListener('click', () => {
        this.cleanTabContainer();
        tab.event();
      });
      start.appendChild(temp);
    });

    menu.appendChild(start);
    nav.appendChild(menu);
    return menu;
  }
}

export default Display;
