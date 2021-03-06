import React from "react";

import Icon from "./Icon";
import If from "./If";

function OmniBarMobile(props) {
  return (
    <div className="d-block d-md-none">
      <div className="card border-default shadow-16dp">
        <div className="p-2">
          <form className="">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <Icon icon="home" />
                </span>
              </div>
              <input
                id="search-input"
                type="text"
                className="form-control search-input"
                placeholder=""
                style={{ fontSize: "110%" }}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <Icon icon="content-copy" />
                </span>
                <span className="input-group-text">
                  <Icon icon="dots-vertical" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function OmniBarDesktop(props) {
  return (
    <div className="d-none d-md-block">
      <div className="card border-default shadow-16dp">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                New Tab <Icon icon="remove" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Icon icon="mdi mdi-plus" />
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <form className="form-inline d-flex">
            <button className="btn btn-outline-dark mr-1" disabled>
              <i className="mdi mdi-arrow-left" />
            </button>
            <button className="btn btn-outline-dark mr-1" disabled>
              <i className="mdi mdi-arrow-right" />
            </button>
            <button className="btn btn-outline-dark mr-1" disabled>
              <i className="mdi mdi-refresh" />
            </button>

            <div
              className="input-group align-self-stretch"
              style={{ flexGrow: 1 }}
            >
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="mdi mdi-magnify" />
                </span>
              </div>
              <input
                id="search-input"
                type="text"
                className="form-control search-input"
                placeholder=""
                style={{ fontSize: "110%" }}
              />
            </div>

            <button className="btn btn-outline-dark ml-1" disabled>
              <i className="mdi mdi-dots-vertical" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function OmniBar(props) {
  return (
    <div className="omnibar">
      <OmniBarMobile />
      <OmniBarDesktop />
    </div>
  );
}

module.exports = OmniBar;
