import React, { useState } from 'react'

// export default function Formularios() {
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);


// const handleSubmit =(e)=>{
//     e.preventDefault();
//     alert("El formulario se a enviado");
//     console.log(nombre,sabor,lenguaje,terminos)
// }


//     return (
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="">Nombre:</label>
//                 <input 
//                 type="text" 
//                 id='nombre' 
//                 name='nombre'
//                 onChange={(e)=> setNombre(e.target.value)}
//                 />
//                 <p>Elige tu sabor JS Favorito</p>
//                 <input 
//                 type="radio" 
//                 id="vanilla" 
//                 name="sabor" 
//                 value="" 
//                 onChange={(e) => setSabor(e.target.value)} 
//                 defaultChecked
//                 />
//                 <label htmlFor="vanilla">Vanilla</label>

//                 <input 
//                 type="radio" 
//                 id="react" 
//                 name="sabor" 
//                 value="react" 
//                 onChange={(e) => setSabor(e.target.value)} 
//                 />
//                 <label htmlFor="react">React</label>

//                 <input 
//                 type="radio" 
//                 id="angular" 
//                 name="sabor" 
//                 value="angular" 
//                 onChange={(e) => setSabor(e.target.value)} 
//                 />
//                 <label htmlFor="angular">Angular</label>

//                 <input 
//                 type="radio" 
//                 id="vue" 
//                 name="sabor" 
//                 value="vue" 
//                 onChange={(e) => setSabor(e.target.value)} 
//                 />
//                 <label htmlFor="vue">Vue</label>

//                 <input 
//                 type="radio" 
//                 id="svelte" 
//                 name="sabor" 
//                 value="svelte" 
//                 onChange={(e) => setSabor(e.target.value)} 
//                 />
//                 <label htmlFor="svelte">Svelte</label>
//                 <p>Elige tu leguaje de programacion favorito</p>
//                 <select 
//                 name="lenguaje"
//                 onChange={(e) => setLenguaje(e.target.value)} 
//                 defaultValue=""
//                 >
//                     <option value="">---</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Pyton</option>
//                     <option value="go">GO</option>
//                     <option value="rb">Ruby</option>
//                 </select>
//                 <br/>
//                 <label htmlFor='terminos'>Acepto terminos y condiciones</label>
//                 <input type="checkbox" id="terminos" name='terminos' onChange={(e) => setTerminos(e.target.checked)} ></input>

//                 <br />
//                 <input type="submit"></input>
//             </form>
//         </>
//     )
// }


export default function Formularios() {
    const [form, setForm] = useState({});


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se a enviado");
        // console.log(nombre,sabor,lenguaje,terminos)
    }


    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre:</label>
                <input
                    type="text"
                    id='nombre'
                    name="nombre"
                    onChange={handleChange}
                />
                <p>Elige tu sabor JS Favorito</p>
                <input
                    type="radio"
                    id="vanilla"
                    name="sabor"
                    value=""
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>

                <input
                    type="radio"
                    id="react"
                    name="sabor"
                    value="react"
                    onChange={handleChange}
                />
                <label htmlFor="react">React</label>

                <input
                    type="radio"
                    id="angular"
                    name="sabor"
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>

                <input
                    type="radio"
                    id="vue"
                    name="sabor"
                    value="vue"
                    onChange={handleChange}
                />
                <label htmlFor="vue">Vue</label>

                <input
                    type="radio"
                    id="svelte"
                    name="sabor"
                    value="svelte"
                    onChange={handleChange}
                />
                <label htmlFor="svelte">Svelte</label>
                <p>Elige tu leguaje de programacion favorito</p>
                <select
                    name="lenguaje"
                    onChange={handleChange}
                    defaultValue=""
                >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Pyton</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor='terminos'>Acepto terminos y condiciones</label>
                <input
                    type="checkbox"
                    id="terminos"
                    name='terminos'
                    onChange={handleChecked} ></input>

                <br />
                <input type="submit"></input>
            </form>
        </>
    )
}
