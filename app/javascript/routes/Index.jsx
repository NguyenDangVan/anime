import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Index";
import Search from "../components/Search/Index";
import Footer from "../components/Footer/Index";
import Home from "../components/Home";
import Movies from "../components/Movie/Movies";
import Movie from "../components/Movie/Movie";
import NewMovie from "../components/Movie/NewMovie";

// const BrowserHistory = require("react-router/lib/BrowserHistory").default;

export default(
	<Router>
		<Header />
		<main>
			{/* search page  */}
			<Search />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/movies" exact component={Movies} />
					<Route path="/movie/:id" exact component={Movie} />
					<Route path="/movie" exact component={NewMovie} />
				</Switch>
		</main>
		<Footer />
	</Router>
);
