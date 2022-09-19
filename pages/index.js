// imr + tab
import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import Alerta from '../components/Alerta'
import Dropzone from '../components/Dropzone'
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import Link from 'next/link';
import build from 'next/dist/build';


// escribir "sfc" y apretar tab
const Index = () => {
  
    //Extraer el Usuario autenticado de Storage
    const AuthContext = useContext(authContext)
    const { usuarioAutenticado } = AuthContext;

    //Extraer el mensaje de erro de archivo
    const AppContext = useContext(appContext)
    const { mensaje_archivo, url } = AppContext;

    useEffect(() => {
    usuarioAutenticado()
    }, [])


    return ( 
        <Layout>
            <div className='md:w-4/5 xl:w-3/5 mx-auto mb-32'>

                { url ? (
                    <>
                        <p className='text-center text-2xl mt-10'>
                            <span className='font-bold text-red-700 text-3xl uppercase'>Tu url es: </span>
                            {`${process.env.frontendURL}/enlaces/${url}`}
                        </p>
                        <button
                            type='button'
                            className='bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-10'
                            onClick={() => navigator.clipboard.writeText(`${process.env.frontendURL}/enlaces/${url}`)}
                        >Copiar enlace</button>
                    </>
                    ) : (
                    <>
                        {mensaje_archivo && <Alerta />}
                        <div className='lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10'>
                            <div className='md:flex-1 mb-3 mx-2 mt-16 lg:mt-0'>
                            <Dropzone />
                                <div className='md:flex-1 mb-3 mx-2 mt-16 lg:mt-0'>
                                    <h2 className='text-4xl font-sans font-bold text-gray-800 my-4'>Compartir archivos de forma sencilla y privada</h2> 
                                    <p className='text-lg leading-loose'>
                                        <span className='text-red-500 font-bold'>ReactNodeSend</span> te permite compartir archivos con un cifrado de extremo a extremo y un archivo que es eliminado despues de ser descargado. Así que puedes mantener lo que compartes en privado y asegurado de que tus cosas permanezcan en línea para siempre
                                    </p>
                                    <Link href="/crearcuenta">
                                        <a className='text-red-500 font-bold text-lg hover:text-red-700'>Crear una cuenta para mayores beneficios</a>
                                    </Link>
        
                                </div>
                            </div>
                        </div>                    
                    </>
                ) }
            </div>
        </Layout>
    );
}
 
export default Index;

// Para que no se encimen las carpetas en el explorer de Vsc, apretar file, preferencias, settings y escribir compact y destildar la opcion de compact folders

// Lo recomendado es poner las pages en minuscula y poner los components arrancando en mayuscula

// npx create-next-app nodesend-cliente     "next": "12.2.5", "react": "18.2.0"      Crear la aplicacion en next.js
// npm i formik yup                         "formik": "^2.2.9", "yup": "^0.32.11"    Formik es paquete para validar formularios y la validacion tambien se maneja con yup
// npm i axios                              "axios": "^0.27.2"                       Para poder conectarnos con el backend
// npm i react-dropzone                     "react-dropzone": "^14.2.2"

// Para hacer el deploy
// npm run build
// npm i -g vercel
// vc login