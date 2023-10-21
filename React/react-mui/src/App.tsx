import './App.css';
import Student from './Student';
import { TStudent } from './types/TStudent';
import Post from './Post';
import Todos from './Todos';

function App() {
  let no:number=10;
  let studentObj:TStudent[]=[
    {
      name:"Soumya",
      isPassed:true,
      no:123
    },
    {
      name:"om",
      isPassed:true,
      no:124
    },
    {
      name:"manoj",
      isPassed:true,
      no:124
    }
  ]
  return (
    <div>
      <h1> Typescript </h1>
      {/* <Student obj={studentObj} name="Soumya"/> */}
      {/* <Post/>  */}
      <Todos/>
    </div>
  );
}

export default App;
