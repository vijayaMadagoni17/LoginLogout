// Write your code here
// Write your code here
const Logout = props => {
  const {isLoggedIn} = this.state
  const {text} = props

  logoutChanges = () => {
    if (isLoggedIn === false) {
      text = 'Logout'
      isLoggedIn = true
      messagechanges()
    }
  }

  return (
    <button className="btn-login" onClick={this.loginChanges}>
      {text}
    </button>
  )
}

export default Logout
