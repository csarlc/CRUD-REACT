// const nombre = {
//     message: 'hola mundo',
//     nombre: "hola"
// };

// const imprimir = (retornar) =>{//si no depende del funcional component puede ir afuera
//     return `Hola me llamo ${retornar}`
// }
import PropTypes from 'prop-types';


export const FirstApp = ( {title,subTitle='La tierra explota!', name} ) =>{
    if(!title){
        throw new Error('El titulo no existe');
    }
 
    return(
        <>
        <h1>{title}  {subTitle}</h1>
        {/* <code>{ JSON.stringify(name )}</code> */}
        <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps={
    title: 'No hay titulo',
    subTitle:'No hay subtitulo',
    name: 'Cesar Lopez'
}