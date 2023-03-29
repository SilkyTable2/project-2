import { LitElement, html, css } from 'lit';


class Project2 extends LitElement {
  static properties = {
    header: { type: String },
    image: { type: String },
    creator: { type: String },
    titles: { type: String },
    color: { type: String }
  }
  // hihihihihih

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


    .boxwidth {
      width: 800px;
    }
    .topbar {
      height:100px;
      text-align: left;
      font-size: 24px;
      border: 3px solid black;
      background-color: white;
    }
    .searchbar {
      height: 80px;
      text-align: left;
      font-size: 18px;
      border: 3px solid black;
      background-color: white
    }

    .sortbar {
      height: 40px;
      text-align: left;
      font-size: 18px;
      border: 3px solid black;
      background-color: white;
    }

    .topicselectbar {
      height: 40px;
      text-align: left;
      font-size: 18px;
      border: 3px solid black;
      background-color: white;
    }

    .badgebar {
      height: 400px;
      text-align: left;
      font-size: 18px;
      border: 3px solid black;
      background-color: white;
    }

    // -------css for searchbar-------
    input {
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid black;
      transition: all .3s ease-in-out;
      width: 500px;
    }
    input:focus {
      border-bottom: 2px solid blue;
      outline: 1px solid blue;
      outline-offset: 4px;
    }
    input:hover:not(:focus) {
      border-bottom: 2px solid blue; 
    }

    /** accessibility enhancement to not animate the changes possibly
    for users that have motion activated disabilities **/
    @media (prefers-reduced-motion) {
      input {
        transition: none;
      }
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
      <div class="boxwidth">
        <div class="topbar"> 
          Explore
        </div>
        <div class="searchbar">
          Search:
          <input type="text" id="getme" placeholder="Search Content, Topics, and People" />
        </div>
        <div class="badgebar">
          Badges:
        </div>
      </div>
    `;
  }
}

customElements.define('project-2', Project2);