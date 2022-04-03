import { Component } from "react";
import Boton from "./Boton";
import Swal from "sweetalert2";
export default class Rcondicional extends Component{

    finalizar(){
        Swal.fire({
            title: 'Desea comenzar de nuevo?',
            text: "Volvera al principio de la historia",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Comenzar',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }
          })
    }
  
    render(){

        if(this.props.conteo){
        return(
        <>
        <Boton opcionC={this.props.opcionB.a} valor="a" eleccionC={this.props.eleccion}/>
        <Boton opcionC={this.props.opcionB.b} valor="b" eleccionC={this.props.eleccion}/>
        </>
        )}else{
            return(
                <button className="botones" onClick={this.finalizar}>FIN</button>
            )
        }
}
}