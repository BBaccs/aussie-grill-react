import HeroImg from '../components/HeroImg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CareersPage() {
    return (
        <div id="careers-page" className="landing-page">
            <HeroImg img={"freestanding.jpg"} />
            <div className="container-fluid text-center landing-content-wrapper">
                <h1 className="landing-heading">Aussie Grill is now hiring!</h1>
                <h2 className="landing-subheading pb-4 pt-3 mx-auto">Featured Jobs with Aussie Grill</h2>
                <Row className='justify-content-center d-flex'>
                    <Card
                        style={{ width: '22rem', marginRight: '1.5rem', marginLeft: '1.5rem' }}
                        className="card mb-5 mr-md-4"
                    >
                        <Card.Body>
                            <Card.Title as={'h3'}>Aussies</Card.Title>
                            <Card.Text>
                                As an Aussie you will be the face of the restaurant. By ensuring that every customer is greeted with exceptional food and service, you will show why Aussie Grill is a great place to eat and work.
                            </Card.Text>
                            <a href="https://recruiting.ultipro.com/OSI1001/JobBoard/452847b5-4810-485f-929c-d0c33c18bf9e/?q=aussie+grill&o=relevance&w=&wc=&we=&wpst=" className="btn btn-primary">Apply Online</a>
                        </Card.Body>
                    </Card>

                    <Card
                        style={{ width: '22rem', marginRight: '1.5rem', marginLeft: '1.5rem' }}
                        className="card mb-5 mr-md-4"
                    >
                        <Card.Body>
                            <Card.Title as={'h3'}>Shift Manager</Card.Title>
                            <Card.Text>
                                Shift Managers at Aussie Grill set the example for our Aussies and ensure that every opportunity to WOW a customer is taken. You will be a leader in the restaurant and ensure that every shift is a success.
                            </Card.Text>
                            <a href="https://recruiting.ultipro.com/OSI1001/JobBoard/452847b5-4810-485f-929c-d0c33c18bf9e/?q=aussie+grill+shift+manager&o=relevance&w=&wc=&we=&wpst=" className="btn btn-primary">Apply Online</a>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className='justify-content-center d-flex'>
                    <Card
                        style={{ width: '22rem', marginRight: '1.5rem', marginLeft: '1.5rem' }}
                        className="card mb-5 mr-md-4"
                    >
                        <Card.Body>
                            <Card.Title as={'h3'}>Assistant General Manager</Card.Title>
                            <Card.Text>
                                The Assistant General Manager will ensure that each shift runs smoothly and help develop and maintain a culture centered around having fun, exceptional customer service, and working hard.
                            </Card.Text>
                            <a href="https://bit.ly/AG_Management" className="btn btn-primary">Apply Online</a>
                        </Card.Body>
                    </Card>
                    <Card
                        style={{ width: '22rem', marginRight: '1.5rem', marginLeft: '1.5rem' }}
                        className="card mb-5 mr-md-4 mr-5"
                    >
                        <Card.Body>
                            <Card.Title as={'h3'}>General Manager</Card.Title>
                            <Card.Text>
                                As the General Manager at Aussie Grill, you will oversee the everyday operations of the store and ensure that your Aussies are given every opportunity to succeed through effective training, coaching and leadership.
                            </Card.Text>
                            <a href="https://bit.ly/AG_Management" className="btn btn-primary">Apply Online</a>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </div>
    )
}