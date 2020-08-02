import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';
import SharedButton from './components/button';
import ListItem from './components/listitem';
import { fetchPosts } from './actions';


const testArr = [
  {
    fName: "James",
    lName: "Paul",
    email: "jp@gmail.com",
    age: 30,
    isOnline: true
  }
]

const initialState = {
  hideButton: false
}
class App extends Component {

  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this);
    this.state = {
      ...initialState
    }
  }

  fetch() {
    this.props.fetchPosts()
    this.handleHideButton()
  }

  handleHideButton() {
    const { hideButton } = this.state
    this.setState({
      hideButton: !hideButton
    })
  }
  render() {

    const { posts } = this.props
    const { hideButton } = this.state
    console.log('>>>>>>>>>', posts)

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    }
    return (
      <div className="App" data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline header={"Post"} desc={"Click the button to enter post"} tes={testArr} />
          {
            !hideButton && <SharedButton {...configButton} />
          }

          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;

                const configureListItem = {
                  title,
                  desc: body
                };

                return (
                  <ListItem key={index} {...configureListItem} />
                )

              })}
            </div>
          }
        </section>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, { fetchPosts })(App);
