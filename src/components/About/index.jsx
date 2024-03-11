import './About.css'

const About = () => {
    return (
        <section id="about">
            <h2>About me</h2>
            <div className='about-container'>
                <div className='about-text'>
                    <img src="assets/images/home/yourstruly.jpg" alt="Yours truly" className='me' />
                </div>
                <div className='about-text'>
                    <p>
                        Throughout my career, I've explored diverse fields, spanning from architecture and coding to project management.
                        Driven by my fascination with technology and design, I've returned full circle to my passion for UX/UI design.
                    </p>
                    <br />
                    <p>
                        As a versatile and adaptable designer, I thrive on tackling new challenges.
                        I am committed to continually refining my skills and making meaningful contributions within the right company.
                    </p>
                    <br />
                    <p>
                    My toolkit:
                    </p>
                    <ul className='skills-container'>
                        <li><img src="assets/images/home/logos/figma-original.svg" alt="Figma" />Figma</li>
                        <li><img src="assets/images/home/logos/Adobe_Creative_Cloud_rainbow_icon.svg" alt="Adobe Creative Suite" />Adobe Creative Suite</li>
                        <li><img src="assets/images/home/logos/html5-plain.svg" alt="HTML5" />HTML5</li>
                        <li><img src="assets/images/home/logos/css3-plain.svg" alt="CSS3" />CSS3</li>
                        <li><img src="assets/images/home/logos/javascript-plain.svg" alt="JavaScript" />JavaScript</li>
                        <li><img src="assets/images/home/logos/react-original.svg" alt="React" />React</li>
                        <li><img src="assets/images/home/logos/tailwindcss-plain.svg" alt="ailwind" />Tailwind</li>
                        <li><img src="assets/images/home/logos/materialui-plain.svg" alt="MUI" />MUI</li>
                    </ul>
                    {/* <p>
                    Besides coding, I enjoy cruising on my Penny board, learning Japanese and organizing events with my Urban sketching Meetup group.
                    </p> */}
                </div>
            </div>
        </section>
        
    );
}

export default About;