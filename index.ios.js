'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} = React;

var Browser = require('./components/browser.js').default;


var LearnMinder = React.createClass({
  render: function() {
    return (
      <Browser
         url = { "http://www.wp.pl" } >
      </Browser>
    );
  }
});
AppRegistry.registerComponent('LearnMinder', () => LearnMinder);
