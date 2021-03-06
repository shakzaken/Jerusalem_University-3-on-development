


import React, { Component } from "react";

export default class user_row extends Component {
  render() {
    return (
        <tr>
          <td>
            <img
              className="user-image"
              src={this.props.user.image.body}
              alt="user"
            />
          </td>

          <td>
            {this.props.user.first_name} {this.props.user.last_name}
          </td>
          <td className ="hide-on-phone">{this.props.user.email}</td>
          <td className ="">{this.props.user.role} </td>
          <td className ="hide-on-phone"> {this.props.user.id} </td>

          <td>
            <a
              className="delete-link"
              onClick={() => this.props.deleteUser(this.props.user.id)}>
              <i className="fa fa-trash delete-icon" />
            </a>
          </td>
        </tr>
    );
  }
}
