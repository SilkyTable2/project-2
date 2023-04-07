async function getSearchResults(value = '') {
  const results = await fetch(`/api/badges?search=${value}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return [];
    })
    .then(data => data);
  return results;
}

class GlobalBadgeCtor {
  host;

  constructor(host) {
    this.host = host;
    // heading, title, creator search text

    this._searchText = '';
    this.host.addController(this);
    getSearchResults().then(res => {
      this.badges = res;
    });
  }

  set searchText(value) {
    this._searchText = value;
    getSearchResults(value).then(res => {
      this.badges = res;
      this.host.requestUpdate();
    });
  }

  get searchText() {
    return this._searchText;
  }
}

export default GlobalBadgeCtor;
