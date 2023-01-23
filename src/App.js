import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context";
import EntradaPage from "./EntradaPage/EntradaPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SaidaPage from "./SaidaPage/SaidaPage";
import SignUp from "./SignUpPage/SignUp";
// import dotenv from "dotenv"




export default function App() {

	// dotenv.config()	
	// const REACT_APP_API_URL = process.env.REACT_APP_BASE_URL;
	// const tokenOnLS = localStorage.getItem("token");
	const [token, setToken] = useState(undefined);

	function guardarToken(res) {
		setToken(res);
		// localStorage.setItem("token", token);
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

{/* <UserContext.Provider value={{token, setToken, guardarToken, user, setUser, guardarUser}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TelaEntrada />} />
					<Route path="/cadastro" element={<TelaCadastro />}/>
					<Route path="/subscriptions" element={<TelaPlanos />} />
					<Route path="/subscriptions/:idPlano" element={<Plano />} />
					<Route path='/home' element={<TelaHome />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider> */}
