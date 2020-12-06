import React from "react";
import { Link } from "react-router-dom";
import "../assets/new_movie.scss";

class NewMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_date: ""
      content: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  const onChange => (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { movie } = this.state;

    return (

    )
  }
}

export default NewMovie;
