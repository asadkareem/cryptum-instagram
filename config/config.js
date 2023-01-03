//just put the clinet id
var in_client_id = "",
  //just put the clien secret
  in_client_secret = "",
  //just put the redirect_uri
  in_redirect_uri = "",
  in_auth_url =
    "https://api.instagram.com/oauth/authorize/?client_id=" +
    in_client_id +
    "&redirect_uri=" +
    in_redirect_uri +
    "&response_type=code";

var db_uri = "mongodb://localhost:27017/instagram-auth";

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: db_uri,
  },
  instagram: {
    client_id: in_client_id,
    client_secret: in_client_secret,
    auth_url: in_auth_url,
    redirect_uri: in_redirect_uri,
  },
};
