import React, { useState } from "react";

const MovieForm = () => {
  const [MovieName, setMovieName] = useState("");
  const [Description, setDescription] = useState("");
  
  function handlerSubmit(e){
    e.PreventDefault();
    
  }
  return (
    <form method="post" onSubmit={handlerSubmit}>
      <h1>movie :{MovieName}</h1>
      <p>Enter the movie name: </p>
      <input
        type="text"
        name="MovieName"
        onChange={(e) => setMovieName(e.target.value)}
      
      />
      <h1>{Description}</h1>
      <p>Enter the movie Description: </p>
      <input
        type="text"
        name="Description"
        onChange={(e) => setDescription(e.target.value)}
        
      />
      <br />
      <input type="submit" />
    </form>
  );
};
export default MovieForm;
