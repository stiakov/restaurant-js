class DOM {
  constructor () {
    this.doc = document;
  }

  log() {
    console.log('myDOM -> ' + this.doc)
  }

  create(val) {
    return this.doc.createElement(val);
  }
}

export default DOM;