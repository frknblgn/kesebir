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
  description: string;
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

export interface NavItem {
  label: string;
  hint: string;
  href: string;
}

export const CATEGORIES: Category[] = [
  { id: 'all',      label: 'Hepsini Gör' },
  { id: 'peynir',   label: 'Peynir Çeşitleri' },
  { id: 'saganaki', label: 'Saganaki Koleksiyonu' },
  { id: 'zeytin',   label: 'Zeytin Ürünleri' },
  { id: 'baharat',  label: 'Baharatlar ve Sabunlar' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'eski-kasar',
    name: 'Eski Kaşar',
    sub: '1 Yıl Olgunlaştırılmış · İnek',
    category: 'peynir',
    badges: ['El Yapımı', 'İnek Sütü'],
    pairing: 'Erken hasat zeytinyağı ve bal kabağı reçeli ile',
    description: 'Cunda Mandırası\'nın en olgun peyniri. İnek sütünden elle yoğrularak taş odada tam bir yıl dinlendirilir. Sert yapısı, cevizli ve fındıklı derin aroması ile kahvaltı sofralarının vazgeçilmezi.',
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
    category: 'peynir',
    badges: ['El Yapımı', 'Koyun Sütü'],
    pairing: 'Soğuk demlenmiş çay ve taze incir ile',
    description: 'Koyun sütünden yapılan sepet peyniri, çam ağacının tütsüsüyle buluşuyor. Adanın eski usul geleneğini yaşatan bu peynir, duman aroması ve yoğun koyun sütü tadıyla benzersiz bir deneyim sunuyor.',
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
    description: 'Kesebir\'in patentli tarifiyle hazırlanan bu saganaki, damla sakızının eşsiz aromasını keçi ve koyun sütüyle buluşturuyor. Tavada birkaç dakikada kızartıldığında dışı çıtır, içi yumuşacık bir lezzete dönüşüyor.',
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
    category: 'zeytin',
    badges: ['Erken Hasat', 'Filtresiz'],
    pairing: 'Yeşil saganaki ve körpe roka ile',
    description: 'Ayvalık bölgesinin çam ve kekik kokan tepelerinden erken hasat edilen zeytinler, soğuk sıkım yöntemiyle işleniyor. Filtresiz kalması sayesinde tüm doğal aroma ve besin değerleri korunuyor.',
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
    description: 'El ile tek tek kırılan Ayvalık zeytinleri, limon kabuğu ve sarımsak ile marine ediliyor. Aylar boyu tuzlu suda olgunlaşan bu zeytinler, Ege kahvaltı sofralarının en değerli misafiri.',
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
    category: 'peynir',
    badges: ['Ekşi Mayalı', 'Sınırlı Üretim'],
    pairing: 'Yaban erikli reçel ve ceviz ile',
    description: 'Yılda yalnızca birkaç kez üretilen bu sınırlı seri peynir, ekşi maya kültürü ile 6 ay boyunca olgunlaşıyor. Karmaşık aromatik yapısı ve kremsi dokusu, onu gerçek bir koleksiyon lezzetine dönüştürüyor.',
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

export const NAV_PRODUCTS: NavItem[] = [
  { label: 'Peynir Çeşitleri',    hint: 'Kaşar, sepet, olgunlaşmış',  href: '/urunler?cat=peynir' },
  { label: 'Saganaki Koleksiyonu', hint: 'Patentli tarif · 4 çeşit',  href: '/urunler?cat=saganaki' },
  { label: 'Zeytin Ürünleri',     hint: 'Zeytinyağı, kırma, sele',    href: '/urunler?cat=zeytin' },
  { label: 'Baharatlar ve Sabunlar', hint: 'Yakında geliyor',          href: '/urunler?cat=baharat' },
  { label: 'Tüm Ürünler',         hint: `${PRODUCTS.length} ürün`,    href: '/urunler' },
];

export const NAV_STORY: NavItem[] = [
  { label: 'Hakkımızda',       hint: "1979'dan beri",          href: '/hikayemiz' },
  { label: 'Üretim Süreci',    hint: 'Atölyeden masaya',       href: '/hikayemiz#uretim-sureci' },
  { label: 'Sertifikalarımız', hint: 'ISO 22000 · TSE',        href: '/hikayemiz#sertifikalar' },
  { label: 'Basında Biz',      hint: 'Yayınlar & röportajlar', href: '/basinda-biz' },
];
