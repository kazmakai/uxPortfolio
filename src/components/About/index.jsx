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
                    I'm a UX/UI Designer and Front-end Developer with an architecture background who has worked in Melbourne and Tokyo. I specialize in crafting user-centered products that satisfy briefs and project constraints. My diverse experience and proficiency in various design software make me adaptable to different project needs and empathetic towards stakeholders.
                    </p>
                    <br />
                    <p>
                        Besides design, I enjoy skateboarding 🛹, being involved with an <a href="https://www.meetup.com/art-jammers/" target='blank'>urban sketching group</a> 🗓️🎨 that I founded and run, and learning Japanese ⛩️.
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