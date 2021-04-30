import '../style/style.css';
import React from 'react';
import MenuComp from "./MenuComp";
import Form from "./Form";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({

	root: {
		flexGrow: 0,
		backgroundColor: "#FBB03Bc",
		textAlign: "center",
		'@media (max-width: 50em)': { 
      textAlign: "center",
    }
	},

	right: {
		textAlign: "right",
		'@media (max-width: 50em)': { 
      textAlign: "center",
    }
	}

		
}));

const Homepage = () => {

	const classes = useStyles();
	

	return (
    <div className={classes.root}>
      <div className="border">
        <Grid container spacing={10}>
          <Grid item>
            <MenuComp />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
				
						<div className="text">
              <h2>Jelentkezés</h2>
              </div>
              <form className="Form">      
              <input className="Input" placeholder="Név" /> <br/>
              <input className="Input"placeholder="Email cím"/> <br/>
              <input className="Input" placeholder="Telefonszám"/> <br/>
              <input type="checkbox" name="aszf"/> <br/>
              <label className="aszf">Elolvastam és elfogadom az <a href="https://html-color-codes.info/colors-from-image"> Adatvédelmi Tájékoztatót </a></label> <br/>
               
              <button>Elküld</button> <br/>
              </form>    
          </Grid>
				
 
        
				




        </Grid>
      </div>
    </div>
  );
}

export default Homepage;
