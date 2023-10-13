/* Special Legal pages, do not optimize or add components! */
export default function CcpaPage() {
    return (
        <div className="privacy-page landing-page landing-content-wrapper">
            <div>
                <h1 className="privacy-h1 text-center landing-subheading">
                    BLOOMIN’ BRANDS, INC.
                    <span className="privacy-h1 landing-subheading d-block"
                    >CALIFORNIA PRIVACY NOTICE</span>
                </h1>
                <p className="text-center mb-1">
                    <b>Effective Date:</b> <time datetime="2020-01-01">January 1, 2020</time>
                </p>
                <p className="text-center">
                    <b>Last Updated:</b> <time datetime="2020-01-01">July 8, 2020</time>
                </p>
            </div>

            <div className="privacy-grid">
                <div className="left-column mx-auto">
                    <nav className="d-flex flex-column">
                        <ul className="xxl-buttons p-0 m-0">
                            <li>
                                <a
                                    className="btn btn-primary"
                                    href="./../privacyPolicy/privacyPolicy"
                                >Privacy Policy</a>
                            </li>
                            <li>
                                <a className="btn btn-primary" href="./../privacyPolicy/ccpa"
                                >California Privacy Notice</a>
                            </li>
                            <li>
                                <a
                                    className="btn btn-primary"
                                    href="./../privacyPolicy/accessibilityStatement"
                                >Accessibility Statement</a>
                            </li>
                            <li>
                                <a
                                    className="btn btn-primary"
                                    href="./../privacyPolicy/termsAndConditions"
                                >Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="right-column mr-4">
                    {/* <!--privacy policy content section--> */}
                    <div className="privacy-policy-wraper">
                        {/* <!--privacy policy content section--> */}
                        <div className="privacy-policy-content">
                            <p>
                                This California Privacy Notice (“<strong>Notice</strong>”) applies
                                to “<strong>Consumers</strong>” as defined by the California
                                Consumer Privacy Act (“<strong>CCPA</strong>”) as a supplement to
                                other privacy policies or notices issued by Bloomin’ Brands, Inc.
                                (“<strong>Bloomin’</strong>” “<strong>us</strong>”
                                “<strong>we</strong>” <strong>our</strong>”). In the event of a
                                conflict between any other Bloomin’ policy, statement, or notice and
                                this Notice, this Notice will prevail as to California Consumers and
                                their rights under the CCPA.
                            </p>
                            <p>
                                In accordance with the CCPA’s requirements, this Notice covers the
                                calendar year 2020 and describes our collection, use, disclosure,
                                and “<strong>Sale</strong>” of California Consumers’ “<strong
                                >Personal Information</strong>” or “<strong>PI</strong>” as defined by the CCPA, as well as the
                                rights California Consumers have under the CCPA. Terms defined in
                                the CCPA that are used in this Notice have the same meanings as in
                                the CCPA.
                            </p>
                            <p>
                                Consistent with the CCPA, job applicants, current and former
                                employees and contractors, and subjects of certain
                                business-to-business communications acting solely in their capacity
                                as representatives of another business, are not considered Consumers
                                for purposes of this Notice or the rights described herein.
                            </p>
                            <h2 className="privacy-policy-sub-text">
                                COLLECTION AND USE OF PERSONAL INFORMATION
                            </h2>
                            <p>
                                We collect PI about California Consumers as described in the table
                                below.
                            </p>
                            {/* <!-- Table --> */}
                            <div className="table-wrapper">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Category</th>
                                            <th scope="col">Examples of PI Collected</th>
                                            <th scope="col">Sources of PI</th>
                                            <th scope="col">Purposes for PI Collection</th>
                                            <th scope="col">Categories of Recipients</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Identifiers</th>
                                            <td>
                                                Name, postal address, Internet Protocol address, email
                                                address, telephone number, MAC Address, device model, device
                                                carrier information, software version
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Direct from Consumer</li>
                                                    <li>• Cookies</li>
                                                    <li>• Web Server Logs</li>
                                                    <li>• Connecting to Restaurant WiFi</li>
                                                    <li>• Downloading one of our apps</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        • Facilitating and personalizing your user experience
                                                    </li>
                                                    <li>• Responding to your requests, inquiries</li>
                                                    <li>• Processing your transactions</li>
                                                    <li>• Enabling delivery orders</li>
                                                    <li>• Communicating or marketing to you</li>
                                                    <li>• Conducting contests and processing prizes</li>
                                                    <li>
                                                        • Monitoring and analyzing trends, usage, and activities
                                                        of visitors and users of the Site
                                                    </li>
                                                    <li>
                                                        • Improving the Site (e.g. bug fixes and repairing app
                                                        crashes)
                                                    </li>
                                                    <li>
                                                        • Complying with applicable laws, regulations, or legal
                                                        process as well as industry standards and our company
                                                        policies
                                                    </li>
                                                    <li>
                                                        • Preventing, investigating, identifying, or taking any
                                                        other action with regard to any suspected or actual
                                                        fraudulent or illegal activity, or activity that
                                                        violates our policies
                                                    </li>
                                                    <li>• Management of our customer loyalty program.</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Ad networks</li>
                                                    <li>• Analytics and Service providers</li>
                                                    <li>• Operating systems and platforms</li>
                                                    <li>• Social networks</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Customer / Individual Records</th>
                                            <td>
                                                Name, address, telephone number, email address, subset of
                                                payment card details
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Direct from Consumer</li>
                                                    <li>• Cookies</li>
                                                    <li>• Loyalty partner</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        • Facilitating and personalizing your user experience
                                                    </li>
                                                    <li>• Responding to your requests, inquiries</li>
                                                    <li>• Processing your transactions</li>
                                                    <li>• Delivery of your orders</li>
                                                    <li>• Communicating or marketing to you</li>
                                                    <li>• Conducting contests and processing prizes</li>
                                                    <li>
                                                        • Monitoring and analyzing trends, usage, and activities
                                                        of visitors and users of the Site
                                                    </li>
                                                    <li>• Improving the Site</li>
                                                    <li>
                                                        • Complying with applicable laws, regulations, or legal
                                                        process as well as industry standards and our company
                                                        policies
                                                    </li>
                                                    <li>
                                                        • Preventing, investigating, identifying, or taking any
                                                        other action with regard to any suspected or actual
                                                        fraudulent or illegal activity, or activity that
                                                        violates our policies
                                                    </li>
                                                    <li>• Management of our customer loyalty program.</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Analytics and Service providers</li>
                                                    <li>• Operating systems and platforms</li>
                                                    <li>• Social networks</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Commercial Information / Purchase Details</th>
                                            <td>
                                                Purchase history or tendencies
                                                <br />
                                                Name, Address, email address, telephone information, payment
                                                details
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Direct from Consumer</li>
                                                    <li>• Point of Sale in Restaurant</li>
                                                    <li>• Web Analytics</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        • Facilitating and personalizing your user experience
                                                    </li>
                                                    <li>• Responding to your requests, inquiries</li>
                                                    <li>• Processing your transactions</li>
                                                    <li>• Enabling Delivery orders</li>
                                                    <li>• Communicating or marketing to you</li>
                                                    <li>
                                                        • Monitoring and analyzing trends, usage, and activities
                                                        of visitors and users of the Site
                                                    </li>
                                                    <li>• Improving the Site</li>
                                                    <li>
                                                        • Complying with applicable laws, regulations, or legal
                                                        process as well as industry standards and our company
                                                        policies;
                                                    </li>
                                                    <li>
                                                        • Preventing, investigating, identifying, or taking any
                                                        other action with regard to any suspected or actual
                                                        fraudulent or illegal activity, or activity that
                                                        violates our policies; or
                                                    </li>
                                                    <li>• Management of our customer loyalty program.</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Analytics and Service providers</li>
                                                    <li>• operating systems and platforms</li>
                                                    <li>• social networks</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Internet Usage Information</th>
                                            <td>
                                                Browsing history, information regarding interactions with
                                                our website or advertisements
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        • Web analytics tool (anonymized to unique user ID)
                                                    </li>
                                                    <li>• Website Cookies</li>
                                                    <li>• Web server logs</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        • Facilitating and personalizing your user experience
                                                    </li>
                                                    <li>• Communicating or marketing to you;</li>
                                                    <li>
                                                        • Monitoring and analyzing trends, usage, and activities
                                                        of visitors and users of the Site;
                                                    </li>
                                                    <li>• Improving the Site;</li>
                                                    <li>
                                                        • Complying with applicable laws, regulations, or legal
                                                        process as well as industry standards and our company
                                                        policies;
                                                    </li>
                                                    <li>
                                                        • Preventing, investigating, identifying, or taking any
                                                        other action with regard to any suspected or actual
                                                        fraudulent or illegal activity, or activity that
                                                        violates our policies;
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>• Analytics and Service providers</li>
                                                    <li>• operating systems and platforms</li>
                                                    <li>• social networks</li>
                                                    <li>• ad networks</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Geolocation Data</th>
                                            <td>Precise physical location,</td>
                                            <td>
                                                <ul>
                                                    <li>• Direct from Consumer</li>
                                                    <li>
                                                        • Third party tools and Technology within website and
                                                        mobile application to detect IP address to determine
                                                        geolocation
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        • Facilitating and personalizing your user experience
                                                    </li>
                                                    <li>• Enabling online ordering</li>
                                                    <li>• Enabling Delivery orders</li>
                                                    <li>• Providing closest restaurant location</li>
                                                    <li>• Communicating or marketing to you</li>
                                                    <li>
                                                        • Monitoring and analyzing trends, usage, and activities
                                                        of visitors and users of the Site
                                                    </li>
                                                    <li>
                                                        • Complying with applicable laws, regulations, or legal
                                                        process as well as industry standards and our company
                                                        policies
                                                    </li>
                                                    <li>
                                                        • Preventing, investigating, identifying, or taking any
                                                        other action with regard to any suspected or actual
                                                        fraudulent or illegal activity, or activity that
                                                        violates our policies
                                                    </li>
                                                    <li>• Management of our customer loyalty program.</li>
                                                </ul>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                In addition, we may collect, use, and disclose your PI as required
                                or permitted by applicable law. We do not treat
                                “<strong>Deidentified</strong>” data or “<strong
                                >Aggregate Consumer Information</strong>” as PI, and we reserve the right to convert, or permit others to
                                convert, your PI into Deidentified data or Aggregate Consumer
                                Information. We may share your PI with certain business partners,
                                service providers, vendors (including those that facilitate
                                interest-based advertising and other advertising and marketing), and
                                other parties as described in the table above.
                            </p>
                            <h2 className="privacy-policy-sub-text">CALIFORNIA PRIVACY RIGHTS</h2>
                            <p>
                                Under the CCPA, California Consumers have certain rights which they
                                may exercise independently or through an authorized agent. CCPA
                                rights requests are subject to an identification and verification
                                process. We will not fulfill a CCPA request unless we have been
                                provided sufficient information for us to reasonably verify the
                                identity of the requestor and the validity of the request.
                            </p>
                            <p>
                                Some PI we maintain about Consumers (e.g., clickstream data) is not
                                sufficiently associated with enough PI about the Consumer for us to
                                be able to verify that it is a particular Consumer’s PI.
                                Accordingly, we will not include such information in response to
                                Consumer requests. If we cannot comply with a request, we will
                                explain the reasons in our response. You are not required to create
                                an account with us to make a verifiable request, but you may use
                                your account to do so. We will use PI provided in your request to
                                verify your identity or authority to make the request and to track
                                and document request responses, unless you also provided the PI to
                                us for another purpose.
                            </p>
                            <p>
                                Your California Consumer privacy rights are described below. To make
                                a request,
                                <a
                                    href="./../https://privacyportal-cdn.onetrust.com/dsarwebform/9922e664-67f1-43d9-a730-c990cc69808d/draft/6d28c53a-f4b2-4228-96e2-a461441e4d71"
                                    target="_blank"  rel="noreferrer"
                                >click here</a>
                                to connect with our CCPA portal and provide the following
                                information, including the nature of your request.
                            </p>
                            <ol>
                                <li>• First Name</li>
                                <li>• Last Name</li>
                                <li>• Email address</li>
                                <li>• Telephone number</li>
                                <li>• Subject: CCPA Request</li>
                            </ol>
                            <p>or call us at 866-265-0174.</p>
                            <p>
                                In order to verify your identity, you must contact us from the email
                                or phone number associated with your request. We will then follow-up
                                with an outbound communication to you where you may be required to
                                take further action to confirm your identity. Please follow the
                                instructions above and promptly respond to any follow-up inquires.
                                Once your identity has been verified, if you have requested that we
                                provide you with specific pieces of information which BBI has about
                                you, we will promptly respond.
                            </p>
                            <p>
                                For requests through an authorized agent, contact us via phone, or
                                you may send mail to:
                            </p>
                            <address>
                                Attention: Legal Counsel Bloomin’ Brands, Inc Suite 500 2202 N.
                                Westshore Blvd Tampa, FL 33607
                            </address>
                            <p>
                                Authorized agents must provide either a valid Power of Attorney or
                                proof that you have registered with the California Secretary of
                                State to act on behalf of the identified individual.
                            </p>
                            <p>
                                We may collect, use, and disclose your PI as required or permitted
                                by applicable law. Please note we are not obligated to comply with
                                Consumer requests to the extent that doing so would infringe on our,
                                or any other person’s or party’s rights, or conflict with applicable
                                law.
                            </p>
                            <h2 className="privacy-policy-sub-text">Disclosure Rights</h2>
                            <p>
                                You have the right to request that we disclose the following
                                information about your PI that we have collected and are maintaining
                                for the 12-month period prior to your request date. Consumer
                                requests of this nature may be made no more than twice in a 12-month
                                period.
                            </p>
                            <ul>
                                <li>• The categories of PI we have collected about you.</li>
                                <li>
                                    • The categories of sources from which we collected your PI.
                                </li>
                                <li>
                                    • The business or commercial purposes for collecting or Selling
                                    your PI.
                                </li>
                                <li>
                                    • The categories of third parties to whom we have shared your PI.
                                </li>
                                <li>• The specific pieces of PI we have collected about you.</li>
                                <li>
                                    • A list of the categories of PI disclosed for a business purpose
                                    in the prior 12 months, or that no disclosure occurred.
                                </li>
                                <li>
                                    • A list of the categories of PI Sold about you in the prior 12
                                    months, or that no Sale occurred. If we Sold your PI, we will
                                    explain:
                                    <ul>
                                        <li style={{marginRight: '5px'}}>
                                            • The categories of your PI we have Sold.
                                        </li>
                                        <li style={{marginRight: '5px'}}>
                                            • The categories of third parties to which we Sold PI, by
                                            categories of PI Sold for each third party.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p>
                                You have the right to obtain a transportable copy of your PI that we
                                (1) collected in the 12 months prior to the request date, and (2)
                                currently are maintaining. Please note that we retain PI for various
                                time periods in accordance with applicable law and our internal
                                recordkeeping policies and procedures.
                            </p>
                            <h2 className="privacy-policy-sub-text">“Do Not Sell” Rights</h2>
                            <p>
                                While there is not yet a consensus, data practices of third-party
                                cookies and tracking technologies associated with our websites and
                                mobile app may constitute a “Sale” of your PI as defined by the
                                CCPA. You can exercise control over browser-based cookies by
                                adjusting the settings on your browser, and mobile devices may offer
                                ad limitation choices. In addition, third party tools may enable you
                                to search for and opt-out of some of these trackers, such as the
                                Ghostery browser plug-in available at
                                <a href="./../https://www.ghostery.com/" target="_blank"  rel="noreferrer"
                                >www.ghostery.com</a>. You can learn more about your choices regarding certain kinds of
                                online interest-based advertising in our privacy policy. We do not
                                represent that these third party tools, programs or statements are
                                complete or accurate, clearing cookies or changing settings may
                                affect your choices and you may have to opt-out separately via each
                                browser and other device you use.
                            </p>
                            <p>
                                Some browsers have signals that may be characterized as do not track
                                signals, but we do not understand them to operate in that manner or
                                to represent a “do not sell” request by you; accordingly, currently
                                we do not view these signals as a do not sell request. We understand
                                that various parties are developing do not sell signals and we may
                                recognize certain such signals if we conclude such a program is
                                appropriate.
                            </p>
                            <p>
                                We do not knowingly Sell the PI of Consumers. All consumers,
                                regardless of age, may opt out of our promotional emails by clicking
                                the ‘unsubscribe’ link on each of our brand emails.
                            </p>
                            <h2 className="privacy-policy-sub-text">Deletion Rights</h2>
                            <p>
                                Except to the extent we have a basis for retention under CCPA, you
                                may request that we delete your PI that we have collected directly
                                from you and are maintaining. Our retention rights include, without
                                limitation, to complete transactions and service you have requested,
                                for security purposes, for legitimate internal business purposes,
                                including maintaining business records, to comply with law, to
                                exercise or defend legal claims, and to cooperate with law
                                enforcement.
                            </p>
                            <h2 className="privacy-policy-sub-text">
                                Non-Discrimination and Financial Incentive Programs
                            </h2>
                            <p>
                                We will not discriminate against you in a manner prohibited by the
                                CCPA because you exercise your CCPA rights. However, we may charge a
                                different price or rate, or offer a different level or quality of
                                goods or services, to the extent that doing so is reasonably related
                                to the value of the applicable data. In addition, we may offer you
                                financial incentives for the collection, Sale, retention, and use of
                                your PI as permitted by the CCPA; such offers may result in
                                reasonably different prices, rates, or quality levels. The material
                                aspects of any financial incentive will be explained and described
                                in its program terms. For details of our current financial incentive
                                program and its terms, including how to opt-in or withdraw your
                                opt-in, program benefits, refer to DineRewards Terms and Conditions.
                            </p>
                            <p>
                                Please note that participating in incentive programs is entirely
                                optional; participants affirmatively opt into the program, and can
                                opt out of the program (i.e., terminate participation and forgo the
                                ongoing incentives) by following the instructions in the program’s
                                description and terms. We may add or change incentive programs
                                and/or their terms by posting a notice on the program descriptions
                                and terms linked to above, so check them regularly.
                            </p>
                            <h2 className="privacy-policy-sub-text">Other California Notices</h2>
                            <p>
                                California’s “Shine the Light” law permits California residents to
                                request certain information regarding our disclosure of PI to third
                                parties for their own direct marketing purposes.
                            </p>
                            <p>
                                We do not share personal information with third parties for their
                                direct marketing purposes without either obtaining your consent or
                                giving you the ability to opt-out. If you are a California resident,
                                you may request information about our compliance with the Shine the
                                Light law by contacting us at
                                <a href="./../mailto:privacy@bloominbrands.com"
                                >privacy@bloominbrands.com</a>
                                or by sending a letter to
                            </p>
                            <address>
                                Attention: Legal Counsel Bloomin’ Brands, Inc. Suite 500 2202 N.
                                Westshore Blvd Tampa, FL 33607
                            </address>
                            <p>
                                Any such request must include “California Privacy Rights Request” in
                                the first line of the description and include your name, street
                                address, city, state, ZIP code, email address and telephone number.
                                Please note that we are only required to respond to one request per
                                customer each year, and we are not required to respond to requests
                                made by means other than through this email address or mail address.
                            </p>
                            <p>
                                <strong
                                >Please note that “Shine the Light” rights and CCPA rights are
                                    established under different legal regimes and must be exercised
                                    separately.</strong>
                            </p>
                            <h2 className="privacy-policy-sub-text">CONTACT US</h2>
                            <p>
                                For more information regarding your California privacy rights, you
                                may contact us at 866-265-0174 or email us at
                                <a href="./../mailto:CAPrivacyRequest@bloominbrands.com"
                                >CAPrivacyRequest@bloominbrands.com</a>. You may also write to us at:
                            </p>
                            <address>
                                Attention: Legal Counsel Bloomin’ Brands, Inc. 2202 N. Westshore
                                Blvd Suite 500 Tampa, FL 33607
                            </address>
                        </div>
                    </div>
                    {/* <!-- End ^^ of privacy policy content section --> */}
                </div>
            </div>
        </div>
    )
}