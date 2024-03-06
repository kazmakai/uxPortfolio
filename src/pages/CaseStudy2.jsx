import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CaseStudy2() {
  return (
    <div className="case-study">
        <Navbar />
        <h1>Roche</h1>
        <p>Add your case study content here...</p>
        <Link to="/case-study-1">ArtJammers</Link>
        <Link to="/case-study-3">Avertro Lite</Link>
    </div>
  );
}

export default CaseStudy2;
