const { merge } = require("lodash");

function mergeConfigurations(userConfig, ...otherConfigs) {
  return merge({ bangs: {} }, ...otherConfigs, userConfig);
}

module.exports = {
  mergeConfigurations
};
