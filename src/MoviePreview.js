import { useState } from "react";
export const MoviePreview = (props) => {
    const [clicked, setClicked] = useState(false)
    const {movie, onClick} = props

    return (
        <div className={'movie'}>
          <h3>{movie.title}</h3>
          <p><b>Relase Year: </b>{movie.releaseYear}</p>

          <button className={'buttonStyle'} onClick={()=> {
                setClicked(true)
                onClick(movie)
                }}
            >
            More Info
          </button>

          <p>Clicked? {clicked ? "yes" : "no"}</p>
        </div>
    )
}