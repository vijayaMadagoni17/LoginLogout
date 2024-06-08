// Write your code here
const Message = props => {
  const {isLoggedIn} = props
  if (isLoggedIn === true) {
    return <h1 className="heading">Please Login</h1>
  } else {
    ;<h1 className="heading">Welcome User</h1>
  }
}
