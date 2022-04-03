import { Component } from "react";

export default class Boton extends Component{

render(){
    return(
        <>
        <span className="opcion"><button className="botones" onClick={()=>this.props.eleccionC(this.props.valor)} > {this.props.valor.toUpperCase() }</button><h2 >{this.props.opcionC}</h2></span>
        </>
    )
}
}