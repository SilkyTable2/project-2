import { LitElement, html, css } from 'lit';

class CardTemp extends LitElement {
  static properties = {
    heading: { type: String },
    image: { type: String },
    creator: { type: String },
    titles: { type: String },
    color: { type: String },
    // blue: { type: Boolean }, see comment below about commented items
    // yellow: { type: Boolean },
    // purple: { type: Boolean },
    // green: { type: Boolean}
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0 auto;
    }
    
    //Commented out to show approach to custom coloring that we tried to implement
    //:host([blue]) #head {
    // background-color: #3399FF;
    //}

    //:host([yellow]) #head {
    //  background-color: #f2dc23;
    //}

    //:host([purple]) #head {
    //  background-color: #800080;
    //}

    //:host([green]) #head {
    //  background-color: #008000;
    //}

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
  `;

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