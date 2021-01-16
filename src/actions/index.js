    
 export   const selectSong = song => {   //Named export
    return{
        type: 'SONG_SELECTED',
        payload: song

    };
};

