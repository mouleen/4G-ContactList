import { Link } from "react-router-dom";

export const Navbar = () => {



	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://avatars.githubusercontent.com/u/202177717?v=4" alt="Logo" width="30" height="30" className="d-inline-block align-text-top rounded-3"></img>
					<span className="navbar-brand mb-0 h1 p-3 mt-2">ReactJS ejemplo GLobalReducer y Navbar básico</span>
				</Link>
				<div className="ml-auto ">
					<Link to="/contact">
						<button className="btn btn-outline-success me-2 shadow-lg">Contactos</button>
					</Link>
					<Link to="/addContact">
						<button className="btn btn-outline-success me-2 shadow-lg">Agregar contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};