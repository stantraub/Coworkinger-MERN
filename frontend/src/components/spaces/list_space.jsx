import React, { useState } from 'react';

class ListSpace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      // city: "",
      // state: "",
      // zipcode: "",
      // description: "",
      email: "",
      cost: "",
      phone: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let space = {
      name: this.state.name,
      address: this.state.address,
      // city: this.state.city,
      // state: this.state.state,
      // zipcode: this.state.zipcode,
      // description: this.state.description,
      email: this.state.email,
      cost: this.state.cost,
      phone: this.state.phone
    };

    // console.log(formData)

    this.props.createSpace(space)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"
            />
            <input
              type="textarea"
              value={this.state.address}
              onChange={this.update("address")}
              placeholder="Address"
            />
            <input
              type="textarea"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <input
              type="textarea"
              value={this.state.cost}
              onChange={this.update("cost")}
              placeholder="Cost"
            />
            <input
              type="textarea"
              value={this.state.phone}
              onChange={this.update("phone")}
              placeholder="Phone"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default ListSpace;