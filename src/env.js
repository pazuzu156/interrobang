const { get } = require('lodash');

function getApplicationName() {
  return get(process.env, ['VCAP_APPLICATION', 'name'], 'Interrobang');
}

function getApplicationVersion() {
  return get(process.env, ['VCAP_APPLICATION', 'version'], 'DEV');
}

module.exports = {
  getApplicationName,
  getApplicationVersion,
  SETUP_BROWSER_URL: 'https://www.howtogeek.com/114176/HOW-TO-EASILY-CREATE-SEARCH-PLUGINS-ADD-ANY-SEARCH-ENGINE-TO-YOUR-BROWSER/',
  SETUP_CHROME_URL: 'https://support.google.com/chrome/answer/95426?hl=en',
  SETUP_FIREFOX_URL: 'https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox#w_add-a-search-engine',
  SETUP_SAFARI_URL: 'https://support.apple.com/guide/safari/customize-your-search-ibrwe75c2a3c/mac',
  SETUP_EDGE_URL: 'https://support.microsoft.com/en-us/help/4028574/windows-10-change-the-default-search-engine-in-microsoft-edge'
};