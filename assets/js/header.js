class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          
        </footer>
      `;
    }
  }
  
  customElements.define('header-component', Footer);