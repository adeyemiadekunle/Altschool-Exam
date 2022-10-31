import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav  className='nav_container'>
          <div className="navbar">
            <Link to="/" end="true" className="link">
              Home
            </Link>
            <Link to="/errorboundary" className="link">
              ErrorBoundary
            </Link>
            <Link to="/pagination" className="link">
              Pagination
            </Link>
          </div>

          <div className='nav_button'>
            <div>
              <button>Sign In with Google</button>
            </div>
            <div>
              <button>Log Out</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
