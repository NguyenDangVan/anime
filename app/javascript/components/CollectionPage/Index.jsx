import React from "react";
import { Link } from "react-router-dom";

class Category extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: []
		}
	}

	componentDidMount() {
		const url = "/api/v1/movies/index";
		fetch(url).then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was bad.");
		})
		.then(response => this.setState({ movies: response }))
		.catch(() => this.props.history.push("/"));
	}

	render() {
		const { movies } = this.state;

		const allMovies = movies.map((movie, index) => (
			<div key={index} className="col-md-2 item-movie" >
        <div className="card mb-2">
          <img className="card-img-top movie-image" src={movie.image_url}
            alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{movie.title}</h4>
            <p className="card-text"></p>
            <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            	View detail
            </Link>
          </div>
        </div>
      </div>
		));

		return (
			<div className="row">
				{allMovies}
			</div>
		);
	}
}

export default Category;
