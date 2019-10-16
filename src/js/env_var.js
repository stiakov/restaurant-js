import images from "./images";

const environmentVars = {
  logoSrc: images.logo,
  menu: {
    mainImgSrc: images.joodi,
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
        img_path: images.abigail,
        price: '$12.00',
      },
      {
        name: 'Hanging Out With Michelangelo',
        description: 'Oil marinated ribs cooked with temper.',
        img_path: images.munsell,
        price: '$32.00',
      },
      {
        name: 'Georges Seurat Is Whispering',
        description: 'Green salad inspired in the great British landscapes.',
        img_path: images.lark,
        price: '$19.00',
      },
      {
        name: 'Mies van der Rohe Sketches',
        description: 'Salmon and vegetables perfectly aligned over soy oil.',
        img_path: images.casey,
        price: '$33.00',
      },
      {
        name: 'Boticelli\'s Selection',
        description: 'Bacon bits and olive oil with a special salad.',
        img_path: images.pracuch,
        price: '$14.00',
      },
      {
        name: 'Joan Miro\'s Thirst Quencher',
        description: 'Exotic fruits becoming marvelous nectars.',
        img_path: images.juices,
        price: '$9.00',
      },
    ],
  },
};

export default environmentVars;
