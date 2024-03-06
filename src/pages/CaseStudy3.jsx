import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CaseStudy3() {
  return (
    <div className="case-study">
        <Navbar />
        <h1>Avertro Lite</h1>
        <p>Add your case study content here...</p>
        <Link to="/case-study-2">Roche</Link>
        <Link to="/case-study-1">ArtJammers</Link>
    </div>
  );
}

export default CaseStudy3;
