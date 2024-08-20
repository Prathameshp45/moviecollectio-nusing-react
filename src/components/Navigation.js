import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <h2 >NETFLIX</h2>
     
      <Link to="/addMovie">Add Movie</Link>
      
    </nav>
  );
}

export default Navigation;
