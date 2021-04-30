import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles({
  
   hambicon: {
    alignItems: "flex-end",
    backgroundColor: "#39B69F",
    color: "#fff",
    stroke: "fff",
    fontSize: "90px",
    position: "absolute",
    right: "10px",
    top: "10px",
    padding: "10px",
    borderRadius: "50%",
    border: "1px solid #39B69F",
    borderColor: "#39B69F",
    '&:hover': {
      backgroundColor: "#fff",
      color: "#39B69F",
      stroke: "#39B69F",
      border: "1px solid #39B69F",
    },
    /*'@media (min-width: 50em)': { 
      fontSize: "100px",
    }*/
    
  },
});



function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp