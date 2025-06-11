"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
  size: "A6" | "A5"
  finish: "matte" | "glossy"
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

const CartContext = createContext<{
  state: CartState
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  totalItems: number
  totalPrice: number
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size && item.finish === action.payload.finish,
      )

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id && item.size === existingItem.size && item.finish === existingItem.finish
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item))
          .filter((item) => item.quantity > 0),
      }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      }

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      }

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  const { toast } = useToast()

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    })
  }

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  const openCart = () => {
    dispatch({ type: "OPEN_CART" })
  }

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" })
  }

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
