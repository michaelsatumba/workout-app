import Gallery from "../components/Gallery";
import Poster from "../components/Poster";
import NavBar from "../components/NavBar";
export default function Home() {
    return (
        <div>
            <NavBar />
            <Poster />
            <Gallery />
        </div>
    );
}
