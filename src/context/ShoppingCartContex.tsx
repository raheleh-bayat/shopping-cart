import { createContext,ReactNode,useContext,useState } from "react";
import { ShoppingCart } from '../components/ShoppingCart';

type ShoppingCartProviderPropse = {
    children: ReactNode
}
type CartItem ={
    id:number
    quantity:number
}
type ShoppingCartContex = {
    openCart: () => void
    closeCart:() => void
    getItemQuantity : (id:number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems:CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext );
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}
export const ShoppingCartProvider = ({ children }: ShoppingCartProviderPropse) => {
    const[isOpen , setIsOpen] =useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce( 
    (quantity, item) => item.quantity + quantity,0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id:number) =>{
        return ( 
            cartItems.find(item => item.id === id)?.quantity || 0
        ) 
    }
    const increaseCartQuantity = (id:number) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return[...currItems, {id, quantity:1}]
            }else{
                return (
                    currItems.map(item => {
                        if(item.id === id){
                            return( {...item, quantity: item.quantity + 1 })
                        }else{
                            return item
                        }
                    })
                )
            }
        })
    }
    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return (currItems.filter(item => item.id !== id))
            } else {
                return (
                    currItems.map(item => {
                        if (item.id === id) {
                            return ({ ...item, quantity: item.quantity - 1 })
                        } else {
                            return item
                        }
                    })
                )
            }
        })
    }
    const removeFormCart = (id:number) => {
        setCartItems(currItem => {
            return(
                currItem.filter(item => item.id !== id)
            )
        })
    }
    return (
        <ShoppingCartContext.Provider value={{ 
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFormCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
        }}
        >
            {children}

            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}