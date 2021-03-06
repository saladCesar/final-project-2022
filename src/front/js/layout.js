import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Planner } from "./component/planner";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Dashboard } from "./pages/dashboard";
import { Drugs } from "./pages/drugs";

import { Footer } from "./component/footer";
import { HealthCareLogin } from "./component/healthcarelogin";
import { PatientLogin } from "./component/patientlogin";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">

							<Single />
						</Route>
						<Route exact path="/healthcarelogin" component={HealthCareLogin} />
						<Route exact path="/patientlogin" component={PatientLogin} />
						<Route exact path="/planner" component={Planner} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/medications" component={Drugs} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
