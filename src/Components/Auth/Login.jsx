import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Sign in</h2>
          <form>
            <input
              type="text"
              name="email"
              placeholder="enter email/phone number"
            />
            <input
              type="password"
              name="password"
              placeholder="enter password"
            />
            <div>
              <button>Sign in</button>
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
                  New to Netflix ?<Link to="/signup">Sign up now</Link>
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

export default Login;
