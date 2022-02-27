import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-name">Aniket Kumar</div>
      <div className="hero-intro">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        suscipit perspiciatis illo dolore commodi corporis repudiandae molestias
        nemo ratione, voluptas, eos magni laudantium nulla doloremque porro non.
        Culpa, optio porro.
      </div>
      <div className="hero-buttons">
        <button>one</button>
        <button>one</button>
      </div>
      <div className="hero-social">
        <div className="hero-social-left">Left</div>
        <div className="hero-social-middle">
          <img
            src="https://images.unsplash.com/photo-1645301188542-6e42abab843c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            srcset=""
          />
        </div>
        <div className="hero-social-right">Right</div>
      </div>
    </div>
  );
};

export default Hero;
