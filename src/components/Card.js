import React from 'react';

function Card (launch) {
    const{mission_id, launch_year,launch_success, mission_name,flight_number} = launch;
    const {mission_patch_small, article_link} = launch.links
    const {land_success} = launch.rocket.first_stage.cores[0]
    return(
        <article className="shadow card">
               
                <img src={mission_patch_small} alt={mission_name} width="100" height="100"/>
                    <a href={article_link} target="_blank" rel="noreferrer" className="link holder">{mission_name}#{flight_number}</a>
                        <div className="grid block">Mission iDs: {mission_id.length > 0  && <span>{mission_id}</span>}</div> 
                        <div className="grid block">Launch Year: {launch_year && <span>{launch_year}</span>}</div> 
                        <div className="grid block">Successful Launch: {launch_success && <span>{launch_success ? 'true' : 'false'}</span>}</div>
                        <div className="grid block">Successful Landing: {land_success && <span>{land_success ? 'true' : 'false'}</span>}</div> 
                    <ul>
                </ul>
            </article>
    )
}

export default Card