import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { getWeather } from './actions/weatherActions';
import { getWeatherInfo } from './reducers/weather';

const mapStateToProps = (state, props) => {
  return {
    weather: getWeatherInfo(state)
  };
};

const mapDispatchToProps = {
  getWeather
};

class App extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    return (
      <div>
        Testing
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
