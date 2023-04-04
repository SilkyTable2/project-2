import { LitElement, html, css } from 'lit';
import './project-2.js';
import './card-temp.js';
// import "@lrnwebcomponents/simple-icon/simple-icon.js";
// import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Badgelist extends LitElement {
  static properties = {
    badges: { type: Array },
  };

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

  async updateArray() {
    const address = '/api/badges'; // Change the address to a relative path
    const result = await fetch(address);
    if (result.ok) {
      const data = await result.json();
      this.badges = data;
    }
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.badges.map(
          badges => html`
            <div class="item">
              <card-temp>
                heading="${badges.heading}" titles="${badges.titles}"
                image="${badges.image}" color="${badges.color}"
                creator="${badges.creator}"
              </card-temp>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('badge-list', Badgelist);
