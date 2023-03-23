import { LitElement, html, css } from 'lit';


class Project2 extends LitElement {
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
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.image = "";
    this.creator = "";
    this.titles = "";
    this.color = "";
  }

  render() {
    return html`
      <div>
        <div> 
          Explore
        </div>
        <div>
          Search:
        </div>
        <div>
          Sort By:
        </div>
        <div>
          Topic Selector:
        </div>
        <div>
          Badges:
        </div>
      </div>
    `;
  }
}

customElements.define('project-2', Project2);