import environmentVars from './env_var';

const env = environmentVars;

const aux = {
  tabContainer: () => Object.assign(document.createElement('div'), { id: 'tabContainer' }),

  getMainContainer: () => document.getElementById('main-container'),

  createAndAssign: (parent, data) => {
    const temp = Object.assign(
      document.createElement(data[0]), { className: data[1] }, { textContent: data[2] });
    parent.appendChild(temp);
    return temp;
  },

  appendImgMarkup: (parent, id) => {
    if (id === 'right') {
      const card = Object.assign(document.createElement('div'), { className: 'card-image' });
      const figure = Object.assign(document.createElement('figure'), { className: 'image is-3by4' });
      const img = Object.assign(document.createElement('img'), { src: env.menuImgSrc }, { id: 'img_container' });
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
  elements: [
    {
      element: 'div',
      class: 'tile is-ancestor',
    },
    {
      element: 'div',
      id: 'left',
      class: 'tile is-8 is-vertical',
    },
    {
      element: 'div',
      id: 'right',
      class: 'tile is-4 is-vertical',
    },
  ],
  products: [
    {
      name: 'Kandinsky Insights',
      description: 'A plentiful dish with colorful and selected vegetables from the Siberian lands.',
      img_path: '../src/img/slices/abigail-keenan.png',
      price: '$12.00',
    },
    {
      name: 'Hanging Out With Michelangelo',
      description: 'Oil marinated ribs cooked with temper.',
      img_path: '../src/img/slices/alex-munsell.png',
      price: '$32.00',
    },
    {
      name: 'Georges Seurat Is Whispering',
      description: 'Green salad inspired in the great British landscapes.',
      img_path: '../src/img/slices/brooke-lark.png',
      price: '$19.00',
    },
    {
      name: 'Mies van der Rohe Sketches',
      description: 'Salmon and vegetables perfectly aligned over soy oil.',
      img_path: '../src/img/slices/casey-lee.png',
      price: '$33.00',
    },
    {
      name: 'Boticelli\'s Selection',
      description: 'Bacon bits and olive oil with a special salad.',
      img_path: '../src/img/slices/katarzyna-pracuch.png',
      price: '$14.00',
    },
    {
      name: 'Joan Miro\'s Thirst Quencher',
      description: 'Exotic fruits becoming marvelous nectars.',
      img_path: '../src/img/slices/brooke-lark-juices.png',
      price: '$9.00',
    },
  ],
  populateMenu: () => {
    const left = document.getElementById('left');

    menu.products.forEach((product) => {
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
      aux.attachImgEvent(cell, 'mouseout', env.menuImgSrc);
      left.appendChild(cell);
    });
  },

  generateMenuContainer: () => {
    const tabContainer = aux.tabContainer();
    let parent;
    menu.elements.forEach((item, idx) => {
      const temp = Object.assign(document.createElement(item.element), { className: item.class });
      if (item.id) {
        const container = Object.assign(temp, { id: item.id });
        aux.appendImgMarkup(container, item.id);
      }
      if (idx === 0) parent = temp;
      if (idx > 0) {
        parent.appendChild(temp);
      }

      tabContainer.appendChild(parent);
    });
    aux.getMainContainer().appendChild(tabContainer);
    menu.populateMenu();
    return tabContainer;
  },
};

export default menu;
