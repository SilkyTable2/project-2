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
    this.isLoading = true;
    getSearchResults().then(res => {
      this.badges = res;
      this.isLoading = false;
    });
    this.host.addController(this);
  }

  set searchText(value) {
    this._searchText = value;
    this.isLoading = true;
    getSearchResults(value).then(res => {
      this.badges = res;
      this.isLoading = false;
      this.host.requestUpdate();
    });
  }

  get searchText() {
    return this._searchText;
  }
}

export default GlobalBadgeCtor;
