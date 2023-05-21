import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home";

function App() {
  return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Home />} />
					<Route path="/project/:id" element={<Home />} />
					<Route path="/contacts" element={<Home />} />
				</Routes>
			</Router>
		</div>
  );
}

export default App;
