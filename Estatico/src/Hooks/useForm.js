import { useState } from "react";


export const useForm = (estructura = {}) => {
  
    // Recibe la estructura de objeto y la setea en el estado
    const [formState, setFormState] = useState(estructura);

    // Manejador de cambios en los inputs del formulario
    const onInputChange = ({target}) => {
        const {name , value} = target;

        const parsedValue = name === 'pagado' ? (value === 'true' ? true : value === 'false' ? false : value) : value;

    setFormState({
        ...formState,
        [name]: parsedValue
    });


        // setFormState({
        //     ...formState,
        //     [name]: value
        // })
    }

    // Función para resetear el formulario con una nueva estructura
    const resetForm = (newFormState) => {
        setFormState(newFormState);
    };

    return{
        formState,
        onInputChange,
        resetForm
    }
}
