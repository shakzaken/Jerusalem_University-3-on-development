import React, { Component } from 'react';
import Input from '../../../components/inputs/input_primary/input_primary';
import Image from '../../../components/inputs/image_primary/image_primary';


import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createUser,clearErrors} from '../../../__actions/users_actions';
import {registerUser} from '../../../__actions/auth_actions';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: 'yakir',
      lastName: 'zak',
      email: 'yakir@gmail.com',
      password: '1234',
      confirmPassword: '1234',
      role: 'student',
      image: ''
    }
    
    this.exitClick = this.exitClick.bind(this);
    this.registerClick = this.registerClick.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  exitClick(event){

    if(event.target.className !=='users users-open' 
        && event.target.className!== 'users-card-exit') return;
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student',
      image: ''
    });
    const register = document.getElementById("register");
    const registerCard = document.getElementById("register-card");
    register.classList.remove("users-open");
    registerCard.classList.remove("users-open-card");
    this.props.clearErrors();

  }

  registerClick(event){
    event.preventDefault();
    this.props.clearErrors();
    this.props.registerUser(this.state,() =>{
      const register = document.getElementById("register");
      const registerCard = document.getElementById("register-card");
      register.classList.remove("users-open");
      registerCard.classList.remove("users-open-card");
    });
    
  }

  render() {
    return (
      <div className="users" id="register" onClick={this.exitClick}>
        <div className="users-card register-card" id="register-card">
          <div className="">
          <a className="users-card-exit">&times;</a>
            <form className="users-card-form" >
              <div className="register-form-group u-height-6">
                <Input
                  label="First Name"
                  value = {this.state.firstName}
                  name = "firstName"
                  handleChange = {(event) => this.setState({firstName: event.target.value})}
                  error = {this.props.errors.firstName}
                />
                <Input
                  label="Last Name"
                  value = {this.state.lastName}
                  name = "lastName"
                  handleChange = {(event) => this.setState({lastName: event.target.value})}
                  error = {this.props.errors.lastName}
                />
              </div>
              <div className="register-form-group u-height-6">
                <Input
                  label="password"
                  value = {this.state.password}
                  name = "password"
                  handleChange = {(event) => this.setState({password: event.target.value})}
                  error = {this.props.errors.password}
                />
                <Input
                  label="Confirm password"
                  value = {this.state.confirmPassword}
                  name = "confirmPassword"
                  handleChange = {(event) => this.setState({confirmPassword: event.target.value})}
                  error = {this.props.errors.confirmPassword}
                />
              </div>
              <div className="u-height-6">
                <Input
                  label="email"
                  value = {this.state.email}
                  name = "email"
                  handleChange = {(event) => this.setState({email: event.target.value})}
                  error = {this.props.errors.email}
                />
               </div>
              <div className="register-card-image-container">
                <Image
                    label= "Image"
                    value= {this.state.image}
                    name = "image"
                    id = "register-image"
                    error = {this.props.errors.image}
                    setImage = {(image) => this.setState({image})} 
                    color = "primary"
                  />
                  <div className="register-card-button-container">
                    <a href="#" 
                    className="users-card-button register-card-button" 
                    onClick = {this.registerClick}>Register</a>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    errors: state.users.errors
  };
}


export default connect(mapStateToProps,{clearErrors,registerUser})(Register);





