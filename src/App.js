import {Formik , Form, Field} from 'formik';
import './header.css'

const  App = () => {
  return (
    <div>
      <header>
        {/* dentro de submit creo una funcion async por que voy a estar llamando a la api de imagenes  */}
        <Formik
          initialValues={{search:""}}
          onSubmit={ async values =>{
              //llamar API de unsplash
              console.log(values)
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
