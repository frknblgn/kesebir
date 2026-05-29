export interface Variant { w: string; price: number; }

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
  image?: string;
}

export interface Category { id: string; label: string; }
export interface NavItem { label: string; hint: string; href: string; }

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
    description: 'Cunda Mandırası\'nın en olgun peyniri. İnek sütünden elle yoğrularak taş odada tam bir yıl dinlendirilir. Sert yapısı, cevizli ve fındıklı derin aroması ile sofralarınızın baş tacı.',
    rating: 4.9, reviews: 128, n: '01', ph: 'warm', phLabel: 'MAKRO · KAŞAR KESİTİ',
    variants: [{ w: '250g', price: 340 }, { w: '500g', price: 620 }, { w: '1kg', price: 1180 }],
  },
  {
    id: 'isli-sepet',
    name: 'Cunda İsli Sepet Peyniri',
    sub: 'Çam dumanlı · Koyun (Çerkes)',
    category: 'peynir',
    badges: ['El Yapımı', 'Koyun Sütü'],
    pairing: 'Soğuk demlenmiş çay ve taze incir ile',
    description: 'Koyun sütünden yapılan sepet peyniri çam ağacının tütsüsüyle buluşuyor. Adanın eski usul geleneğini yaşatan bu peynir, duman aroması ve yoğun koyun sütü tadıyla benzersiz.',
    rating: 4.8, reviews: 64, n: '02', ph: 'olive', phLabel: 'MAKRO · İSLİ SEPET DOKUSU',
    variants: [{ w: '500g', price: 560 }, { w: '1kg', price: 1080 }],
  },
  {
    id: 'sert-beyaz',
    name: 'Sert Tam Yağlı Beyaz Peynir',
    sub: 'Ezine tipi · İnek & Koyun',
    category: 'peynir',
    badges: ['El Yapımı', 'Tam Yağlı'],
    pairing: 'Taze domates ve Ege zeytini ile',
    description: 'Geleneksel Ezine usulü yapılan tam yağlı beyaz peynir. Yoğun süt aroması ve kırılgan dokusuyla kahvaltı sofralarının vazgeçilmezi.',
    rating: 4.8, reviews: 96, n: '03', ph: 'warm', phLabel: 'MAKRO · BEYAZ PEYNİR',
    variants: [{ w: '250g', price: 225 }, { w: '500g', price: 350 }, { w: '1kg', price: 450 }],
  },
  {
    id: 'dil-peyniri',
    name: 'Dil Peyniri',
    sub: 'Taze · İnek Sütü',
    category: 'peynir',
    badges: ['Taze', 'İnek Sütü'],
    pairing: 'Kavun ve dut pekmezi ile',
    description: 'Kaşara benzer fakat daha yumuşak dokulu, lifli yapısıyla eşsiz bir taze peynir. Ege kahvaltısının olmazsa olmazı.',
    rating: 4.7, reviews: 52, n: '04', ph: '', phLabel: 'MAKRO · DİL PEYNİRİ',
    variants: [{ w: '250g', price: 190 }, { w: '500g', price: 360 }],
  },
  {
    id: 'lor-peyniri',
    name: 'Lor Peyniri',
    sub: 'Taze · Günlük Üretim',
    category: 'peynir',
    badges: ['Günlük', 'Doğal'],
    pairing: 'Bal ve çam fıstığı ile ya da tuzlayıp börek içine',
    description: 'Her gün taze üretilen kalsiyumca zengin yumuşak peynir. Tatlı ile de tuzlu ile de harika uyum sağlar.',
    rating: 4.6, reviews: 43, n: '05', ph: 'stone', phLabel: 'MAKRO · LOR',
    variants: [{ w: '250g', price: 120 }, { w: '500g', price: 220 }],
  },
  {
    id: 'tulum-keci',
    name: 'Keçi Sütü Teneke Tulum',
    sub: 'İzmir Tulum · Keçi',
    category: 'peynir',
    badges: ['Keçi Sütü', 'Olgunlaştırılmış'],
    pairing: 'Cevizli ekmek ve taze ot ile',
    description: 'Keçi sütünden yapılan ve teneke içinde olgunlaştırılan İzmir tulumu. Keskin aroması ve kremsi dokusuyla gurme sofralara yakışır.',
    rating: 4.8, reviews: 37, n: '06', ph: 'olive', phLabel: 'MAKRO · TULUM',
    variants: [{ w: '500g', price: 380 }, { w: '1kg', price: 720 }],
  },
  {
    id: 'kirli-hanim',
    name: 'Kirli Hanım Peyniri',
    sub: 'Ekşi mayalı · 6 ay olgun · Spesiyal',
    category: 'peynir',
    badges: ['Ekşi Mayalı', 'Sınırlı Üretim'],
    pairing: 'Yaban erikli reçel ve ceviz ile',
    description: 'Taze peynir ve taze lor harmanından yapılan Kesebir\'in spesiyal ürünü. Yılda yalnızca birkaç kez üretilir, 6 ay boyunca olgunlaşır.',
    rating: 4.9, reviews: 41, n: '07', ph: 'warm', phLabel: 'MAKRO · KIRLI HANIM',
    variants: [{ w: '250g', price: 280 }, { w: '500g', price: 520 }],
  },
  {
    id: 'saganaki-sakiz',
    name: 'Damla Sakızlı Saganaki',
    sub: 'Patentli tarif · Keçi & Koyun',
    category: 'saganaki',
    badges: ['Patentli', 'Keçi & Koyun'],
    pairing: 'Tavada eritip limon kabuğu rendesi ile',
    description: 'Kesebir\'in patentli tarifiyle hazırlanan bu saganaki, damla sakızının eşsiz aromasını keçi ve koyun sütüyle buluşturuyor. Dışı çıtır, içi yumuşacık.',
    rating: 5.0, reviews: 211, n: '08', ph: '', phLabel: 'MAKRO · SAKIZ AROMASI',
    variants: [{ w: '250g', price: 270 }, { w: '500g', price: 510 }],
  },
  {
    id: 'saganaki-kekik',
    name: 'Kekikli Saganaki',
    sub: 'Kızartmalık · Koyun',
    category: 'saganaki',
    badges: ['Kekikli', 'El Yapımı'],
    pairing: 'Taze limon suyu ve roka ile',
    description: 'Ege kekiğiyle harmanlanan kızartmalık saganaki. Birkaç dakikada altın sarısına kavrulan dışı ve eriyen iç dokusuyla muazzam bir lezzet.',
    rating: 4.8, reviews: 89, n: '09', ph: 'olive', phLabel: 'MAKRO · KEKİKLİ SAGANAKİ',
    variants: [{ w: '250g', price: 250 }, { w: '500g', price: 480 }],
  },
  {
    id: 'saganaki-ceviz',
    name: 'Cevizli Saganaki',
    sub: 'Kızartmalık · İnek & Koyun',
    category: 'saganaki',
    badges: ['Cevizli', 'El Yapımı'],
    pairing: 'Nar ekşisi ve taze otlar ile',
    description: 'İç dolusu cevizin peynirle çarpıştığı eşsiz saganaki çeşidi. Kızartıldığında cevizin kavruk aroması tam anlamıyla açığa çıkar.',
    rating: 4.7, reviews: 67, n: '10', ph: 'warm', phLabel: 'MAKRO · CEVİZLİ SAGANAKİ',
    variants: [{ w: '250g', price: 260 }, { w: '500g', price: 490 }],
  },
  {
    id: 'saganaki-sade',
    name: 'Sade Saganaki',
    sub: 'Kızartmalık · Koyun & Keçi',
    category: 'saganaki',
    badges: ['Sade', 'El Yapımı'],
    pairing: 'Yalnızca limon suyu ve taze biber ile',
    description: 'Saf, katkısız saganaki. Koyun ve keçi sütünün özüyle yapılmış, aromasını yalnızca sütten alan klasik saganaki tarifi.',
    rating: 4.6, reviews: 54, n: '11', ph: 'stone', phLabel: 'MAKRO · SADE SAGANAKİ',
    variants: [{ w: '250g', price: 240 }, { w: '500g', price: 460 }],
  },
  {
    id: 'erken-hasat',
    name: 'Erken Hasat Zeytinyağı',
    sub: 'Filtresiz · Soğuk Sıkım',
    category: 'zeytin',
    badges: ['Erken Hasat', 'Filtresiz'],
    pairing: 'Yeşil saganaki ve körpe roka ile',
    description: 'Ayvalık bölgesinin çam ve kekik kokan tepelerinden erken hasat edilen zeytinler soğuk sıkım yöntemiyle işleniyor. Filtresiz kalması sayesinde tüm doğal aroma korunuyor.',
    rating: 4.9, reviews: 96, n: '12', ph: 'olive', phLabel: 'MAKRO · ZEYTİNYAĞI',
    variants: [{ w: '1 LT', price: 420 }, { w: '3 LT', price: 1180 }, { w: '5 LT', price: 1900 }],
  },
  {
    id: 'kirma-yesil',
    name: 'Ayvalık Yeşil Zeytin Kırma',
    sub: 'Limon kabuğu · Sarımsak',
    category: 'zeytin',
    badges: ['El Kırma', 'Tuzlu Su'],
    pairing: 'Demli kahvaltı çayı ve kepek ekmeği ile',
    description: 'El ile tek tek kırılan Ayvalık zeytinleri limon kabuğu ve sarımsak ile marine ediliyor. Aylar boyu tuzlu suda olgunlaşan bu zeytinler Ege kahvaltısının kalbi.',
    rating: 4.7, reviews: 88, n: '13', ph: 'stone', phLabel: 'MAKRO · YEŞİL ZEYTİN',
    variants: [{ w: '250g', price: 160 }, { w: '500g', price: 300 }, { w: '1kg', price: 560 }],
  },
];

export const NAV_STORY: NavItem[] = [
  { label: 'Hakkımızda',       hint: "1979'dan beri",          href: '/hikayemiz' },
  { label: 'Üretim Süreci',    hint: 'Atölyeden masaya',       href: '/hikayemiz#uretim-sureci' },
  { label: 'Sertifikalarımız', hint: 'ISO 22000 · TSE',        href: '/hikayemiz#sertifikalar' },
  { label: 'Basında Biz',      hint: 'Yayınlar & röportajlar', href: '/basinda-biz' },
];
