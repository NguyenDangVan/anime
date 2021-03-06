import React from "react";
import { Link } from "react-router-dom";

class Movies extends React.Component {
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
			<div key={index} className="col-md-4 col-lg-4">
				<div className="card mb-4">
					<img
						src={"https://3.bp.blogspot.com/-559W_r9Abrg/VcZIkBW1vUI/AAAAAAAFg0U/WlAYTzlssTo/Con-Duong-De-Vuong.jpg"}
						className="card-img-top"
						alt={`${movie.title} image`}
					/>
					<div className="card-body">
						<h5 className="card-title">{movie.title}</h5>
						<Link to={`/movie/${movie.id}`} className="btn custom-button">
							View movie
						</Link>
					</div>
				</div>
			</div>
		));
		console.log(allMovies)

		const noMovie = (
			<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
				<h4>
				 No movie yet. Why not <Link to="/new_movie">create one</Link>
				</h4>
			</div>
		);

		return (
			<>
				<section className="jumbotron jumbotron-fluid text-center">
					<div className="container py-5">
						<h1 className=""></h1>
						<p className="lead text-muted">We've pull together</p>
					</div>
				</section>
				<div className="py-5">
					<main className="container">
						<div className="text-right mb-3">
							<Link to="/movie" className="btn custom-button">
								Create new Movie
							</Link>
						</div>
						<div className="row">
							{movies.length > 0 ? allMovies : noMovie}
							{console.log(allMovies)}
						</div>
						<Link to="/" className="btn btn-link">
							Home
						</Link>
					</main>
				</div>
			</>
		);
	}
}

export default Movies;