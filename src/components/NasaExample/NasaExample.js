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
      this.setState({asteroids: [{name: 1, id: 0}, {name: 2, id: 1}, {name: 3, id: 2}], isLoading: false});
    }, 1000);

    setInterval(() => {
      this.setState(({asteroids}) => ({
        asteroids: asteroids.map(asteroid => ({name: asteroid.name + 1, id: asteroid.id}))
      }));
    }, 500);
  }

  handleClick = id => {
    this.setState(({asteroids}) => ({
      asteroids: asteroids.map(asteroid => {
        if (asteroid.id === id) {
          return {name: 0, id: asteroid.id};
        } else {
          return asteroid;
        }
      })
    }));
  };

  render() {
    const {asteroids, isLoading} = this.state;

    return (
      <div>
        {isLoading
          ? <p>Loading</p>
          : asteroids.map(({name, id}) => <Child name={name} id={id} onClick={this.handleClick} />)}
      </div>
    );
  }
}

export default Example;
