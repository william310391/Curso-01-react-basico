import React, { useRef } from 'react'

export default function Referencias() {
    // let refMenu = createRef();
    let refMenu = useRef();
    let refMenuBtn = useRef();
    //console.log(refMenu,refMenuBtn);
    const handleToggleMenu = (e) => {

        if (refMenuBtn.current.textContent === "menu") {
            refMenuBtn.current.textContent = "cerrar";
            refMenu.current.style.display = "block";

        } else {
            refMenuBtn.current.textContent = "menu";
            refMenu.current.style.display = "none";
        }

        // const $menu = document.getElementById("menu");
        // if (e.target.textContent === "menu") {
        //     e.target.textContent = "cerrar";
        //     $menu.style.display = "block";

        // }else{
        //     e.target.textContent = "menu";
        //     $menu.style.display = "none";
        // } 
    }


    return (
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{ display: "nome" }}>
                <p>parrafo 1</p>
                <p>parrafo 2</p>
                <p>parrafo 3</p>
                <p>parrafo 4</p>
                <p>parrafo 5</p>
            </nav>
        </>
    )
}

