import React from 'react';
import Player from '../player/Player';

const Players = (props) => {
    const players = props.players
    return (
        <div className="row">
            {
                players.map(player => <Player player={player} clickEvent = {props.clickEvent}  key={player.id}></Player>)
            }
        </div>
    );
};

export default Players;