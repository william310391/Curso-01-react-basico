import React, { Component } from 'react'
import data from '../helpers/data.json'

function ElementoLista(props) {
    return (
        <li>
            <a href={props.data.web} target="_blank" rel="noopener noreferrer">
                {props.data.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seasons: ["Primavera", "Verqano", "Otoño", "Invierno"],
        }
    }
    render() {
        return (
            <div>
                <h2>Renderizado Elementos</h2>
                <ol>
                    {this.state.seasons.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ol>
                <h3>Frameworks Fromend JavaScript </h3>
                <ul>
                    {data.frameworks.map((el =>
                        <ElementoLista key={el.id} data={el} />
                    ))}
                </ul>
            </div>
        )
    }
}
