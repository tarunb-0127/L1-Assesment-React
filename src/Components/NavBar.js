import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav
                class="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">
                    <a class="navbar-brand" href="#">Vehicle Fleet Management</a>
                    <button
                        class="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="/" aria-current="page"
                                    >Home
                                    <span class="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/form">Fill Form</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/vehicles">View Vehicles</a>
                            </li>
                           </ul>
                       
                        
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default NavBar;