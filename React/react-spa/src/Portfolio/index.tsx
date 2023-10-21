
import './index.css';
import MediaCard from '../Components/MediaCard';
import Grid from '@mui/material/Grid';
import google from '../Images/google.jpg';
import Microsoft from '../Images/Microsoft.jpg'

const trainingtypes=[
  {
    imgpath:google,
    title:'google'
  },
  {
    imgpath:Microsoft,
    title:'microsoft'
  }
]
function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <Grid container spacing={2}>
       {trainingtypes.map((e)=><Grid item xs={4}> <MediaCard obj={e}/> </Grid>)} 
      </Grid>
    </div>
  );
}

export default Portfolio;
