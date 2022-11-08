
import logo from './logo.svg';
import './App.css';
import { Album } from './Album';
import { albums } from './data';


const album = albums[0];

export default function App() {
  return (
    <div>
      <h1> Mis álbumes favoritos </h1>
    {albums.map( (album) => {
      return (
      <Album 
        name={album.name} 
        artist={album.artist} 
        released={album.released} 
        cover = {album.cover} 
        rating = {album.rating} />
      )})}
    </div>
    )
  }


