import React from 'react';

const Team = (props) => {
    const players = props.players

    let budget = 0
    for (let i = 0; i < players.length; i++) {
        budget = budget + players[i].salary;
    }

    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center text-info">
                Total players
                <span className="text-danger">{players.length}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center text-info">
                Total Budget
                <span className="text-danger">{budget}</span>
            </li>
            {
                players.map(player => 
                    <li key={player.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {player.name}
                        <span className="badge bg-primary rounded-pill">{player.salary}</span>
                    </li>
                )
            }
        </ul>
    );
};

export default Team;