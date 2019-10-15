import environmentVars from './env_var';

const env = environmentVars;

const aux = {
  getTabContainer: () => document.getElementById('tabContainer'),

  createAndAssign: (parent, data) => {
    const temp = Object.assign(
      document.createElement(data[0]), { className: data[1] }, { textContent: data[2] },
    );
    parent.appendChild(temp);
    return temp;
  },

  appendImgMarkup: (parent, id) => {
    if (id === 'right') {
      const card = Object.assign(document.createElement('div'), { className: 'card-image' });
      const figure = Object.assign(document.createElement('figure'), { className: 'image is-3by4' });
      const img = Object.assign(document.createElement('img'), { src: env.menu.mainImgSrc }, { id: 'img_container' });
      figure.appendChild(img);
      card.appendChild(figure);
      parent.appendChild(card);
    }
  },

  attachImgEvent: (parent, event, src) => {
    const imgContainer = document.getElementById('img_container');
    parent.addEventListener(event, () => Object.assign(imgContainer, { src: src }));
  },
};

const menu = {
  populateMenu: () => {
    const left = document.getElementById('left');
    env.menu.products.forEach((product) => {
      const cell = document.createElement('div');
      Object.assign(cell, { className: 'tile is-vertical card' });
      Object.keys(product).forEach((key) => {
        switch (key) {
          case 'name':
            aux.createAndAssign(cell, ['p', 'title', product.name]);
            break;
          case 'description':
            aux.createAndAssign(cell, ['p', 'subtitle', product.description]);
            break;
          case 'price':
            aux.createAndAssign(cell, ['p', 'content', product.price]);
            break;
          default:
            break;
        }
      });
      aux.attachImgEvent(cell, 'mouseover', product.img_path);
      aux.attachImgEvent(cell, 'mouseout', env.menu.mainImgSrc);
      left.appendChild(cell);
    });
  },

  generateMenuContainer: () => {
    const tabContainer = aux.getTabContainer();
    let parent;
    env.menu.elements.forEach((item, idx) => {
      const temp = Object.assign(document.createElement(item.element), { className: item.class });
      if (item.id) {
        const container = Object.assign(temp, { id: item.id });
        aux.appendImgMarkup(container, item.id);
      }
      if (idx === 0) parent = temp;
      if (idx > 0) parent.appendChild(temp);

      tabContainer.appendChild(parent);
    });
    menu.populateMenu();
    return tabContainer;
  },
};

export default menu;
