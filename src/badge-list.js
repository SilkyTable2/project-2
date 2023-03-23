import { LitElement, html, css } from 'lit';
import "./project-2.js";

class Badgelist extends LitElement {
  static properties = {
    badges: { type: String }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    
    `;

    constructor() {
        super();
        this.badges = [];
        this.updateArray();
    }

    updateArray() {
        const address = '/api/badges';// it works from the ../assets/contentlist.json, i swear...
        fetch(address).then((response) => { // code bricks during vercel upload if i dont define const data
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((response) => {
            this.badges = response;
        });
    }

    render() {
      return html`

      `;
    }
}

customElements.define('badge-list', Badgelist);