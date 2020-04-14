import React, { useState } from 'react';
import './list_space.css'

class ListSpace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      file: null,
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

    let formValues = {
      name: this.state.name,
      address: this.state.address,
      file: this.state.file,
      state: this.state.state,
      zipcode: this.state.zipcode,
      description: this.state.description,
      email: this.state.email,
      cost: this.state.cost,
      phone: this.state.phone,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    };

    const { createSpace, history } = this.props

    createSpace(formValues, history)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  onFileChange(event) {
    this.setState({file: event.target.files[0]})
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
        <form onSubmit={this.handleSubmit} className="list-space-form">
          <div className="input-container">
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
              value={this.state.state}
              onChange={this.update("state")}
              placeholder="State"
            />
            <input
              type="textarea"
              value={this.state.zipcode}
              onChange={this.update("zipcode")}
              placeholder="Zipcode"
            />
            <input
              type="textarea"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Description"
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
            <input
              type="textarea"
              value={this.state.latitude}
              onChange={this.update("latitude")}
              placeholder="Latitude"
            />
            <input
              type="textarea"
              value={this.state.longitude}
              onChange={this.update("longitude")}
              placeholder="Longitude"
            />
            <h5>Add an Image</h5>
            <input 
              onChange={this.onFileChange.bind(this)}
              type="file" 
              accept="image/*" />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default ListSpace;