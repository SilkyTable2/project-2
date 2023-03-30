import { LitElement, html, css } from 'lit';
import "./project-2.js";
// import "@lrnwebcomponents/simple-icon/simple-icon.js";
// import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Badgelist extends LitElement {
  static properties = {
    badges: { type: Array }
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

    .wrapper {
      border: 2px solid black;
      display: flex;
    }
    .item {
      display: inline-flex;
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
        <div class='wrapper'>
            ${this.badges.map(badges => html`
            <div class="item">
                <card-temp> heading="${badges.heading}" titles="${badges.titles}" image="${badges.image}" color="${badges.color}"></card-temp>
            </div>
            `)}
        </div>
      `;
    }
}

customElements.define('badge-list', Badgelist);