import PlayerContext from "./PlayerContext"
import {useState, useEffect} from "react";

const PlayerState = (props) => {

    const defaultPlayer = {
        "name": null,
        "teamName": null,
        "subTeamName": null,
        "role": null
    }
    let storedPlayer = JSON.parse(localStorage.getItem('player'));
    let isLoggedIn = storedPlayer!= null && storedPlayer.state != {} 
    const [state, setState] = useState(!isLoggedIn ? defaultPlayer:storedPlayer);
    
    useEffect(() => {
        localStorage.setItem('player', JSON.stringify(state));
    }, [state]);

    const resetPlayer = () => {
        setState(defaultPlayer);
        localStorage.removeItem('player');
    }

    const update = (value, attr) => {
        setState(prevState => {
            return {
                ...prevState,
                [attr]: value
              };
        });
    }

    return (
        <PlayerContext.Provider value={{state,update, resetPlayer}}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerState;