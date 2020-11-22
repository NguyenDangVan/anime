import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Movies from "../components/Movies";

export default(
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/movies" exact component={Movies} />
		</Switch>
	</Router>
);