class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="text-center">
          
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);