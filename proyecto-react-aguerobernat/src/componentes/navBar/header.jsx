
import logo from '../../assets/logo.svg'
import CartWidget from '/src/componentes/cartWidget/cartWidget.jsx';
import carrito from '../../assets/cardwidget.jpg'

export const Header = () => {

    return(
        <header className="header">
            <div className="contenedor-header">
                <img className="logo" src="{logo}" alt="logo"/>
                <h1 className="titulo">Tejiendo Sueños</h1>
                <nav className="navbar"> 
                    <a className="navbar-link" href="#">Catalogo</a>
                    <a className="navbar-link" href="#">Conocenos</a>
                    <a className="navbar-link" href="{CartWidget}">{carrito}</a>
                </nav>
            </div>
        </header>
    )
}