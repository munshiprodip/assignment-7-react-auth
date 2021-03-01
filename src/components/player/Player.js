import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {photo, name, salary} = props.player
    return (
        <div className="card col-md-4 p-5">
            <img className="card-img-top w-100" alt="" src={photo}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">$ {salary}</p>
                <button onClick={()=>props.clickEvent(props.player)} className="btn btn-primary"> <FontAwesomeIcon icon={faPlus} /> Hire</button>
            </div>
        </div>
    );
};

export default Player;