import React, { Component } from 'react'

export class EventosES6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        };
    this.sumar=this.sumar.bind(this);
    this.restar=this.restar.bind(this);
    }
    sumar() {
        console.log("sumando");
        this.setState({
            contador:this.state.contador+1,
        })
    
    }
    restar() {
        console.log("restar");
        this.setState({
            contador:this.state.contador-1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clases ES6 </h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}
//Properties Inicializer
export class EventosES7 extends Component {

    state={
        contador:0
    }

    //Arrow funtion
    sumar = (e) => {
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1,
        })

    }
    restar = (e) => {
        console.log("restar");
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clases ES7 </h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// function Boton(props){
//     return <button onClick={props.myOnClick}>Boton hecho componete</button>
// }

// const Boton = (props)=> (
//     <button onClick={props.myOnClick}>Boton hecho componente</button>
// );


const Boton = ({myOnClick})=> (
    <button onClick={myOnClick}>Boton hecho componente</button>
)

export class MasSobreEventos extends Component {
     handlClick= (e, mensaja) =>{
        console.log(e)
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaja);

    }
    render() {
        return (
            <div>
                <h2>Mas Sobre Eventos</h2>
                <button onClick={(e)=>this.handlClick(e,"hola pasando paramtro desde un evento")}
             
                >
                saludo
                </button>
                {/* Evento Personalizado */}
                {/* <Boton onClick={(e)=>this.handlClick(e,"hola pasando paramtro desde un evento")}/> */}
                <Boton myOnClick={(e)=>this.handlClick(e,"hola pasando paramtro desde un evento de un componente")}/>
            </div>
        )
    }
}
