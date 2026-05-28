export interface Variant {
  w: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  sub: string;
  category: string;
  badges: string[];
  pairing: string;
  rating: number;
  reviews: number;
  variants: Variant[];
  ph: string;
  phLabel: string;
  n: string;
}

export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: 'all',        label: 'Tümü' },
  { id: 'cunda',      label: 'Cunda Peynirleri' },
  { id: 'saganaki',   label: 'Saganaki' },
  { id: 'zeytinyagi', label: 'Zeytinyağı' },
  { id: 'zeytin',     label: 'Zeytin' },
  { id: 'ozel',       label: 'Özel' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'eski-kasar',
    name: 'Eski Kaşar',
    sub: '1 Yıl Olgunlaştırılmış · İnek',
    category: 'cunda',
    badges: ['El Yapımı', 'İnek Sütü'],
    pairing: 'Erken hasat zeytinyağı ve bal kabağı reçeli ile',
    rating: 4.9,
    reviews: 128,
    variants: [
      { w: '250g', price: 340 },
      { w: '500g', price: 620 },
      { w: '1kg',  price: 1180 },
    ],
    ph: 'warm',
    phLabel: 'MAKRO · KAŞAR KESİTİ',
    n: '01',
  },
  {
    id: 'isli-sepet',
    name: 'Cunda İsli Sepet Peyniri',
    sub: 'Çam dumanlı · Koyun',
    category: 'cunda',
    badges: ['El Yapımı', 'Koyun Sütü'],
    pairing: 'Soğuk demlenmiş çay ve taze incir ile',
    rating: 4.8,
    reviews: 64,
    variants: [
      { w: '250g', price: 300 },
      { w: '500g', price: 560 },
      { w: '1kg',  price: 1080 },
    ],
    ph: 'olive',
    phLabel: 'MAKRO · İSLİ SEPET DOKUSU',
    n: '02',
  },
  {
    id: 'saganaki',
    name: 'Damla Sakızlı Saganaki',
    sub: 'Patentli tarif · Keçi & Koyun',
    category: 'saganaki',
    badges: ['Patentli', 'Keçi Sütü'],
    pairing: 'Tavada eritip limon kabuğu rendesi ile',
    rating: 5.0,
    reviews: 211,
    variants: [
      { w: '250g', price: 270 },
      { w: '500g', price: 510 },
      { w: '1kg',  price: 980 },
    ],
    ph: '',
    phLabel: 'MAKRO · SAKIZ AROMASI',
    n: '03',
  },
  {
    id: 'erken-hasat',
    name: 'Erken Hasat Zeytinyağı',
    sub: 'Filtresiz · Soğuk Sıkım · 1 LT',
    category: 'zeytinyagi',
    badges: ['Erken Hasat', 'Filtresiz'],
    pairing: 'Yeşil saganaki ve körpe roka ile',
    rating: 4.9,
    reviews: 96,
    variants: [
      { w: '500ml', price: 380 },
      { w: '1 LT',  price: 600 },
      { w: '3 LT',  price: 1640 },
    ],
    ph: 'olive',
    phLabel: 'MAKRO · YEŞİL ZEYTİN',
    n: '04',
  },
  {
    id: 'kirma-yesil',
    name: 'Ayvalık Yeşil Zeytin Kırma',
    sub: 'Limon kabuğu · Sarımsak · 500g',
    category: 'zeytin',
    badges: ['El Kırma', 'Tuzlu Su'],
    pairing: 'Demli kahvaltı çayı ve kepek ekmeği ile',
    rating: 4.7,
    reviews: 88,
    variants: [
      { w: '250g', price: 180 },
      { w: '500g', price: 300 },
      { w: '1kg',  price: 540 },
    ],
    ph: 'stone',
    phLabel: 'MAKRO · ZEYTİN ÇEKİRDEK',
    n: '05',
  },
  {
    id: 'kirli-hanim',
    name: 'Kirli Hanım Peyniri',
    sub: 'Ekşi mayalı · 6 ay olgun',
    category: 'ozel',
    badges: ['Ekşi Mayalı', 'Sınırlı Üretim'],
    pairing: 'Yaban erikli reçel ve ceviz ile',
    rating: 4.9,
    reviews: 41,
    variants: [
      { w: '250g', price: 280 },
      { w: '500g', price: 520 },
      { w: '1kg',  price: 1000 },
    ],
    ph: 'warm',
    phLabel: 'MAKRO · KIRLI HANIM',
    n: '06',
  },
];

export const NAV_PRODUCTS: [string, string][] = [
  ['Cunda Peynirleri',    '29 ürün'],
  ['Saganaki Koleksiyonu', '4 ürün'],
  ['Peynir Çeşitleri',    '12 ürün'],
  ['Zeytinyağı',          '5 ürün'],
  ['Zeytin Çeşitleri',    '6 ürün'],
  ['Tüm Ürünler',         '29 ürün'],
];

export const NAV_STORY: [string, string][] = [
  ['Hakkımızda',       "1979'dan beri"],
  ['Üretim Süreci',    'Atölyeden masaya'],
  ['Sertifikalarımız', 'ISO 22000 · TSE'],
  ['Basında Biz',      'Yayınlar & röportajlar'],
];
