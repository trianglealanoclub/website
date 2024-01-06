// LaunchDarkly Client-side ID
var clientID = "63320969d62496118922410f"; /* Production Environment */

var FeatureFlag_css_theme = "css-theme";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const context = {
  kind: 'application',
  key: 'tac-server',
  date: today
};

const ldclient = LDClient.initialize(clientID, context);