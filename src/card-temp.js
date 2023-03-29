import { LitElement, html, css } from 'lit';

class CardTemp extends LitElement {
  static properties = {
    header: { type: String },
    image: { type: String },
    creator: { type: String },
    titles: { type: String },
    color: { type: String }
  }

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
        border: 3px Solid black;
    }

    .headers {
        background-color: ${this.color};
        align-items: left;
    }

    .titles {
        height: 50px;
    }

    .creators {

    }

    .images {

    }
    
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.image = "";
    this.creator = "john doe";
    this.titles = "Test123";
    this.color = "#800008";
  }

  render() {
    return html`
      <div class='cards'>
        <div class='headers'>
            ${this.header}
        </div>
        <div class='titles'>
            ${this.titles}
        </div>
        <div class='creators'>
            ${this.creator}
        </div>
        <div class='images'> 
            ${this.image}
        </div>
      </div>
    `;
  }
}

customElements.define('card-temp', CardTemp);