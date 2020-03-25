import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";
import DisplayHeader from "./components/DisplayHeader";
import HeaderCategories from "./components/DisplayHeaderCategory";
import Display from './Display'
import axios from 'axios'


const App = props => {
	const dispatch = useDispatch()
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async pos => {
			const currentSession = await axios.post('http://localhost:3000/api/sessions', { location: pos.coords })
			dispatch({type: 'SET_CURRENT_SESSION', payload: currentSession.data})
			debugger
		})
	}, [])
	return (
		<>
			<DisplayHeader />
			<HeaderCategories />
			<Switch>
				<Route exact path="/" component={Display}></Route>
				<Route
					exact
					path={props.categoryName}
					component={Display}
				></Route>
			</Switch>
		</>
	);
};

export default App
