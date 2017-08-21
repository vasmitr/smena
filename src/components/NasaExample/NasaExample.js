import React, {Component} from 'react';

const NASA_ENDPOINT =
  'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY';

class Example extends Component {
  state = {
    isLoading: true,
    asteroids: []
  };

  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({asteroids: [{name: 1}, {name: 2}, {name: 3}], isLoading: false});
    }, 1000);
  }

  render() {
    const {asteroids, isLoading} = this.state;
    return (
      <div>
        {isLoading
          ? <p>Loading</p>
          : asteroids.map((asteroid, i) =>
              <p key={i}>
                {asteroid.name}
              </p>
            )}
        {}
      </div>
    );
  }
}

export default Example;
