import React from "react";
import { Link } from "react-router-dom";
import "../../assets/new_movie.scss";

class NewMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      original_title: "",
      image: "",
      movie_type: "",
      content: "",
      status: "upcoming"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const url = "/api/v1/movies/create";
    const { title, original_title, image, movie_type, status, content } = this.state;

    if (title.length == 0 || image.length == 0)
      return;

    const body = {
      title,
      original_title,
      movie_type,
      status,
      content: content.replace(/\n/g, "`<br> <br>`")
    };

    const token = document.querySelector("meta[name='csrf-token']").content;
    const file = event.target.image.files[0];

    const formData = new FormData();
    Object.keys(body).forEach(key => formData.append(key, body[key]));
    formData.append("image", file);

    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token
      },
      body: formData
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not OK.");
    })
    .then(response => this.props.history.push(`/movie/${response.id}`))
    .catch(error => console.log(error.message));
  }

  render() {
    const { movie } = this.state;

    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3 mb-10">
            <h2 className="font-weight-normal mb-5">
              Add new Movie
            </h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="movieTitle">
                  Movie title
                </label>
                <input
                  type="text"
                  name="title"
                  id="movie_title"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="originalTitle">
                  Original title
                </label>
                <input
                  type="text"
                  name="movie[original_title]"
                  id="movie_originl_title"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="movieType">
                  Movie type
                </label>
                <label className="radio-inline ml-3">
                  <input type="radio" name="movie_type" value="tv_series"
                    onChange={this.onChange}
                  />TV Series
                </label>
                <label className="radio-inline ml-3">
                  <input type="radio" name="movie_type" value="movie"
                    onChange={this.onChange}
                  />Movie
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="poster">Poster</label>
                <input
                  type="file"
                  name="image"
                  onChange={this.onChange}
                  className="image_tag"
                />
              </div>

              <label htmlFor="content mt-3">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="5"
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3 float-right">
                Submit
              </button>
              <Link to="/movies" className="btn btn-link mt-3">
                Back to movies
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewMovie;
