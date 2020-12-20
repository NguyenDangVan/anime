import React from "react";
import { Link } from "react-router-dom";
import "../../assets/movie.scss";

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

    return (
      <div className="header_large" styles={{ backgroundImage:`url(${movie.image_url})` }}>
        <div className="custom_bg">
          <div className="single_column">
            <section className="original_header">
              <div className="poster_wrapper">
                <div className="poster">
                  <div className="image_content">
                    <img src={movie.image_url}
                      data-src={movie.image_url}
                      data-loaded="true">
                    </img>
                  </div>
                  <div className="zoom">
                    <Link to="/" className="no_click">
                      <span className="fa fa-arrows-alt"></span> Expand
                    </Link>
                  </div>
                </div>
              </div>

              <div className="content_wrapper">
                <div className="movie_title">
                  <h2>
                    <Link to="/">
                      {movie.title}
                    </Link>
                    <span className="tag release_date"> (2020)</span>
                  </h2>
                  <div className="facts">
                    <span className="release">
                      {movie.aried}
                    </span>
                    <span className="genres">
                      Action
                    </span>
                    <span className="runtime">
                      "2h 30m"
                    </span>
                  </div>
                </div>

                <ul className="movie_actions">
                  <li>
                    <a>
                      <span className="fa fa-heart-o"></span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="fa fa-bookmark-o"></span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="fa fa-star-o"></span>
                    </a>
                  </li>
                </ul>

                <div className="movie_infor mb-5">
                  <h3>Overview</h3>
                  <div className="overview">
                    <p>{movie.content}</p>
                  </div>
                </div>

                <Link to={`/movie/${movie.id}/episodes`} className="btn btn-info">
                  Watch movie
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;
