import React, {Component} from 'react';
import Child from './components/Child';

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

    setInterval(() => {
      this.setState((
        {asteroids} //
      ) => ({asteroids: asteroids.map(asteroid => ({name: asteroid.name + 1}))}));
    }, 100);
  }

  render() {
    const {asteroids, isLoading} = this.state;

    return (
      <div>
        {isLoading
          ? <p>Loading</p>
          : asteroids.map((asteroid, i) => <Child key={i} name={asteroid.name + i} />)}
      </div>
    );
  }
}

export default Example;
