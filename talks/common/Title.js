import React from "react";

export const Title = ({ stage, proposal, description, repository }) => (
  <div className="wrap">
    <div className="content-left">
      <h1>{proposal}</h1>
      <p className="text-intro">{description}</p>
      <ul className="description">
        <li>
          <strong>Stage</strong>: {stage}
        </li>
        <li>
          <strong>Repository</strong>:{" "}
          <a href={repository.url} target="_blank" rel="noopener noreferrer">
            {repository.name}
          </a>
        </li>
        <li>
          <strong>Date</strong>: 2019/10/09
        </li>
        <li>
          <strong>#tc39_study</strong>: TC39 Proposals LT 大会
        </li>
      </ul>
    </div>
  </div>
);
