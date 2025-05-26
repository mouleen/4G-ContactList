import AssetLogo from "../assets/img/IsoLogo-github.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
	const navigate = useNavigate();
	const {store, dispatch} =useGlobalReducer()
		useEffect(()=>{
			const goToHomePage = () => navigate('/contact');
			goToHomePage(); 
		},[])

	return (
		<div className="text-center mt-5">
			<h3 className=" display-7 shadow-lg bg-dark text-info">BE YOUR OWN BYTES</h3>
			<p>
				<img className="w-25" src={AssetLogo} />
			</p>
		</div>
	);
}; 