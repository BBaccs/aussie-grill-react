import { useLocation } from 'react-router-dom';
import OrderButton from "./OrderButton.js";

function CtaBanner() {
    const location = useLocation();
    return (
        <>
            {!location.pathname.includes('pickup') ?
                <div className="cta-wrapper">
                    <div className="d-flex container-fluid justify-content-between align-items-center cta-banner">
                        <img loading="lazy" className="bull-cta"
                            src={process.env.PUBLIC_URL + "/assets/agGraphicElements/animals/mobile/bullFullSmall.png"} alt="" />
                        <OrderButton />
                    </div>
                </div> : null
            }
        </>
    );
}

export default CtaBanner;