import { Component } from "react";

//props sera iterable

export default class Historial extends Component {
 
    render() {
        return (
            <div className="opcion">
            {this.props.arregloH.map((item,index)=>{
             return <span className="opcion" key={index +"k"}><button  onClick={()=>this.props.vuelta(index+1)}>{index+1}</button>{item}</span>
            })}
            </div>
        )
    }
}