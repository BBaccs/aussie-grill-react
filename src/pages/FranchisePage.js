import NavBar from '../components/NavBar';
import { franchiseNavItems } from '../data/franchiseNavItems';
import HeroImg from '../components/HeroImg';

export default function franchisePage() {
    return (
        <div>
            <NavBar navData={franchiseNavItems} />
            <HeroImg img={"freestanding.jpg"} />
        </div>
    )
}