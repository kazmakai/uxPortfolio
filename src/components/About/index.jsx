import './About.css'

const About = () => {
    return (
        <section id="about">
            <div className='about-container'>
                <div className='about-text'>
                    <h2>About me</h2>
                </div>
                <div className='about-text'>
                    <p>
                        Over the years, I've ventured into different fields—ranging from architecture and UX/UI design to project management. 
                        Fueled by my fascination with the latest technology, I found myself coming full circle back to coding.
                    </p>
                    <p>
                        As a resourceful and adaptable software engineer, I'm always up for new challenges. 
                        I'm excited to continue refining my skills, and make a positive contribution within the right company.
                    </p>
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