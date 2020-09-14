import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    date: {
      fontSize: 12,
      float: 'center'
    },

});

function Trip(){

    

    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Trip title placeholder
          </Typography>
          <CardMedia
            className={classes.media}
            image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072753294%2F960x0.jpg%3Ffit%3Dscale"
            title="Paella dish"
        />
        <Typography className={classes.date} color="textSecondary" gutterBottom>
            Trip date placeholder
          </Typography>
         
        </CardContent>
        
      </Card>
    )
}

export default Trip