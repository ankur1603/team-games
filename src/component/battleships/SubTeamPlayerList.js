import React from 'react'

export default function SubTeamPlayerList(props) {
  return (
    <>
    <div
              className="container d-flex justify-content-evenly mt-4 text-bg-light p-3 rounded border"
              data-bs-theme="dark"
              style={{ height: "80vh" }}
            >
              <div className="componentWrapper">
                <div className="header">{props.heading}</div>
                <h4>
                <p className="mb-0">
                  {props.players.map((player, index) => {
                    return (
                      <span
                        key={`${player}_${index}`}
                        className="badge rounded-pill text-bg-primary mx-1"
                      >
                        {player}
                      </span>
                    );
                  })}
                </p>
                </h4>
              </div>
            </div>
    </>
  )
}
