import {Formik , Form, Field} from 'formik';
import { useState } from 'react';
import './header.css'

const  App = () => {
  //para poder guardar las ftos traidas por la API uso useState para poder persistir las imagenes 
  const [photos,setPhotos] = useState([])
  console.log({photos})
  return (
    <div>
      <header>
        {/* dentro de submit creo una funcion async por que voy a estar llamando a la api de imagenes  */}
        <Formik
          initialValues={{search:""}}
          onSubmit={ async values =>{
              //llamar API de unsplash
              //esto lo hago mediante await y fecth con la url de la pagina web haciendo el llamdo a la api y el objeto de configuracion
              const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
               { headers:{
                    'Authorization':'Client-ID IqmgW4YAw7jTfvLaH3azt3uuEpo3W5XBkZPdFZcFn7Q'
                    }
              
                })
                const data = await response.json()
              setPhotos(data.results)
          }}
        >
          <Form>
            <Field name = "search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
