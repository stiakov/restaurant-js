const contactGen = {
  getTabContainer: () => document.getElementById('tabContainer'),
  mapModal: () => {
    const mainModal = Object.assign(document.createElement('div'), { className: 'modal' }, { id: 'main-modal' });
    const backg = Object.assign(document.createElement('div'), { className: 'modal-background' });
    backg.addEventListener('click', () => {
      const modal = document.getElementById('main-modal');
      modal.classList.toggle('is-active');
    });
    const content = Object.assign(document.createElement('div'), { className: 'modal-content' });
    const map = document.createElement('iframe');
    map.style.width = '600px';
    map.style.height = '450px';
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31912.137757732453!2d-77.19862271037448!3d1.1481850103753546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e28d5b4bacc5e4f%3A0x2cb1a6feb4cf8751!2sSantuario%20de%20Flora%20Isla%20de%20La%20Corota!5e0!3m2!1sen!2sco!4v1571200271418!5m2!1sen!2sco';
    mainModal.appendChild(backg);
    mainModal.appendChild(content);
    content.appendChild(map);
    const html = document.getElementsByTagName('html')[0];
    html.appendChild(mainModal);
  },

  container: {
    elements: [
      {
        name: 'article',
        class: 'message has-text-centered',
        id: 'hero-section',
      },
      {
        name: 'img',
        class: 'title',
        src: '../src/img/banner_contact.png',
      },
      {
        name: 'div',
        class: 'message-body title',
        text: 'From an exotic place located in a little island',
      },
      {
        name: 'a',
        class: 'message-body subtitle',
        text: 'contact@art.chef',
        href: 'http://github.com/stiakov',
      },
      {
        name: 'div',
        class: 'message-body subtitle',
        text: '3004559895',
      },
      {
        name: 'a',
        class: 'button is-dark',
        text: 'Show me a map',
        id: 'map-button',
        event: () => {
          const modal = document.getElementById('main-modal');
          modal.classList.toggle('is-active');
        },
      },
    ],
  },
  generateBanner: () => {
    const tabContainer = contactGen.getTabContainer();

    let parent;
    contactGen.container.elements.forEach((elem, idx) => {
      const temp = document.createElement(elem.name);
      if (elem.name === 'img') temp.src = elem.src;
      if (elem.name === 'a') temp.addEventListener('click', elem.event);
      if (elem.class) temp.className = elem.class;
      if (elem.id) temp.id = elem.id;
      if (elem.text) temp.innerHTML = elem.text;
      if (elem.href) temp.href = elem.href;
      if (idx === 0) parent = temp;
      if (idx > 0) parent.appendChild(temp);
    });
    contactGen.mapModal();
    tabContainer.appendChild(parent);
  },
};
export default contactGen;
