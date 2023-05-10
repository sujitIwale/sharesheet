import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="flex flex-row gap-1">
                <li className="">
                    Made with <i className="fa-solid fa-heart text-red"></i> By{" "}
                    <a href="https://www.github.com/sujitIwale" target="_blanck">
                        <strong>Sujit Iwale</strong>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/sujitIwale/shareSheet"
                        target="_blanck"
                    >
                        Star on <i className="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
