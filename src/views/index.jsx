const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Interrobang</title>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
          <div className="container search-form-container">
            <div className="row">
              <div className="offset-sm-2 col-sm-8 offset-md-3 col-md-6">
                <h1 className="display-1">Interrobang<span className="">&#8253;</span></h1>
                <form className="form" method="GET" action={`/${this.props.gist}/search`}>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-magnify" />
                      </span>
                    </div>
                    <input name="query" className="form-control" type="text" placeholder="What do you wish of me?" autoFocus />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-secondary">Search</button>
                    </div>
                  </div>
                  <small className="form-text text-muted">
                    Custom search <em>!bangs</em>. DuckDuckGo default <em>!bangs</em>. Pick your search engine.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Index;
