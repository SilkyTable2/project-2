async function getSearchResults(value = '') {
  const results = await fetch(`/api/badges?search=${value}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return [];
    })
    .then(data => data)
    .catch(error => {
      console.error('API Error:', error);
      return [];
    });
  return results;
}

class GlobalBadgeCtor {
  host;

  constructor(host) {
    this.host = host;
    // heading, title, creator search text

    this._searchText = '';
    this._isLoading = true;
    getSearchResults().then(res => {
      this.badges = res;
      this._isLoading = false;
      this.host.requestUpdate();
    });
    this.host.addController(this);
  }

  get searchText() {
    return this._searchText;
  }

  set searchText(value) {
    this._searchText = value;
    this._isLoading = true;
    getSearchResults(value).then(res => {
      this.badges = res;
      this._isLoading = false;
      this.host.requestUpdate();
    });
  }

  get isLoading() {
    return this._isLoading;
  }
}

export default GlobalBadgeCtor;
