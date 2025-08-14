import React, { use, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'



const Player = () => {

const {id}  = useParams();
// State to hold the video data
const navigate = useNavigate();
// State to hold the video d


const [apiData, setApiData] = useState({
  name: '',
  key: '',
  published_at: '',
  typeof: ''
});
// Reference to the card list container 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2E1ZWM5OGY5OGEyZDZmNjA3MjAzMDdkMDU0OTIwNyIsIm5iZiI6MTc1NDczNTY0OC41NTEsInN1YiI6IjY4OTcyNDIwM2IyYmU4MjU2YjhlYTY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9zLdKjEkiF0T30MLiT4qET55ZCUZ8-Bp3Ma0FeHmFLE'
  }
};

useEffect(() => {
  // Fetching video data for the player
  // Replace '755898' with the actual movie ID you want to play

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));}, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
       <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>



      </div>
    </div>
  )
}

export default Player
