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
      phone: "",
      file: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileUpload = event => {
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("file", this.state.file);
    formData.append("address", this.state.address);
    formData.append("email", this.state.email);
    formData.append("cost", this.state.cost);
    formData.append("phone", this.state.phone);

    // let space = {
    //   name: this.state.name,
    //   address: this.state.address,
    //   // city: this.state.city,
    //   // state: this.state.state,
    //   // zipcode: this.state.zipcode,
    //   // description: this.state.description,
    //   email: this.state.email,
    //   cost: this.state.cost,
    //   phone: this.state.phone
    // };

    this.props.createSpace(formData)
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
            <input
              label="upload file"
              type="file"
              onChange={this.handleFileUpload}
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