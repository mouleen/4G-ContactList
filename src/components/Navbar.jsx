import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<Link to="/contact">
						<button className="btn btn-primary">Lista de contactos</button>
					</Link>
					<Link to="/addContact">
						<button className="btn btn-primary">Lista de contactos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};