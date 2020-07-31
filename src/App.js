import React, { Component } from 'react';
import Header from './components/header'
import Headline from './components/headline'
import './app.scss'

const testArr = [
  {
    fName: "James",
    lName: "Paul",
    email: "jp@gmail.com",
    age: 30,
    isOnline: true
  }
]
class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <section className='main'>
          <Headline header={"Post"} desc={"Click the button to enter post"} tes={testArr} />
        </section>
      </div>
    );
  }
}

export default App;
