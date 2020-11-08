import React from 'react';
import { Button, UncontrolledCarousel } from 'reactstrap';
import { ButtonContent } from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const items = [
  {
    src:'img/IMG-3.jpg',
    header: '',

    altText: '',
    caption: '',
    key: '1',

    
  },
  {
    src:'img/IMG6.jpg', 
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'img/IMG-3.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '3',
   
  
  },
  {
    src: 'img/IMG5.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '3',
   
  
  }
];


const Home = () => 
<div>
    
<Grid container spacing={2}>

  <Grid item xs={6} >
  <br></br>
  <div>
  
  <Card style={{backgroundColor:'#1d7055',height:690}} >
      <CardContent  >
      
        <Typography style={{color:'#b7c4c0',margin:90,fontSize:50}}>
    Real Honey!! Real Goodness!!
        </Typography>
       
        <Typography  color="textSecondary" style={{color:'',margin:60,marginLeft:190,fontStyle:"italic" }}>
        <h1>~Direct From The Forest~</h1>
          <h2></h2>
        </Typography>
        <Typography variant="body2" component="p">
         
          <br />
        
        </Typography>
      </CardContent>
      <CardActions style={{marginLeft:255}} >
    <Link to="/productlist"> <Button size="large" style={{width:300, height:80,borderRadius:10}}><h3>Shop now</h3></Button> </Link>
      </CardActions>
    </Card>
</div>
  



  </Grid>
  <Grid item xs={6} >
      <br></br>
  <div >
<UncontrolledCarousel items={items} />

</div>

  </Grid>
  
</Grid>
{/* <div><div>
<Grid container spacing={2}>

<Card style={{backgroundColor:'#1d7055',height:100}} >
      <CardContent  >
      
        <Typography style={{color:'#b7c4c0',margin:10,fontSize:50}}>
    Real Honey!! Real Goodness!!
        </Typography>
       </CardContent>
       </Card>
    </Grid>
    </div>
</div> */}
</div>


export default Home;

