export default function AccessibilityPage() {
    return (
        <div className="privacy-page landing-page landing-content-wrapper">
            <div>
                <h1 className="privacy-h1 text-center landing-subheading">WEB ACCESSIBILITY STATEMENT</h1>
            </div>
            <div className="privacy-grid">
                <div className="left-column mx-auto">
                    <nav className="d-flex flex-column">
                        <ul className="xxl-buttons p-0 m-0">
                            <li>
                                <a className="btn btn-primary"
                                    href="./../privacyPolicy/privacyPolicy.html">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="btn btn-primary"
                                    href="./../privacyPolicy/ccpa.html">California Privacy Notice</a>
                            </li>
                            <li>
                                <a className="btn btn-primary"
                                    href="./../privacyPolicy/accessibilityStatement.html">Accessibility
                                    Statement</a>
                            </li>
                            <li>
                                <a className="btn btn-primary"
                                    href="./../privacyPolicy/termsAndConditions.html">Terms &amp;
                                    Conditions</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="right-column mr-4">
                    {/* <!--privacy policy content section--> */}
                    <div className="privacy-policy-wraper">
                        <div className="privacy-policy-content">
                            <h2 className="privacy-policy-section-header">General</h2>
                            <p>Bloomin’ Brands, Inc. is committed to facilitating and improving the accessibility and
                                usability
                                of its websites (www.bloominbrands.com; www.outback.com; www.carrabbas.com;
                                www.bonefishgrill.com; www.flemingssteakhouse.com; and www.dine-rewards.com.) Bloomin’
                                Brands
                                strives to ensure that its website services and content are accessible to persons with
                                disabilities, including users of screen reader technology. To accomplish this, Bloomin’
                                Brands
                                has engaged UsableNet, Inc., a leading web accessibility/usability consultant to help test,
                                remediate and maintain our websites in-line with the technical standards of the Web Content
                                Accessibility Guidelines (WCAG) developed by the World Wide Web Consortium Web Accessibility
                                Initiative, which also brings the websites into technical conformance with the Americans
                                with
                                Disabilities Act of 1990.
                            </p>
                            <h3 className="privacy-policy-sub-text">Contact Us</h3>
                            <p>If, at any time, you have specific questions or concerns about the accessibility or usability
                                of any particular web page on this website, please contact us at <a className="standard-link"
                                    href="./../mailto:compliance@bloominbrands.com">compliance@bloominbrands.com</a> or
                                <a href="tel: 1-866-886-1346">1-866-886-1346</a>. If you encounter any accessibility/usability issues, please be sure to
                                specify
                                the web page and nature of the issue in your email and/or phone call, and we will make all
                                reasonable efforts to make that page or the information contained therein accessible to you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}