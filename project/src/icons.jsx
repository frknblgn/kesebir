// Lightweight inline SVG icons — single stroke, currentColor.
const Icon = {
  search: (p={}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <circle cx="11" cy="11" r="7"></circle>
      <path d="M20 20l-3.5-3.5"></path>
    </svg>
  ),
  user: (p={}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <circle cx="12" cy="8.5" r="4"></circle>
      <path d="M4 20.5c1.6-3.5 4.6-5.5 8-5.5s6.4 2 8 5.5"></path>
    </svg>
  ),
  bag: (p={}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8z"></path>
      <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
    </svg>
  ),
  caret: (p={}) => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <path d="M3 4.5l3 3 3-3"></path>
    </svg>
  ),
  arrow: (p={}) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"></path>
    </svg>
  ),
  close: (p={}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <path d="M6 6l12 12M18 6L6 18"></path>
    </svg>
  ),
  plus: (p={}) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M12 5v14M5 12h14"></path>
    </svg>
  ),
  minus: (p={}) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M5 12h14"></path>
    </svg>
  ),
  menu: (p={}) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <path d="M3 7h18M3 12h18M3 17h18"></path>
    </svg>
  ),
  star: (p={}) => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l2.9 6.9 7.4.6-5.6 4.8 1.7 7.2L12 17.8 5.6 21.5l1.7-7.2L1.7 9.5l7.4-.6L12 2z"></path>
    </svg>
  ),
  // small crest mark used in logo lockup
  crest: (p={}) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 4l13 6v9c0 8-5.5 14-13 17C12.5 33 7 27 7 19v-9l13-6z"></path>
      <path d="M14 18c1.6 2 3.8 3 6 3s4.4-1 6-3"></path>
      <circle cx="15" cy="14" r="0.8" fill="currentColor"></circle>
      <circle cx="25" cy="14" r="0.8" fill="currentColor"></circle>
      <path d="M20 22v4"></path>
    </svg>
  ),
};

window.Icon = Icon;
