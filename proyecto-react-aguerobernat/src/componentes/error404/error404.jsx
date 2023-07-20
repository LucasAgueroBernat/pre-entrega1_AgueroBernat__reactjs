import errorimg from '../../assets/error404.jpg';

const error404 = () => {
    return(
        <div className='error404'>
            <img src={errorimg} alt="imagen de error" />
            <h2> Pagina no encontrada </h2>
            <Button success outline>Volver</Button>
        </div>
    )
}

export default error404