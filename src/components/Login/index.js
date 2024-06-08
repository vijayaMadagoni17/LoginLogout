// Write your code here
const Login = props => {
  const {isLoggedIn} = this.state
  const {text} = props

  loginChanges = () => {
    if (isLoggedIn === true) {
      messageChange()
    }
  }

  return (
    <button className="btn-login" onClick={this.loginChanges}>
      {text}
    </button>
  )
}

export default Login
