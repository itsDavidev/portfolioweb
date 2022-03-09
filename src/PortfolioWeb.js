import './components/HeaderApp';
import './components/ProjectsApp'



class PortfolioWeb extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{  

    }
    span{
        color:#5bc0be;
    }
    .container{
        padding:3rem;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${PortfolioWeb.styles}</style>
     <div class='container'>
         <div class='renderApp'>     
            <header-app></header-app>
            <projects-app></projects-app>
         </div>
    </div>
    `;
  }
}
customElements.define('portfolio-web', PortfolioWeb);