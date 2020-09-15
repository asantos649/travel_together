import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Trip from '../components/Trip'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 600,
      width: '60vw',
      marginLeft: '5vw',
      marginTop: '100px',
      padding:'2%',
    },
    title: {
      fontSize: 14,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
    },

});
  
export default function MyTripsContainer() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Active Trips
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            <Grid item xs={4}>
              <Trip />
            </Grid>
            
          </Grid>
          
         
        </CardContent>
        
      </Card>
    );
}

