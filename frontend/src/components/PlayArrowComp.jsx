import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const useStyle = makeStyles({
  
   arrowicon: {
    fontSize:"100px",
    border: "1px solid #fff",
    borderRadius: "50%",
    margin: "auto",
    textAlign: "center",
  
  },
});



function PlayArrowComp() {
  const classes = useStyle();
  
  return <PlayArrowIcon className={classes.arrowicon}></PlayArrowIcon>;

}
export default PlayArrowComp