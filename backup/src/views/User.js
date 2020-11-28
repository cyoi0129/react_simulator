import React from "react";
/* UI components */
import TextField from '@material-ui/core/TextField';
/* Redux */
import { connect } from 'react-redux'
import { userUpdate } from '../redux'
import Button from '@material-ui/core/Button';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: this.props.user}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // this.setState({
    //   ...state,
    //   user: {
    //     ...state.user,
    //   name: event.target.value
    //   }
    // });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    const saveUser = (user) => {
      this.props.userUpdate(user)
    };
    return(
      <React.Fragment>
        <h1>User</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField label="Name" value={this.state.user.name} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.data.user
})

const mapDispatchToProps = {
  userUpdate
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);