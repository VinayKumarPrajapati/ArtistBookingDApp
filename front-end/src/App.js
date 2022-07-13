import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<TopNav />
			<Routes>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
