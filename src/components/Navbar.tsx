import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContex'
export const Navbar =() => {
    const {openCart, cartQuantity} = useShoppingCart()
    return(
            <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
                <Container>
                  <Nav className='em-auto'>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                  </Nav>
                {cartQuantity > 0 && ( 
                  <Button  onClick={openCart} style={{width: "3rem", height : "3rem", position:"relative"}} 
                  variant="outline-primary" 
                  className='rounded-circle'
                  >
                        <i className="bi bi-cart-dash"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
                        <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        
                        <div className='rounded-circle bg-danger d-flex justify-content-center aling-item-center'
                         style={{color:"white",
                          width:"1.5rem",
                           height:"1.5rem", 
                           position:"absolute",
                           bottom:0,
                           right:0,
                           transform: "translate(25% ,25%)",

                        }}
                         >
                            {cartQuantity }
                         </div>
                      
                  </Button>
                )}
                </Container>
        </NavbarBs>
    )
}