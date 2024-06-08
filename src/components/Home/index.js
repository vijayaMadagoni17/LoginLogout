// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLoggedin: true}

  render() {
    const {isLoggedin} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <Message />
          <Login text="Login" />
        </div>
      </div>
    )
  }
}

export default Home
