import { useLocation, Link } from 'react-router-dom';

function OrderButton() {
    const location = useLocation();
    return (
        <div className="order-btn-wrapper">
            {location.pathname.includes('catering')
                ? <a className="btn btn-primary btn-lg mr-5" href="https://www.ezcater.com/brand/pvt/aussie-grill"
                    target="_blank" title="Opens in a new tab" rel="noopener noreferrer">Order Catering</a>
                : <Link className="btn btn-primary btn-lg mr-5" to="/pickup">Order</Link>
            }
        </div>
    );
}

export default OrderButton;