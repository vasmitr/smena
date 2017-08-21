import React, {Component} from 'react';

const NASA_ENDPOINT =
  'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY';

class Example extends Component {
  state = {
    isLoading: false,
    asteroids: []
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(NASA_ENDPOINT)
      .then(response => {
        if (response.status !== 200) {
          return new Promise.reject('status != 200');
        }
        return response.json();
      })
      .then(data => {
        let asteroids = [];
        for (let date in data.near_earth_objects) {
          asteroids = asteroids.concat(data.near_earth_objects[date]);
        }
        this.setState({asteroids, isLoading: false});
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
  }

  render() {
    const {asteroids, isLoading} = this.state;
    console.log(asteroids);
    return (
      <div>
        {isLoading
          ? <p>Loading</p>
          : asteroids.map((asteroid, i) =>
              <p key={i}>
                {asteroid.name} {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} -{' '}
                {asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} meters
              </p>
            )}
        {}
      </div>
    );
  }
}

export default Example;
