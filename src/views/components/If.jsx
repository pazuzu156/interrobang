const { isFunction } = require("lodash");

const renderChildren = children => {
  return isFunction(children) ? children() : children;
};

const If = props => (props.test ? renderChildren(props.children) : null);

module.exports = If;
