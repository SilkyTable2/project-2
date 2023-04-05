import { badges } from '../mock/index.js';

class GlobalBadgeCtor {
  host;

  constructor(host) {
    this.host = host;
    this.badges = badges;
    this._searchText = '';
    this.host.addController(this);
  }

  set searchText(value) {
    this._searchText = value;
    this.host.requestUpdate();
  }

  get searchText() {
    return this._searchText;
  }
}

export default GlobalBadgeCtor;
