 import { Offcanvas, OffcanvasBody, OffcanvasTitle, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContex"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json";


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
                    {cartItems.map((item:any) => (
                    <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-utof fw-bold fs-5">
                        Totall {" "}
                        {formatCurrency(
                            cartItems.reduce((total:number,cartItem:any) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total+ (item?.price || 0) * cartItem.quantity

                        },0)
                        )}

                    </div>
                     
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )

 }