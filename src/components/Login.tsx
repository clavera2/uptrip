import React, {useState} from "react";
import "./Login.css";
import {Link} from "react-router-dom";
import { NavBar } from "./NavBar";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent page refresh

        // Simple validation
        if (!email || !password) {
            setError("Please fill in all the fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // If everything is valid
        setError(""); // Clear any existing error messages
        alert("Thanks for signing in!");
    };
    return (
        <>
        <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
        <div className="login-container">
        <div className="login-box">
            <h3>Welcome Back, <br />UpTripper!</h3>
            {error && <div className="error-message">{error}</div>} {/* Show error if it exists */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="InputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail1"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="InputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="Check1"
                        />
                        <label className="form-check-label" style={{ textAlign: 'left' }} htmlFor="Check1">
                            Remember Me
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <br />
                    <br />
                </form>
                <div className="additional-links">
                    <a href="#">Forgot Password?</a> | <Link to="/signup"><a href="#">Sign Up</a> </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent page refresh

        // Simple validation
        if (!email || !password) {
            setError("Please fill in all the fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // If everything is valid
        setError(""); // Clear any existing error messages
        alert("Thanks for signing in!");
    };
    return (
        <>
        <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
        <div className="login-container">
        <div className="login-box">
            <h1>Sign Up!</h1>
            {error && <div className="error-message">{error}</div>} {/* Show error if it exists */}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="InputEmail1">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputEmail1"
                        placeholder="Enter first name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="InputEmail1">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputEmail1"
                        placeholder="Enter last name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="InputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail1"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="InputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="InputPassword1"
                        placeholder="Re-type password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="Check1"
                        />
                        <label className="form-check-label" style={{ textAlign: 'left' }} htmlFor="Check1">
                            Remember Me
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" style={{ marginBottom: '10% !important'}}>
                        Submit
                    </button>
                    <br />
                    <br />
                </form>
                <div className="additional-links" style={{ marginTop: '2%'}}>
                    <a href="#">Already have an account?</a> | <Link to="/login"><a href="#">Login</a></Link>
                </div>
            </div>
        </div>
    </>
    )
}
