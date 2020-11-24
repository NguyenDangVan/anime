import React from "react";
import { Link } from "react-router-dom";

class Movie extends React.Component {
	constructor(props) {
    super(props);
    this.state = { movie: { title: "" } };
  }

	componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ movie: response }))
      .catch(() => this.props.history.push("/movies"));
  }

  render() {
    const { movie } = this.state;
  
  }
}

export default Movie;