import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";

function Table({ data, columns }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <>
      <div className="main_container">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column, index) => (
                  <td
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="tooltip-container"
                  >
                    {
                      /*Cas 1 si ce sont des titres de cours */
                      column.field == "title" || column.field == "name" ? (
                        <Link className="course_link" to={`/course/${row.id}`}>
                          {row[column.field].substring(0, 20) + "..."}{" "}
                          <span className="tooltip">{row[column.field]}</span>
                        </Link>
                      ) : /* cas2 si la column s'appel statut */
                      column.field == "status" ? (
                        row[column.field].map((status, index) => (
                          <button key={index} className={status.class} disabled>
                            {" "}
                            {status.name}
                          </button>
                        ))
                      ) : /* cas 3 si la column s'appel actions */
                      column.field == "actions" ? (
                        row[column.field].map((action, index) => (
                          <button key={index} className={action.class} onClick= {action.onclick}>
                            {" "}
                            {action.name}
                          </button>
                        ))
                      ) : (
                        /*Else si aucun des conditions suivantes*/
                        row[column.field]
                      )
                    }{" "}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
