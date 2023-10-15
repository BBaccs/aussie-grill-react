import { HeroImg } from '../components';

export default function ContactPage() {
    return (
        <div id="contact-page" className="landing-page">
            <HeroImg img={"freestanding.jpg"} />
            <div className="container-fluid text-center landing-content-wrapper">
                <h1 className="landing-heading mb-4">Contact Us</h1>
                <div>
                    <div style={{ maxWidth: '1200px' }} className="row mt-md-4 mx-auto">
                        <div className="card legacy-card mx-auto mb-4">
                            <div className="card-body px-0 px-md-3">
                                <h2 className="card-title">BRANDON</h2>
                                <p>1.5 miles from Westfield Brandon Mall</p>
                                <p className="card-text font-small">1426 W Brandon Blvd., Brandon, FL 33511</p>
                                <p>Phone number:  <a href="tel: 813-487-9952">813-487-9952</a></p>
                            </div>
                        </div>
                        <div className="card legacy-card  mx-auto mb-4">
                            <div className="card-body">
                                <h2 className="card-title">WESLEY CHAPEL/LUTZ</h2>
                                <p>Across from the Tampa Premium Outlets</p>
                                <p className="card-text font-small">25340 Sierra Center Blvd, Lutz, FL 33559</p>
                                <p>Phone number: <a href="tel: 813-261-0140">813-261-0140</a></p>
                            </div>
                        </div>
                        <div className="card legacy-card  mx-auto mb-4">
                            <div className="card-body">
                                <h2 className="card-title">International Plaza & Bay Street</h2>
                                <p>Located in the Food Court</p>
                                <p className="card-text font-small">2223 N Westshore Blvd, Tampa, FL 33607</p>
                                <p>Phone number: <a href="tel: 813-497-7106">813-497-7106</a></p>
                            </div>
                        </div>
                        <div className="card legacy-card mx-auto mb-4">
                            <div className="card-body px-0 px-md-3">
                                <h2 className="card-title">WESTFIELD BRANDON MALL</h2>
                                <p>Located in the Food Court</p>
                                <p className="card-text font-small">459 Brandon Town Center Dr, Brandon, FL 33511</p>
                                <p>Phone number: <a href="tel: 813-402-3200">813-402-3200</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="mailto:AussieGrill@BloominBrands.com" className="btn btn-primary small-btn mt-md-3">Email US</a>
            </div>
        </div>
    )
}