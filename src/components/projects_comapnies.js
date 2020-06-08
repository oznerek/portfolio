import React from 'react';
import Fade from 'react-reveal/Fade';

export default class ProjectsComapnies extends React.Component {
    render() {
        return (

        <section id="project-companies" className="projects">
            <div className="projects__container">
                <div className="page__title">
                <Fade delay={300}>
                    <h2 className="page__title-text">Customers</h2>
                </Fade>
                </div>

                <div className="companies__row">
                    <Fade delay={300}><img src="img/generali.png" className="companies__img"></img></Fade>
                    <Fade delay={300}><img src="img/mcdonalds.svg" className="companies__img"></img></Fade>
                    <Fade delay={300}><img src="img/SOS.svg" className="companies__img"></img></Fade>
                    <Fade delay={300}><img src="img/promot.svg" className="companies__img"></img></Fade>
                    <Fade delay={300}><img src="img/mentz.png" className="companies__img"></img></Fade>
                    {/* <Fade delay={300}><a  href="https://www.mentz.net"><img src="img/mentz.png" ></img></a></Fade> */}
                    <Fade delay={300}><img src="img/axa.png" className="companies__img order1"></img></Fade>
                    <Fade delay={300}><img src="img/UBB.svg" className="companies__img order2"></img></Fade>
                    <Fade delay={300}><img src="img/truestory.png" className="companies__img"></img></Fade>
                </div>
            </div>
        </section>
        )}



}