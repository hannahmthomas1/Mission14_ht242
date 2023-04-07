import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

// Just for styling
const divStyle = {
  width: '60%',
};

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  // Fetches data from the api in asp.net
  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/movies');
    const temp = await rsp.json();
    console.log(rsp);
    console.log(temp);
    setMovieData(temp);
  };

  //Calls function above
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      {/* Title */}
      <div className="text-center">
        <br />
        <br />
        <br />
        <h1 className="text-info">The Joel Hilton Movie Collection</h1>
        <br />
        <br />
      </div>
      {/* Table for list of movies */}
      <table className="table table-striped mx-auto" style={divStyle}>
        <thead className="">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
              <td>{m.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
