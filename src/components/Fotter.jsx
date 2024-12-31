import React from "react";
import '../css/Fotter.css'


function Footer() {
    return (
        <>
            <div className="footer">
                <div id="first">
                    <img src="https://zerodha.com/static/images/logo.svg" width="140" alt="" />
                    <pre>
                        {`© 2010 - 2024, Zerodha Broking Ltd.
All rights reserved.`}
                    </pre>
                    <img src="https://zerodha.com/static/images/x-twitter.svg" alt="" width="24"></img>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img src="/images/fac.png" alt="img" width="24" />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img src="/images/instagram.png" alt="img" width="24" />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img src="/images/link.png" alt="img" width="24" />
                    <hr></hr>
                    <img src="https://zerodha.com/static/images/youtube.svg" alt="" width="26" />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img src="https://zerodha.com/static/images/whatsapp-logo.svg" alt="" width='21' />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img src="/images/tele.png" alt="" width="26" />
                </div>
                <div id="second">
                    <ul id="sul">
                        <li id="l1">Company</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Referral programme</li>
                        <li>Careers</li>
                        <li>Zerodha.tech</li>
                        <li>Press & media</li>
                        <li>Zerodha Cares (CSR)</li>
                    </ul>
                </div>
                <div id="third">
                    <ul id="tul">
                        <li id="sup">Support</li>
                        <li>Contact us</li>
                        <li>Support portal</li>
                        <li>Z-Connect blog</li>
                        <li>List of charges</li>
                        <li>Downloads & resources,</li>
                        <li>Videos</li>
                        <li>Market overview</li>
                        <li>How to file a complaint?</li>
                        <li>Status of your complaints</li>
                    </ul>
                </div>
                <div id="four">
                    <ul id="ful">
                        <li id="acc">Account</li>
                        <li>Open an account</li>
                        <li>Fund transfer</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer