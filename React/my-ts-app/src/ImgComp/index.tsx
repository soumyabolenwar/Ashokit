import React from "react";

class ImgComp extends React.Component <any, any>{
    constructor(props:any){  // Initialization
        super(props);
        this.state={name:"arita"};
        console.log("constructor:step-A")
    }
    componentDidMount(): void {
        console.log("did mount-html/css is rendered : step-B");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        console.log("did update - state/props changes: step-C")
    }
    componentWillUnmount(): void {
        console.log("unmount-removing from DOM: step-D")
    }
    render(){
        console.log("rendering : step-E");
        return(
            <>
               {/* React.Fragment */}
                <p>{this.props.text}</p>
                <p>state value: {this.state.name}</p>
                <button onClick={()=>{
                    this.setState({name:"Soumya",no:1},()=>{
                        console.log("updated",this.state.name);//Soumya
                    });
                    console.log(this.state.name);//Arita
                }}>change the name</button>
            </>
        )
    }
}
export default ImgComp;