import { useState } from "react";
import "../App.css"

const Form = () =>{
    const [formData, setFormData] = useState({
        nombre:"",
        email:"",
        celular: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) =>{
        e.preventDefault();

        fetch('https://654acfad5b38a59f28ee3f86.mockapi.io/api/users',{
            method:"POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
        }).then((response) => response.json()).then((data) => {console.log("Api Response ", data)}).catch((error) => {console.error("Api error response ", error)})

      };

    return(
        <>
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:  </label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:  </label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="celular">Celular:  </label>
                <input type="number" id="celular" name="celular" value={formData.celular} onChange={handleChange} />
            </div>

            <button type="submit">Enviar</button>
        </form>
        </div>
        </>
        
    );
}

export { Form };