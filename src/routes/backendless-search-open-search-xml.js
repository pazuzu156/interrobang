const openSearchXml = require("../views/open-search");

module.exports = {
  method: "GET",
  path: "/b/{userId}/opensearch.xml",
  handler: (request, reply) => {
    const response = reply.response(
      openSearchXml({ searchUrl: `b/${request.params.userId}` })
    );
    response.type("application/xml");
    return response;
  }
};
