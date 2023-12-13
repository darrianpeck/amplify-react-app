import './App.css';
import movies, {noMovies} from './movies';
import {Fragment} from 'react';
import {MoviePreview} from "./MoviePreview";
import {useState} from 'react';


function App() {
  const [currentMovie, setCurrentMovie] = useState(null)
  return (
    <div className={'container'}>

      <div className={'heading'}>
        <h1 className={'title'}>Movies</h1>
      </div>

      <div className={'movieContainer'}>
        {
          movies.map((_movie, index)=> { //don't have to use index, but we might want to
            return (
              <MoviePreview 
                movie={_movie} 
                key={_movie.title}
                onClick={()=>setCurrentMovie(_movie)}
              />
            )
          })
        }
      </div>

      <div className='currentMovieStyle'>
        {
          currentMovie ?
          <>
            <p>{currentMovie.title}</p>
            <p>{currentMovie.director}</p>
            <p>{currentMovie.rating}</p>
            <img src={currentMovie.posterUrl} width={"200px"} alt={"movie poster"}/><br></br>
            <button className={'buttonStyle'} onClick={()=> setCurrentMovie(null)}>Hide Movie</button>
          </>
          :
          <p>Click on a 'More Info' button to see more about the movie</p>
        }
      </div>
    </div>
  );
}

export default App;
