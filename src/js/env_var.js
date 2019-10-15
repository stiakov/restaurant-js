const environmentVars = {
  logoSrc: '../src/img/logo.png',
  menu: {
    mainImgSrc: '../src/img/slices/sobhan-joodi.jpg',
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
  },
};

export default environmentVars;
