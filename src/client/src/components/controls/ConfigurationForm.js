import React from "react";

import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import size from "lodash/size";

import {
  addBang,
  updateBang,
  updateBangPattern,
  deleteBang,
  updateSearchEngine
} from "../../actions";

import Icon from "./Icon";
import If from "./If";
import ConfirmingButton from "../controls/ConfirmingButton";

const SEARCH_PARAM = "{{{s}}}";

const onAddBang = event => {
  addBang();
};

const onUpdateBang = bang => event => {
  updateBang(bang, event.target.value);
};

const onUpdateBangPattern = bang => event => {
  updateBangPattern(bang, event.target.value);
};

const onDeleteBang = bang => event => {
  deleteBang(bang);
};

const BangControlHeader = props => (
  <div className="row">
    <div className="col">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text border-0 bg-white">!</span>
        </div>
        <input
          type="text"
          readOnly
          disabled
          className="form-control border-0 bg-white"
          value="Bang - omit the leading !"
        />
        <input
          type="text"
          readOnly
          disabled
          className="form-control border-0 bg-white w-50"
          value="Query Pattern"
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-link"
            title="Add a search !bang"
            onClick={onAddBang}
          >
            <Icon icon="plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const formControlClassName = (value, className = "") =>
  isEmpty(value) ? `form-control ${className}` : `form-control ${className}`;

const BangControl = props => (
  <div className="row mb-3">
    <div className="col">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">!</span>
        </div>
        <input
          name="bang"
          type="text"
          className={formControlClassName(props.bang)}
          placeholder="bang"
          value={props.bang}
          onChange={onUpdateBang(props.bang)}
          autoComplete="off"
          autoFocus={props.autoFocus}
        />
        <input
          name="pattern"
          type="text"
          className={formControlClassName(props.pattern, "w-50")}
          placeholder="https://example.com/search?q={{{s}}}"
          value={props.pattern}
          onChange={onUpdateBangPattern(props.bang)}
          autoComplete="off"
        />
        <div className="input-group-append">
          <ConfirmingButton
            className="btn btn-outline-dark"
            title="Delete this search !bang"
            confirmation="Really delete?"
            confirmationClassName="btn btn-danger"
            onClick={onDeleteBang(props.bang)}
          >
            <Icon icon="close" />
          </ConfirmingButton>
        </div>
      </div>
      <If test={isEmpty(props.bang) || isEmpty(props.pattern)}>
        <If test={isEmpty(props.bang)}>
          <small className="text-danger">Search bang is empty.</small>
          &nbsp;
        </If>
        <If test={isEmpty(props.pattern)}>
          <small className="text-danger">Search query pattern is empty.</small>
        </If>
      </If>
    </div>
  </div>
);

export default class ConfigurationForm extends React.Component {
  updateSearchEngine(event) {
    updateSearchEngine(event.target.value);
  }

  render() {
    const { config, records } = this.props.configuration;

    const searchEngine = get(config, "search-engine");

    const bangControls = map(records, (record, index) => (
      <BangControl
        key={record.index}
        bang={get(record, "bang")}
        pattern={get(record, "pattern")}
        autoFocus={index === size(records) - 1}
        index={index}
      />
    ));

    return (
      <div>
        <form>
          <div className="row">
            <div className="col">
              <h3>Search !Bangs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                Use <code>{SEARCH_PARAM}</code> to indicate where your search
                query will be inserted.&nbsp;
                <br className="d-inline d-md-none" />
                e.g.{" "}
                <code>
                  https://www.devdocs.io/#q=
                  {SEARCH_PARAM}
                </code>
                .
              </p>
            </div>
          </div>

          <div className="bang-controls">
            <If test={!isEmpty(bangControls)}>
              <BangControlHeader />
              {bangControls}
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  title="Add a search !bang"
                  onClick={onAddBang}
                >
                  Add a search bang <Icon icon="plus" />
                </button>
              </div>
            </If>

            <If test={isEmpty(bangControls)}>
              <p className="text-center text-muted">
                No search !bangs are defined.&nbsp;
                <button
                  type="button"
                  className="btn btn-outline-success"
                  title="Add a search !bang"
                  onClick={onAddBang}
                >
                  Add a search bang <Icon icon="plus" />
                </button>
              </p>
            </If>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h3>Default Search</h3>
              <p>
                This is the default search pattern used when your query has no
                search <em>!bang</em>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="search-engine"
                className="form-control"
                placeholder="https://"
                value={searchEngine || ""}
                onChange={this.updateSearchEngine}
              />
              <p className="text-muted">
                <small>
                  Use <code>{SEARCH_PARAM}</code> to indicate where your search
                  query will be inserted.&nbsp; e.g.{" "}
                  <code>
                    https://www.duckduckgo.com/?q=
                    {SEARCH_PARAM}
                  </code>
                  .
                </small>
              </p>
            </div>
          </div>

          <div className="mt-5" />
        </form>
      </div>
    );
  }
}
