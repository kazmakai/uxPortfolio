import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p>Designed &#38; developed by Kye Choong 2024</p>
                <h4>kyecdesign@gmail.com</h4>
                <div className='socials-container'>
                    <a href="https://github.com/kazmakai" target="_blank" className='navlink'><h4>github</h4></a>
                    <a href="https://www.linkedin.com/in/kye-c-170607145/" target="_blank" className='navlink'><h4>linkedin</h4></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;