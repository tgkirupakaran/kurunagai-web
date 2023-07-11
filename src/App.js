import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from 'antd'
import axios from "axios";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	const getUser = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/google/auth/login/success';
			const respData  = await axios.get(url, { withCredentials: true });
			
			if(respData.data.statusCode == 200) {
				setUser(respData.data.data);
			} 
			if(respData.data.statusCode == 404)  {
				message.error(
					'Dang!!! Error occrured while Signing you in perhaps you are not a registered user. Please consider Signing Up',
					15
				)
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <MainLayout user={user} /> : <LoginLayout />}
				/>
				{/* <Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <LoginLayout />}
				/> */}
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
		</div>
	);
}

export default App;