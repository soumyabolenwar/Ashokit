import React, { useEffect, useState } from "react";

function ImgCompFunc(props:any){
    const[name, setName]=useState<any>({name:"rajesh"});
    //did mount
    useEffect(()=>{
        console.log("did mount-html/css is rendered : step-B");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    },[]);
    
    //did update
    useEffect(()=>{
        console.log("did update - state/props changes: step-C")
    });

    //did update
    useEffect(()=>{
        console.log("did update - on name change")
    },[name]);


    useEffect(()=>{
        return(()=>{
        console.log("unmount-removing from DOM: step-D")
        });
    });

    return(
            <>
               {/* React.Fragment */}
                <p>{props.text}</p>
                <p>state value: {name.name}</p>
                <button onClick={()=>{
                    //setName({name:"Soumya",no:1});
                    props.changeName("welcome to soumya institute")
                    console.log("---",name);//Arita
                }}>change the name</button>
            </>
        )
    }

export default ImgCompFunc;