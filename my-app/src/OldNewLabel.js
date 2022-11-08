
import { albums } from "./data";

export const OldNewLabel = (props) => {
    if (props.released > 2000)  {
        return ( <p> (Recent) </p> )}
    return (<p> (Old) </p> )
}

