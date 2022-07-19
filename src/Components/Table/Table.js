import React from "react";
import { Link } from "react-router-dom";
import "./Table.scss";

function Table({ name, email, phone, linkedInUrl, resumeUrl, key }) {
  return (
    <tr key={key} className="table__row">
      <td className="table__data">
        <h4>{name}</h4>
        <h4
          className="dashboard__main-text"
          onClick={(e) => window.open(`${resumeUrl}`)}
        >
          <Link className="dashboard__main-link">Resume</Link>
        </h4>
      </td>
      <td className="table__data table__data--contacts">
        <h4>{phone}</h4>
        <h4
          className="dashboard__main-text"
          onClick={(e) => window.open(`mailto: ${email}`)}
        >
          <Link className="dashboard__main-link">{` ${email}`}</Link>
        </h4>

        <h4
          className="dashboard__main-text"
          onClick={(e) => window.open(`${linkedInUrl}`)}
        >
          <Link className="dashboard__main-link">LinkedIn</Link>
        </h4>
      </td>
    </tr>
  );
}

export default Table;
