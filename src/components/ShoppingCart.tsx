 import { Offcanvas, OffcanvasBody, OffcanvasTitle, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContex"
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
    isOpen:boolean
}
 export const ShoppingCart = ({isOpen} : ShoppingCartProps) => {
     const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <OffcanvasTitle>
                    Cart
                </OffcanvasTitle>
            </Offcanvas.Header>
            <OffcanvasBody>
                <Stack > 
                    {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                    ))}
                     
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )

 }