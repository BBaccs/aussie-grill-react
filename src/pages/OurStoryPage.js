import HeroImg from '../components/HeroImg';
import Card from 'react-bootstrap/Card';

export default function OurStoryPage() {
    return (
        <div id="our-story" className="landing-page">
            <HeroImg img={"agOurStory.jpg"} />
            <div className="container-fluid landing-content-wrapper">
                <div className="content-inner-wrapper m-auto">
                    <h1 className="landing-heading mb-4">Welcome to Aussie Grill<sup>®</sup>, where an exciting world of taste
                        adventure awaits.</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <p>Inspired by the bold flavors of Outback Steakhouse<sup>®</sup>, we are here to redefine the
                                possibilities of fast-casual dining. The first Aussie Grill opened in 2019 in Saudi Arabia,
                                followed by Hong Kong, and the U.S.</p>
                            <p>Our menu was created to be memorable and addictive with indulgent, rich, yet bright and bold
                                flavors that make taste buds come alive. Our Executive chef’s curated menu has an unmatched
                                variety and quality not seen in any other fast-casual restaurant, with sandwiches, burgers,
                                large plates, and salads that are scratch-made, prepared and delivered at amazing speed -
                                where else can you get a perfectly cooked steak in under 4 minutes?</p>
                            <p>We take great pride and care to ensure our food is prepared with the highest quality
                                ingredients, made fresh to order, and we ensure that each guest receives Aussie Grill’s
                                heartfelt hospitality.</p>
                            <p>All this is not possible without our brilliant team. At Aussie Grill we seek out passionate
                                people who want to work in an inclusive culture that celebrates oneness and individuality.
                                We work hard, play hard, and we are committed to investing in our Aussie Grill family no
                                matter where their path takes them.</p>
                        </div>

                        <div className="col-lg-6 d-block d-sm-none d-md-none">
                            <div className="card m-auto">
                                <img srcSet="assets/other/mobile/ourStoryVerticalCollageMobile.jpg" className="card-img-top"
                                    alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">Meet Our Chef</h2>
                                    <p className="card-text">Chef Efrem is the master mind behind the Aussie Grill menu. He used
                                        his knowledge of 35 years in the Restaurant Industry to create a bold, flavorful,
                                        and memorable menu that every team member would be proud to serve to a guest in
                                        their home.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 d-none d-md-block d-lg-block d-xl-block m-auto">
                            <div className="d-flex justify-content-center meet-chef-card">
                                {/* <img src="assets/other/mobile/ourStoryVerticalCollageMobile.jpg" className="card-img-top"
                                    style={{ width: '250px' }} alt="" />
                                <div className="card" style={{ maxWidth: '250px' }}>
                                    <div className="card-body no-shadow">
                                        <h2 className="card-title" style={{ fontSize: '1.3rem' }}>Meet Our Chef</h2>
                                        <p className="card-text" style={{ fontSize: '.95rem' }} >Chef Efrem is the master mind behind
                                            the Aussie Grill menu. He used his knowledge of 35 years in the Restaurant
                                            Industry to create a bold, flavorful, and memorable menu that every team member
                                            would be proud to serve to a guest in their home.</p>
                                    </div>
                                </div> */}
                                <Card style={{ maxWidth: '36rem', display: 'flex', flexDirection: 'row' }}>
                                    <Card.Img variant="top" src="assets/other/mobile/ourStoryVerticalCollageMobile.jpg" />
                                    <Card.Body>
                                        <Card.Title as="h2" style={{ fontSize: '1.3rem' }}>Meet Our Chef</Card.Title>
                                        <Card.Text style={{ fontSize: '.95rem' }}>
                                            Chef Efrem is the master mind behind
                                            the Aussie Grill menu. He used his knowledge of 35 years in the Restaurant
                                            Industry to create a bold, flavorful, and memorable menu that every team member
                                            would be proud to serve to a guest in their home.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}