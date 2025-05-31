import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_content">
                <span className="footer_text">
                    © {new Date().getFullYear()} DevJira. All rights reserved.
                </span>
                <div className="footer_links">
                    <a href="#" className="footer_link">
                        About
                    </a>
                    <a href="#" className="footer_link">
                        Privacy
                    </a>
                    <a href="#" className="footer_link">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
