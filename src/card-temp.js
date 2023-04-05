import { LitElement, html, css } from 'lit';

class CardTemp extends LitElement {
  static properties = {
    header: { type: String },
    image: { type: String },
    creator: { type: String },
    titles: { type: String },
    color: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0 auto;
    }

    .cards {
      width: 200px;
      height: 100px;
      border: 2px Solid black;
      background-color: solid white;
    }

    .headers {
      align-items: left;
      height: 20px;
      width: 200px;
      font-size: 12px;
    }

    .titles {
      height: 20px;
      width: 200px;
      background-color: solid white;
      align-items: left;
      font-size: 12px;
    }

    .creators {
      height: 20px;
      background-color: solid white;
      width: 200px;
      font-size: 12px;
    }

    .images {
      align-items: right;
      height: 50px;
      width: 50px;
    }
  `;

  render() {
    return html`
      <div class="cards">
        <div class="headers">${this.header}</div>
        <div class="titles">${this.titles}</div>
        <div class="creators">${this.creator}</div>
        <img class="images" src="${this.image}" alt="${this.titles}"></img>
      </div>
    `;
  }
}

customElements.define('card-temp', CardTemp);
