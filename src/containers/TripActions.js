import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Trip from '../components/Trip'

const useStyles = makeStyles({
    root: {
      minWidth: 250,
      minHeight: 600,
      width: '25vw',
      marginLeft: '5vw',
      marginTop: '100px',
    },
    title: {
      fontSize: 14,
      float: 'center'
    },

});
  
export default function TripActions() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Trip Actions
          </Typography>
          
         
        </CardContent>
        
      </Card>
    );
}

