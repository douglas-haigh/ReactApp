// {name: `Peripheral Vision`,
//      artist: `Turnover`,
//      released: 2015,
//      cover: `https://upload.wikimedia.org/wikipedia/commons/1/13/Music_-_Turnover_-_Le_Poisson_Rouge_%2820791048236%29.jpg`
//     } 

import { Dougie } from "./HighestRated";
// import { HighestRated } from "./HighestRated";
import { OldNewLabel } from "./OldNewLabel";

export const Album = (props) => {
    console.log(props.cover);
    return  (
    <div className='album'> 
        <div className="album-heading"> {props.name} </div>
        <div className='artist-name'> {props.artist} </div>
        <div className='release-date'> Released in {props.released} </div>
        <OldNewLabel released={props.released}/>
        <div className='rating'> Rating: {props.rating} </div>
        <Dougie rating={props.rating} />
        <img className='album-cover' src={props.cover} alt={`album cover of ${props.name}`} />
    </div>
    )
}