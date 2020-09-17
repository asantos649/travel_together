import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Trip from '../components/Trip'

const useStyles = makeStyles({
    root: {
      minWidth: 250,
      height: 600,
      width: '25vw',
      marginLeft: '5vw',
      marginTop: '100px',
    },
    title: {
      fontSize: 14,
      float: 'center'
    },
    action: {
      fontSize:12
    }

});
  
export default function TripActions() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Trip Actions
          </Typography>
          <Typography className={classes.action} color="textSecondary" gutterBottom>
            Create New Trip
          </Typography>
          <Typography className={classes.action} color="textSecondary" gutterBottom>
            See past trips
          </Typography>
          <Typography className={classes.action} color="textSecondary" gutterBottom>
            About Us
          </Typography>
          <Typography className={classes.action} color="textSecondary" gutterBottom>
            User Profile
          </Typography>
          
         
        </CardContent>
        
      </Card>
    );
}

