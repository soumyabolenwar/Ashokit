import { useEffect, useState } from "react";
import './index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getAPI } from "../restutil/indexFetch";
function Todos() {
  const[todosData, setTodosData] =useState([]);

  const getDataFromAPI=()=>{  
      getAPI('/todos').then((res:any)=>{
          setTodosData(res.data);
        })
  // Fetch implementation
  // const getDataFromAPI=()=>{  
  //   getAPI('/todos').then((e)=>e.json()).then((res)=>{
  //       // console.table(res)
  //       setTodosData(res);
  //     })
  };
  return (
    <div>
      <h1>Photos </h1>
      <button onClick={()=>getDataFromAPI()}>get Images</button>
      {todosData.map((e:{title:string,thumbnailUrl:string,id:number})=> {
        return(
      <div className="grid"><Card sx={{ maxWidth: 345 }} key={e.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={e.thumbnailUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
           {e.title}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    )
    })}
      </div>
  );
}


export default Todos;
