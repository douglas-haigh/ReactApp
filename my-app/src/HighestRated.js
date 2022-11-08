import { albums } from './data'

export function HighestRated() { 
    let value = 0;
    for (let album of albums) {
        console.log(album);
        if (album.rating > value) {value = album.rating}
    }
    return value 
}

export const Dougie = (props) => {
    if (props.rating === HighestRated()) {
        return ( <p> Highest rated album! </p> )} 
    }
    



