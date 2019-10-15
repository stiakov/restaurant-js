import env_vars from './env_var';
import menu from './menu';
const menuGen = menu;
let env = env_vars;

class Display {
  constructor() {
    this.setNavbar();
    this.addContainer();
  }

  getBody() {
    return document.getElementsByTagName('body')[0];
  }

  setNavbar() {
    let nav = [];
    let parent;

    const elem_collection = [
      {
        element: 'nav',
        id: 'main-nav',
        class: 'navbar is-light'
      },
      {
        element: 'div',
        class: 'navbar-brand'
      },
      {
        element: 'a',
        class: 'navbar-item',
      },
      {
        element: 'img',
        id: 'nav-img',
        attributes: {'src': env.logo_src}
      }
    ];

    elem_collection.forEach((item, idx) => {
      const temp = document.createElement(item.element);
      parent = (idx === 0) ? this.getBody() : parent;
      parent.appendChild(temp);
      if (item.class) temp.className = item.class;
      if (item.id) temp.id = item.id;
      if (item.attributes) {
        Object.keys(item.attributes).forEach(_attrib => {
          temp.setAttribute(_attrib, item.attributes[_attrib]);
        });
      }
      parent = temp;
    });

    this.createTabs();
    return nav;
  }

  addContainer() {
    const cont = document.createElement('div');
    Object.assign(cont, {id: 'main-container'}, {className: 'container'});
    this.getBody().appendChild(cont);
  }

  createTabs() {
    const nav = document.getElementById('main-nav');
    const tabs = [
      {
        name: 'Home',
        event: () => console.log('From Home')
      },
      {
        name: 'Menu',
        event: () => console.log('From Menu')
      },
      {
        name: 'Place',
        event: () => menuGen.generateMenuContainer()
      },
      {
        name: 'Contact',
        event: () => console.log('From Contact')
      }
    ];
    const menu = Object.assign(document.createElement('div'), {className: 'navbar-menu'});
    const start = Object.assign(document.createElement('div'), {className: 'navbar-start'});

    tabs.forEach(tab => {
      const temp = document.createElement('a');
      Object.assign(temp, {className: 'navbar-item'}, {textContent: tab.name});

      temp.addEventListener('click', () => {
        tab.event();
      });
      start.appendChild(temp);
    });

    menu.appendChild(start);
    nav.appendChild(menu);
    return menu
  }

}

export default Display;