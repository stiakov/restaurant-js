import images from "./images";

const homeGen = {
  hero: {
    imgSrc: images.banner,
    elements: [
      {
        name: 'section',
        class: 'hero is-light is-bold is-medium',
        id: 'hero-section'
      },
      {
        name: 'div',
        class: 'container has-text-centered',
      },
      {
        name: 'img',
        id: 'hero-banner'
      },
    ],
  },

  getTabContainer: () => document.getElementById('tabContainer'),

  generateBanner: () => {
    const tabContainer = homeGen.getTabContainer();
    let parent;
    let heroSection;
    homeGen.hero.elements.forEach((elem, idx) => {
      const temp = document.createElement(elem.name);
      if (elem.class) temp.className = elem.class;
      if (elem.id) temp.id = elem.id;
      if (elem.name === 'img') temp.src = homeGen.hero.imgSrc;
      if (idx === 0) {
        parent = temp;
        heroSection = temp;
      }
      if (idx > 0) {
        parent.appendChild(temp);
        parent = temp;
      }
    });
    tabContainer.appendChild(heroSection);
  },
};

export default homeGen;
