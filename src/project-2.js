import { LitElement, html, css } from 'lit';


class Project2 extends LitElement {
  static properties = {
    header: { type: String },
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
  }

  render() {
    return html`
      
    `;
  }
}

customElements.define('project-2', Project2);