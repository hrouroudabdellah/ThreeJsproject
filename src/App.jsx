import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Productviewer from "./Components/Productviewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<Productviewer />
		</main>
	);
};

export default App;
