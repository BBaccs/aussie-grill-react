import { useLocation, Link } from 'react-router-dom';

function CtaBanner() {
    const location = useLocation();
    return (
        <div className="cta-wrapper">
            <div className="d-flex container-fluid justify-content-between align-items-center cta-banner">
                <img loading="lazy" className="bull-cta"
                    src={process.env.PUBLIC_URL + "/assets/agGraphicElements/animals/mobile/bullFullSmall.png"} alt="" />
                {location.pathname.includes('catering') 
                    ? <a href="https://www.ezcater.com/brand/pvt/aussie-grill" target="_blank"
                        className="btn btn-primary cta-primary">Order Catering</a>
                    : <Link to="/pickup" className="btn btn-primary cta-primary">Order now</Link>
                }
            </div>
        </div>
    );
}

export default CtaBanner;