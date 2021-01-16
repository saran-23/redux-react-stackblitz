import  React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {

    if(!song) {
    return <div>Choose a song </div>;
    };
      
    return <div>
        <h3>
            Details For:
        </h3>
        <p>
            Title:{song.title}
                <br></br>
            Duration:{song.duration}
        </p>

         </div>
};


const showStatus = (state) => {
   return { song:state.selectedSong}
};
 
export default  connect(showStatus)(SongDetail);

