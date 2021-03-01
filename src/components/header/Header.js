import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container">
                    <a className="navbar-brand" href="/">Hero Premier League</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav justify-content-end">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/">About</a>
                        <a className="nav-link" href="/">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;