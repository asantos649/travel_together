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

    }

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
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimdobson%2F2018%2F12%2F06%2Fthe-best-caribbean-beaches-for-2019-the-ultimate-list%2F&psig=AOvVaw00GC6a9EEYyDXeixlq-tbo&ust=1600199688774000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi857DE6esCFQAAAAAdAAAAABAD"
            title="Paella dish"
        />
         
        </CardContent>
        
      </Card>
    )
}

export default Trip