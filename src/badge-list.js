import { LitElement, html, css } from 'lit';
import './card-temp.js';
import './project-2.js';


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
      text-align: left;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      display: inline-flex;
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <!--Sends JSON data from badges.js to card-temp.js!-->
        ${this.badges.map(
          badge => html`
            <div class="item">
              <card-temp
                heading="${badge.heading}"
                titles="${badge.titles}"
                image="${badge.image}"
                color="${badge.color}"
                creator="${badge.creator}"
              >
              </card-temp>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('badge-list', Badgelist);
