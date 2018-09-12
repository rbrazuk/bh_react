import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <footer>
     <div>
       <a href="https://open.spotify.com/artist/6evha6SOvb9xMnjICcmrLA?si=_Up6WUjyQ4GZ4sYRLmc-ow"><i className="fab fa-spotify"></i></a>
       <a href="https://badheavenltd.bandcamp.com/" target="_blank"><i className="fab fa-bandcamp"></i></a>
       <a href="https://www.facebook.com/badheavenltd/" target="_blank"><i className="fab fa-facebook"></i></a>
       <a href="mailto:badheavenltd@gmail.com"><i className="far fa-envelope"></i></a>
     </div>
   </footer>

  )
}