import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context";
import EntradaPage from "./EntradaPage/EntradaPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SaidaPage from "./SaidaPage/SaidaPage";
import SignUp from "./SignUpPage/SignUp";




export default function App() {

	const [token, setToken] = useState(undefined);

	function guardarToken(res) {
		setToken(res);
	}


  return (
	<UserContext.Provider value={{ token, setToken, guardarToken }}>
    	<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<SignUp />}/>
					<Route path="/home" element={<HomePage />} />
					<Route path="/nova-entrada" element={<EntradaPage />} />
					<Route path="/nova-saida" element={<SaidaPage />} />
				</Routes>
		</BrowserRouter>
	</UserContext.Provider>
  );
}
