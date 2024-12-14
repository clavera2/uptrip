import React, {useEffect} from "react";
import {Button} from "./Button";
import {Link} from "react-router-dom";

interface NavBarProps {
  heading1?: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
  heading5?: string;
  heading6?: string;
  heading7?: string;
  heading8?: string;
}

export const NavBar = (navProp: NavBarProps) => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".navbar .dropdown");

    dropdowns.forEach((dropdown) => {
      const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");

      if (dropdownToggle && dropdownMenu) {
        // Show dropdown on hover
        dropdown.addEventListener("mouseenter", () => {
          dropdown.classList.add("show");
          dropdownToggle.setAttribute("aria-expanded", "true");
          dropdownMenu.classList.add("show");
        });

        // Hide dropdown on mouse leave
        dropdown.addEventListener("mouseleave", () => {
          dropdown.classList.remove("show");
          dropdownToggle.setAttribute("aria-expanded", "false");
          dropdownMenu.classList.remove("show");
        });
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", () => {});
        dropdown.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src="/logo.jpg"
          style={{ height: "80px" }}
          alt="Logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link dm-serif-text-regular" to="/">
                {navProp.heading1 || "Home"}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dm-serif-text-regular"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {navProp.heading2}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/destinations/japan">
                    Japan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/switzerland">
                    Switzerland
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/czech">
                    Czech
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/maldives">
                    Maldives
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations">
                    Explore all destinations
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dm-serif-text-regular"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {navProp.heading3}
              </a>
              <ul className="dropdown-menu">
              <li>
                  <Link className="dropdown-item" to="/categories">
                    All categories
                  </Link>
                </li>
                <li><hr></hr></li>
                <li>
                  <Link className="dropdown-item" to="/categories/food">
                    Food & Drinks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/adventure">
                   Adventures & Activities
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/cultural">
                    Cultural Insight
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link dm-serif-text-regular" to="/gallery">
                {navProp.heading4 || "Contact"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link dm-serif-text-regular" to="/about">
                {navProp.heading5 || "Contact"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link dm-serif-text-regular" to="/contact">
                {navProp.heading6 || "Contact"}
              </Link>
            </li>
          </ul>
          <Button text="Log in" NotHighLighted={true} />
          <Button text="Sign Up" />
        </div>
      </div>
    </nav>
  );
};