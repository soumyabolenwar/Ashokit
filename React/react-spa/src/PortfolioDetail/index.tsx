import './index.css';
import MediaCard from '../Components/MediaCard';
import Grid from '@mui/material/Grid';
import MSProducts from '../Images/MicrosoftProductjpg.jpg';
import GoogleProduct from '../Images/googleproduct.jpg';
import { useParams } from 'react-router-dom';
const obj=[
  {
    imgpath:MSProducts,
    title:"microsoft",
    heading:"Microsoft is a vast tech company",
    subheading:"Windows : This is widely recognised product of Microsoft",
    products:{
      title:"Office Suite : This includes",
      list:[
        "Operating Systems: Windows 10 and Windows 11 for PCs, laptops, and tablets.",
        "Office Suite: Includes Word, Excel, PowerPoint, and Outlook for productivity.",
        "Cloud Services: Microsoft 365 offers Office apps and OneDrive storage.",
        "Development Tools: Visual Studio for software development and GitHub for version control.",
        "Databases: Microsoft SQL Server for data storage and retrieval.",
        "Web Browsers: Microsoft Edge, the default browser in Windows.",
        "Gaming: Xbox consoles and Xbox Game Pass subscription service.",
        "Hardware: Surface devices, including Surface Pro and Surface Laptop.",
        "usiness Solutions: Dynamics 365 for managing business operations.",
        "Cloud and AI: Azure cloud platform and Cognitive Services for AI applications."
      ]
    }
  },
  {
    imgpath:GoogleProduct,
    title:"google",
    heading:"Google is a vast tech company",
    subheading:"Gmail : This is widely recognised product of Google",
    products:{
      title:"Google Offers : This includes",
      list:[
        "Google Search: The world's most popular search engine, used for finding information online.",
        "Google Chrome: A widely used web browser known for its speed and simplicity.",
        "Android: The operating system for mobile devices, used by various smartphone manufacturers.",
        "Google Maps: A mapping service providing directions, local business information, and street views.",
        "Gmail: A popular email service with a user-friendly interface and significant storage space.",
        "Google Drive: A cloud storage service allowing users to store files, documents, and photos online.",
        "YouTube: The largest online video platform, where users can upload, share, and view videos.",
        "Google Photos: A photo and video sharing service with features like automatic backup and intelligent search.",
        "Google Assistant: A virtual assistant that uses natural language processing to answer questions and perform tasks.",
        "Google Workspace: A suite of productivity tools including Google Docs, Sheets, and Slides for collaborative work."
      ]
    }
  }
]
function PortfolioDetail() {
  const params = useParams();
  console.log(params);
  const data:any = obj.find((e)=>e.title==params.name) || {};
  return (
    <div className="Portfolio">
      <h1>Portfolio Detail</h1>
      <Grid container>
        <Grid xs={6}>
      <img src={data.imgpath}/>
        </Grid>
        <Grid xs={6}>
      <p>{data?.heading}</p>
      <p>{data?.subheading}</p>
      <p>{data?.products?.title}</p>
      <ul>
        {data?.products?.list.map((e:any)=><li>{e}</li>)}
      </ul>
    </Grid>
    </Grid>
    </div>
  );
}

export default PortfolioDetail;
