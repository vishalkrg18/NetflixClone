import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import "./Auth.css";
const Register = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });

  let { email, password, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    //?firebase starts here

    try {
      setState({ loading: true })
      let userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
      toast.success('Successfully ${email} registered');
      let verifyMessage=
      console.log(firebase);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="enter email/phone number"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="enter password"
              onChange={handleChange}
              required
            />
            <div>
              <button>Sign up</button>
            </div>
            <aside className="loginDesc">
              <div className="needHelp">
                <span>
                  <input type="checkbox" name="remember" id="remember" />
                  <b> remember me</b>
                </span>
                <span>
                  <a href="/">need help</a>
                </span>
              </div>

              <footer>
                <div>
                  <i className="fab fa-facebook-f"></i>
                  Login with facebook
                </div>
                <div>
                  Already have an Account ?<Link to="/signin">Sign in</Link>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. Learn more.
                  </p>
                </div>
              </footer>
            </aside>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Register;
