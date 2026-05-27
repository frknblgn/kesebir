// Root app — owns cart state, glues sections together.
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

function App() {
  const [cart, setCart] = useStateA([]); // [{key, id, name, weight, price, qty, ph}]
  const [cartOpen, setCartOpen] = useStateA(false);
  const [scrolled, setScrolled] = useStateA(false);
  const [pulse, setPulse] = useStateA(false);
  const pulseTimer = useRefA(null);

  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffectA(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
  }, [cartOpen]);

  const totalQty = cart.reduce((s, it) => s + it.qty, 0);

  const handleAdd = (product, variant) => {
    const key = product.id + ":" + variant.w;
    setCart(prev => {
      const i = prev.findIndex(it => it.key === key);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, {
        key, id: product.id, name: product.name,
        weight: variant.w, price: variant.price, qty: 1,
        ph: product.ph,
      }];
    });
    setCartOpen(true);
    setPulse(true);
    clearTimeout(pulseTimer.current);
    pulseTimer.current = setTimeout(() => setPulse(false), 700);
  };

  const handleQty = (key, delta) => {
    setCart(prev => prev
      .map(it => it.key === key ? { ...it, qty: it.qty + delta } : it)
      .filter(it => it.qty > 0)
    );
  };
  const handleRemove = (key) => setCart(prev => prev.filter(it => it.key !== key));

  return (
    <>
      <window.Nav
        cartCount={{ n: totalQty, pulse }}
        onOpenCart={() => setCartOpen(true)}
        scrolled={scrolled}
      />
      <window.Hero />
      <window.Products onAdd={handleAdd} />
      <window.Story />
      <window.Footer />
      <window.Cart
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={handleQty}
        onRemove={handleRemove}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
