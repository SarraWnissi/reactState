
import './App.css';


import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'lina ',
        bio: 'etudiente',
        imgUrl: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-fille-t-shirt-blanc-posant-regardant-camera-isolee-fond-studio-rose_155003-46555.jpg?w=2000',
        profession: 'Developer'
      },
      show: true,
      mountTime: new Date(),
      timeSinceMount: 0
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = Math.floor((currentTime - this.state.mountTime) / 1000);
      this.setState({ timeSinceMount: timeDiff });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="container">
        <button className="button" onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgUrl} alt="Person" />
            <p>{person.profession}</p>
          </div>
        )}
         <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}


export default App;
