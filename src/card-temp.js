import { LitElement, html, css } from 'lit';

class CardTemp extends LitElement {
  static properties = {
    heading: { type: String },
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
      height: 130px;
      border: 2px Solid black;
      background-color: solid white;
    }

    .headers {
      align-items: left;
      height: 20px;
      width: 200px;
      font-size: 12px;
      background-color: #3399FF;
    }

    .titles {
      height: 40px;
      width: 200px;
      background-color: solid white;
      align-items: left;
      font-size: 16px;
    }

    .creators {
      height: 20px;
      background-color: solid white;
      width: 200px;
      font-size: 12px;
      align-items: left;
    }

    .images {
      float: right;
      height: 50px;
      width: 50px;
    }
    .handle {
      length: 200px;
      width: 10px;
      border: 1px solid black;
      background-color: solid red;
      float: left;
    }
  `;

  render() {
    return html`
      <div class="cards">
        <div class="headers">${this.heading}</div>
        <div class="titles">${this.titles}</div>
        <div class="creators">Creator: ${this.creator}</div>
        <img class="images" src="${this.image}" alt="${this.titles}">
      </div>
    `;
  }


}

customElements.define('card-temp', CardTemp);