'use client';

import { createContext, useContext, useRef, useState } from 'react';
import type { Product, Variant } from '@/lib/data';

export interface CartItem {
  key: string;
  id: string;
  name: string;
  weight: string;
  price: number;
  qty: number;
  ph: string;
}

interface CartContextType {
  items: CartItem[];
  totalQty: number;
  pulse: boolean;
  cartOpen: boolean;
  addItem: (product: Product, variant: Variant) => void;
  updateQty: (key: string, delta: number) => void;
  removeItem: (key: string) => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalQty = items.reduce((s, it) => s + it.qty, 0);

  const addItem = (product: Product, variant: Variant) => {
    const key = `${product.id}:${variant.w}`;
    setItems(prev => {
      const idx = prev.findIndex(it => it.key === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          weight: variant.w,
          price: variant.price,
          qty: 1,
          ph: product.ph,
        },
      ];
    });
    setCartOpen(true);
    setPulse(true);
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    pulseTimer.current = setTimeout(() => setPulse(false), 700);
  };

  const updateQty = (key: string, delta: number) => {
    setItems(prev =>
      prev
        .map(it => (it.key === key ? { ...it, qty: it.qty + delta } : it))
        .filter(it => it.qty > 0),
    );
  };

  const removeItem = (key: string) => {
    setItems(prev => prev.filter(it => it.key !== key));
  };

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <CartContext.Provider
      value={{ items, totalQty, pulse, cartOpen, addItem, updateQty, removeItem, openCart, closeCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
