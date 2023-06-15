
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
      show: true
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show } = this.state;

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
      </div>
    );
  }
}


export default App;
