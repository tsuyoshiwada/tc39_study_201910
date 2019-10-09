import React from "react";

export const About = () => (
  <div className="wrap">
    <div className="cta">
      <div className="number">
        <img
          src="https://avatars0.githubusercontent.com/u/5393238?s=460&v=4"
          width={200}
          height={200}
        />
      </div>
      <div className="benefit">
        <p className="text-subtitle">About me</p>
        <h3>わだまる / tsuyoshiwada</h3>
        <p className="text-intro">
          Web Developer (CyberAgent CATS).
          <br />
          GitHub:{" "}
          <a
            href="https://github.com/tsuyoshiwada"
            target="_blank"
            rel="noopener noreferrer"
          >
            tsuyoshiwada
          </a>
          , Twitter:{" "}
          <a
            href="https://twitter.com/wadackel"
            target="_blank"
            rel="noopener noreferrer"
          >
            @wadackel
          </a>
        </p>
      </div>
    </div>
  </div>
);
