class GlobalBadgeCtor {
  host;

  constructor(host) {
    this.host = host;
    // heading, title, creator search text

    this._searchText = '';
    this.host.addController(this);
    this.badges = [];
    this.getSearchResults();
  }

  async getSearchResults(value = '') {
    const results = await fetch(`/api/badges?search=${value}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => data);
    this.badges = results || [];
  }

  set searchText(value) {
    this._searchText = value;
    this.getSearchResults(value);
    this.host.requestUpdate();
  }

  get searchText() {
    return this._searchText;
  }
}

export default GlobalBadgeCtor;
