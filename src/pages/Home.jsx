import AssetLogo from "../assets/img/IsoLogo-github.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h3 className=" display-7 shadow-lg bg-dark text-info">BE YOUR OWN BYTES</h3>
			<p>
				<img className="w-25" src={AssetLogo} />
			</p>
		</div>
	);
}; 