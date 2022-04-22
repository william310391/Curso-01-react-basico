import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {

    const [scrollY, setscrollY] = useState(0);

    useEffect(() => {
        //console.log("Moviendo el scroll")
        const detectarScroll = () => { setscrollY(window.pageYOffset); }
        window.addEventListener("scroll", detectarScroll);
        return () => {
            window.removeEventListener("scroll", detectarScroll);
            //console.log("fase de Desmontaje")
        }
    }, [scrollY]);

    useEffect(() => {
        //console.log("fase de Montaje")
    }, [])

    useEffect(() => {
        //console.log("fase de Actualizacion")
    })

    useEffect(() => {
        return () => {
            //console.log("fase de Desmontaje")
        }
    })
    return (
        <>
            <h2>Hooks - useEffect y el Ciclo Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}
