import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
    //   minWidth: 100,
    //   minHeight: 200,
      width: '30%',
      margin: '2%',
    //   marginLeft: '5%',
    //   marginTop: '100px',
    },
    title: {
      fontSize: 14,
      float: 'center'
    },

});

function Trip(){

    

    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Actions
          </Typography>
         
        </CardContent>
        
      </Card>
    )
}

export default Trip