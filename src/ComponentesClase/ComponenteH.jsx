import { Component } from "react";
import Data from '../components/data.json'
import Rcondicional from "./Rcondicional";
import Historial from "./Historial";

let historial;

export default class ComponenteH extends Component{
constructor(){
    super()
    this.state={
        historia: null,
        opcion: {a:null,b:null},
        id:"1",
        seleccionAnterior:null,
        historialDeOpciones:[],
        contador:1
    }
    this.eleccionH=this.eleccionH.bind(this)
    this.volver=this.volver.bind(this)
}

componentDidMount(){
    this.setState({
        historia:Data.find(item=>item.id===this.state.id).historia,
        opcion:{a: Data.find(item=>item.id===this.state.id).opciones.a,
                b: Data.find(item=>item.id===this.state.id).opciones.b}
    })
}

 eleccionH(opcion){
    let id_H=this.state.contador+1;
    id_H=id_H+opcion;
    let diapositiva=Data.find(item=>item.id===id_H);
    this.setState({
        historia:diapositiva.historia,
        opcion:{a:diapositiva.opciones.a,b:diapositiva.opciones.b},
        seleccionAnterior: opcion.toUpperCase(),
        contador:this.state.contador+1,
        historialDeOpciones: this.state.contador===1? [opcion.toUpperCase()]:[ ...this.state.historialDeOpciones,opcion.toUpperCase()]
    })
    this.state.contador===1?historial=[this.state]:historial=[...historial,this.state]
} 

volver(momento){
this.setState(historial.find(item=>item.contador===momento))
}

render(){
   
    return(
        <div className="layout">
            <h1 className="historia">{this.state.historia}</h1>
            <div className="opciones">
            <Rcondicional opcionB={this.state.opcion} eleccion={this.eleccionH} conteo={this.state.contador<Data.length/2+0.5}/>
            </div>
            <div className="recordatorio">
             <h3 > Seleccion anterior: {this.state.seleccionAnterior}</h3>
             <p>Historial</p> 
            <Historial arregloH={this.state.historialDeOpciones} vuelta={this.volver}/>
            </div>

        </div>
    )
}

}