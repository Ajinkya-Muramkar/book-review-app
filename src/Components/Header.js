
import React from 'react';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2f2626", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
                <div className="container-fluid" style={{ textAlign: "center", color: "#000000" }}>
                    <a className="navbar-brand" href="#" style={{ textAlign: "center", color: "#FFFFFF" }}>Book-Worm</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </div>
            </nav>
        </div>
    );
}
