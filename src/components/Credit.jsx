import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Credit.css'

const Credit = () => {
    return (
        <div className="footer">
            <div className="credit" data-aos = "fade" data-aos-delay={1000}>
                <div>Built and designed by Bhaskar Saini. Inspired from Gazi Jarin.</div>
                <div>All rights reserved. ©</div>
            </div>
        </div>
    )
}

export default Credit;