import React, { useContext, useRef, useEffect } from "react";
import playerContext from "../context/PlayerContext";
import { toast } from 'react-toastify';

export default function LoginScreen(props) {
  const player = useContext(playerContext);
  const playerState = player.state;
  const playerUpdate = player.update;

  const refName = useRef();
  const refTeamName = useRef();

    // Toast notification showing instructions
    useEffect(() => {
      toast.info(
        <div>
          <h5>Instructions for Players</h5>
          <ol>
            <li>Team name is like a superhero squad! Pick a cool name to represent your team. 🦸‍♂️🦸‍♀️</li>
            <li>Don't worry about case sensitivity – your Team name will automatically turn into uppercase when you log in! ✨</li>
            <li>Choose a fun name for yourself – it's your gaming alias! 🕹️</li>
            <li>Chat with your team and decide which game you want to play, then click on the game card to start! 🎮</li>
            <li>The first player to click on the game card becomes the admin and leads the game – they can also play too! 💪</li>
            <li>This project is open source! If you're curious to learn or want to help improve the games or add new ones, you can contribute on GitHub! 💻</li>
          </ol>
          <p>
            React UI: <a href="https://github.com/ankur1603/team-games" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            <br />
            Java Spring Boot Backend: <a href="https://github.com/ankur1603/team-games-backend" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </p>
        </div>,
        {
          position: "top-center",
          autoClose: 10000, // Toast stays for 10 seconds
          hideProgressBar: false,
          pauseOnHover: true,
          className: 'toast-info',
          style: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            border: '2px solid #4CAF50',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            padding: '15px',
            maxWidth: '90%', // Ensures it's mobile-friendly
            width: '450px',  // Fixed width for desktop
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        }
      );
    }, []);

  const handleClick = () => {
    const name = refName.current.value.trim();
    const teamName = refTeamName.current.value.trim();
    if (!teamName) {
      toast.warning("Please enter your Team Name");      
    } else if (!name) {
      toast.warning("Please enter your Name");
    } else {
      playerUpdate(name, "name");
      playerUpdate(teamName.toUpperCase(), "teamName");
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundImage: "url('/path-to-background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Subtle overlay
            zIndex: 1,
          }}
        ></div>

        <div
          className="card shadow-lg border-0"
          style={{
            maxWidth: "400px",
            width: "90%",
            zIndex: 2,
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div
            className="card-header text-center text-bg-primary"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #4b79a1, #283e51)",
              color: "#fff",
            }}
          >
            Team Games Login
          </div>
          <div className="card-body p-4 bg-light">
            <form>
              <div className="mb-3">
                <label htmlFor="teamName" className="form-label">
                  Team Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teamName"
                  placeholder="Enter your Team name"
                  defaultValue={playerState.teamName}
                  ref={refTeamName}
                  tabIndex="1"
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="playerName" className="form-label">
                  Player Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="playerName"
                  placeholder="Enter your name"
                  defaultValue={playerState.name}
                  ref={refName}
                  tabIndex="2"
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  tabIndex="3"
                  onClick={handleClick}
                  style={{
                    borderRadius: "8px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Let the Fun Begin!
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center bg-secondary text-white">
            <small>Enjoy the game responsibly!</small>
          </div>
        </div>
      </div>
    </>
  );
}