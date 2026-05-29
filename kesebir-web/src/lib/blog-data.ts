export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'tarif' | 'bilgi' | 'haber';
  categoryLabel: string;
  date: string;
  author: string;
  readTime: number;
}

export const BLOG_CATEGORIES = [
  { id: 'all',   label: 'Tümü' },
  { id: 'tarif', label: 'Tarifler' },
  { id: 'bilgi', label: 'Peynir Rehberi' },
  { id: 'haber', label: 'Haberler' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'saganaki-nasil-kizartilir',
    title: 'Mükemmel Saganaki İçin 5 Altın Kural',
    excerpt: 'Tavada saganaki kızartmanın püf noktaları: doğru sıcaklık, doğru yağ miktarı ve doğru servis tekniği.',
    category: 'tarif',
    categoryLabel: 'Tarif',
    date: '2026-05-15',
    author: 'Kesebir Mutfağı',
    readTime: 4,
    content: `Saganaki, Ege mutfağının en sevilen atıştırmalıklarından biri. Ama doğru kızartılmadığında ya içi donuk kalır ya da dışarı akar. İşte mükemmel saganaki için bilmeniz gerekenler:

**1. Tavayı önceden ısıtın**
Yağsız tavayı önce orta-yüksek ateşte ısıtın. Saganakiyi soğuk tavaya koyarsanız yapışır ve düzgün kızarmaz.

**2. Yağ miktarına dikkat edin**
Tava dibini örtecek kadar zeytinyağı yeterli. Fazla yağda kızartırsanız peynir içeri çeker ve yağlanır.

**3. Her iki tarafı eşit kızartın**
Bir tarafı 2-3 dakika, diğer tarafı da 2-3 dakika. Üzerine bastırmayın, kendi halinde kızarsın.

**4. Servis etmeden önce 1 dakika bekleyin**
Tavadan çıkan saganaki çok sıcak olur. Bir dakika dinlendirince içi yerleşir, dışı çıtır kalır.

**5. Limon sıkın, hemen tüketin**
Saganaki soğuyunca sertleşir. Limon sıkıp hemen servis edin.

Kesebir'in Damla Sakızlı Saganakisi için bu süreyi biraz kısaltabilirsiniz — sakız aroması çok kısa sürede açığa çıkar.`,
  },
  {
    id: '2',
    slug: 'peynir-nasil-saklanir',
    title: 'Peyniriniz Taze Kalsın: Doğru Saklama Yöntemleri',
    excerpt: 'Farklı peynir türleri için farklı saklama koşulları gerekir. İşte peynirlerinizi en uzun süre taze tutmanın yolları.',
    category: 'bilgi',
    categoryLabel: 'Peynir Rehberi',
    date: '2026-05-01',
    author: 'İsmail Kesebir',
    readTime: 5,
    content: `Peynir canlı bir gıdadır. Doğru saklanmadığında hem aroması hem de dokusu bozulur. Türüne göre saklama önerilerimiz:

**Taze Peynirler (Lor, Dil, Beyaz Peynir)**
- Buzdolabında 4-8°C arası saklayın
- Açıldıktan sonra 5-7 gün içinde tüketin
- Kendi suyunda ya da hafif tuzlu suda bekletin
- Plastik ambalaj yerine derin tabak tercih edin

**Olgunlaştırılmış Peynirler (Eski Kaşar, Tulum)**
- 8-12°C, nem oranı %70-80 ideal
- Peynir kağıdına ya da balmumlu kağıda sarın
- Plastik streçten kaçının — peyniri boğar
- Küf oluşursa 1-2 cm kesin, gerisi hâlâ iyi

**Saganaki**
- Açılmamış paket buzdolabında 3 aya kadar dayanır
- Açtıktan sonra 1 hafta içinde kullanın
- Dondurabilirsiniz — kalitesi korunur

**İpucu:** Peyniri tüketmeden 30 dakika önce buzdolabından çıkarın. Oda sıcaklığında aroması çok daha iyi açılır.`,
  },
  {
    id: '3',
    slug: 'ege-kahvaltisi-rehberi',
    title: 'Eksiksiz Bir Ege Kahvaltısı Kurmak',
    excerpt: 'Cunda\'nın ruhunu sofraya taşıyan bir Ege kahvaltısı için alışveriş listesi ve sunum önerileri.',
    category: 'tarif',
    categoryLabel: 'Tarif',
    date: '2026-04-20',
    author: 'Kesebir Mutfağı',
    readTime: 6,
    content: `Ege kahvaltısı bir ritüeldir. Sadece yemek değil, zamana meydan okumaktır. İşte Cunda ruhunu sofraya taşıyan bir kahvaltı için önerilerimiz:

**Vazgeçilmez Peynirler**
- Sert Tam Yağlı Beyaz Peynir — tuzlu, kırılgan
- Dil Peyniri — yumuşak, lifli
- İsli Sepet — dumanlı, karakterli
- Lor — hafif tatlı ya da tuzlu

**Zeytinler**
- Ayvalık Yeşil Zeytin Kırma — limonlu, sarımsaklı
- Siyah sofralık zeytin

**Yağ ve Reçel**
- Erken Hasat Zeytinyağı — ekmek banmak için
- Kekik balı veya incir reçeli

**Ekmek**
- Taze çıkmış köy ekmeği ya da simit
- Kepek ekmeği

**Sunum İpucu:** Peynirleri kesip doğrudan masaya servis etmeyin. Küçük tabaklara ya da tahtaya yerleştirin. Her peynirin yanına uygun bir reçel veya zeytin koyun. Zeytinyağını derin küçük bir kâseye alın.

**Çay Seçimi:** Koyu demlenmiş siyah çay — tercihen açık demlik yöntemiyle.`,
  },
  {
    id: '4',
    slug: 'peynir-cesitleri-rehberi',
    title: 'Kesebir Peynir Rehberi: Hangi Peynir Ne Zaman?',
    excerpt: 'Eski kaşardan lor peynirine, saganakiden tulum peynirine — her peynirin doğru kullanım yeri ve eşleşmeleri.',
    category: 'bilgi',
    categoryLabel: 'Peynir Rehberi',
    date: '2026-04-05',
    author: 'İsmail Kesebir',
    readTime: 7,
    content: `Her peynirin bir karakteri, bir kullanım yeri vardır. Yıllarca peynir yapan bir aileden size rehber:

**Eski Kaşar — Olgun, Derin**
Rendelenmiş hâlde makarna ve böreğe; dilimlenmiş hâlde atıştırmalık tabağına. Şarap eşliğinde (kuru kırmızı) harika.

**İsli Sepet — Dumanlı, Güçlü**
Tek başına atıştırmalık olarak en güzel. Yanında sadece çay ve incir. Hiçbir şeyle karıştırmayın.

**Sert Beyaz Peynir — Klasik**
Kahvaltıda her şeyle gider. Zeytinyağına banılan ekmekle, domatesle, zeytinle.

**Dil Peyniri — Yumuşak, Nazik**
Kavunla ya da nar reçeliyle. Tatlımsı bir kahvaltı için ideal.

**Lor — Saf, Nötr**
Bal ve çam fıstığıyla tatlı alternatif; tuz ve kekikle börek içi. İki dünya da harika.

**Tulum — Keskin, Karmaşık**
Cevizli ekmek ve taze otlarla. Şarküteri tabağında diğer peynirlerin yanında karakter katar.

**Saganaki — Kızartmalık**
Her zaman tavada, her zaman sıcak. Soğukken yenmez.

**Kirli Hanım — Spesiyal**
Sadece özel günlerde. Yanında yalnızca yaban erikli reçel ve iyi bir kırmızı şarap.`,
  },
];
