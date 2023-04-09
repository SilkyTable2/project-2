import { LitElement, html, css } from 'lit';

class CardTemp extends LitElement {
  static properties = {
    heading: { type: String },
    image: { type: String },
    creator: { type: String },
    titles: { type: String },
    color: { type: String },
    blue: { type: Boolean },
    yellow: { type: Boolean },
    purple: { type: Boolean },
    green: { type: Boolean}
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0 auto;
    }

    :host([blue]) #head {
      background-color: #3399FF;
    }

    :host([yellow]) #head {
      background-color: #f2dc23;
    }

    :host([purple]) #head {
      background-color: #800080;
    }

    :host([green]) #head {
      background-color: #008000;
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

  constructor() {
    super();
    this.blue = false;
    this.yellow = false;
    this.purple = false;
    this.green = false;
    this.heading = "";
    this.titles = "";
    this.creator = "";
    this.images = "";
    this.color = "";
  }

  render() {
    return html`
      <div class="cards">
        <div class="headers" id="head">${this.heading}</div>
        <div class="titles">${this.titles}</div>
        <div class="creators">Creator: ${this.creator}</div>
        <img class="images" src="${this.image}" alt="${this.titles}">
      </div>
    `;
  }


}

customElements.define('card-temp', CardTemp);