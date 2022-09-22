import create from "zustand";

export type Product = {
}

export type CartState = {
    items: any[],
    add: (item: any) => void,
    remove: (item: any) => void,
    clear: () => void,
    hydrate: () => void
}

export const useCart = create<CartState>((set, get) => ({
    items: [],
    add: (item: any) => {
        set((state) => ({ items: [item, ...state.items] })); 
    },
    remove: (item: any) => {

    },
    clear: () => {
        set({items: []});
    },
    hydrate: () => {
        
    }
}));

export const add = (item: any) => useCart.getState().add(item);
export const remove = (item: any) => useCart.getState().remove(item);
export const clear = () => useCart.getState().clear();
export const hydrate = () => useCart.getState().clear();
