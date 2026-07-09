export const galleryCategories = {
  batik: {
    titleEn: "Batik",
    titleRu: "Батик",
    descEn:
      "Silk paintings and scarves created using the ancient batik technique.",
    descRu: "Картины и шарфы на шёлке, созданные в технике батик.",
    icon: "🧣",
  },
  umbrella: {
    // ← НОВАЯ КАТЕГОРИЯ
    titleEn: "Umbrella Painting",
    titleRu: "Роспись зонтов",
    descEn: "Hand-painted umbrellas — unique works of art for rainy days.",
    descRu:
      "Зонты ручной росписи — уникальные произведения искусства для дождливых дней.",
    icon: "☂️",
  },
  painting: {
    titleEn: "Painting",
    titleRu: "Живопись",
    descEn: "Works in acrylic, oil, alcohol ink and watercolour.",
    descRu: "Работы в технике акрил, масло, алкогольные чернила и акварель.",
    icon: "🎨",
  },
  decorative: {
    titleEn: "Decorative",
    titleRu: "Декоративные работы",
    descEn: "Decorative panels and reliefs made from plaster.",
    descRu: "Декоративные панно и рельефы из гипса.",
    icon: "🏺",
  },
};

export const projectCategories = {
  illustration: {
    titleEn: "Illustration",
    titleRu: "Иллюстрация",
    descEn: "Book illustrations and series.",
    descRu: "Иллюстрации для книг и серии работ.",
    icon: "📖",
  },
  graphic: {
    titleEn: "Graphic Design",
    titleRu: "Графический дизайн",
    descEn:
      "Catalogues, booklets, posters, packaging, logos and technical drawings.",
    descRu:
      "Каталоги, буклеты, плакаты, упаковка, логотипы и технические чертежи.",
    icon: "✦",
  },
  mural: {
    titleEn: "Mural & Decoration",
    titleRu: "Роспись и декорации",
    descEn: "Wall paintings, interior art, decoration design and film posters.",
    descRu:
      "Роспись стен, интерьерное искусство, оформление декораций и плакаты к фильмам.",
    icon: "🎭",
  },
};

// ──────────────────────────────────────
// ВСЕ РАБОТЫ — добавляй сюда новые объекты
// ──────────────────────────────────────
export const galleryWorks = [
  {
    id: "batik-1",
    category: "batik",
    title: "Silk Batik I",
    titleRu: "Батик на шёлке I",
    year: "2010",
    sub: "Still Life with Bottles I",
    subRu: "Натюрморт с бутылками I",
    available: true,
    print: true,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_1.jpg",
  },
  {
    id: "batik-2",
    category: "batik",
    title: "Silk Batik II",
    titleRu: "Батик на шёлке II",
    year: "2010",
    sub: "Still Life with Bottles II",
    subRu: "Натюрморт с бутылками II",
    available: false,
    print: true,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_2.jpg",
  },
  {
    id: "batik-3",
    category: "batik",
    title: "Silk Batik III",
    titleRu: "Батик на шёлке III",
    year: "2010",
    sub: "Still Life with Bottles III",
    subRu: "Натюрморт с бутылками III",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_3.jpg",
  },
  {
    id: "batik-4",
    category: "batik",
    title: "Silk Batik IV",
    titleRu: "Батик на шёлке IV",
    year: "2010",
    sub: "Still Life with Bottles IV",
    subRu: "Натюрморт с бутылками IV",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_4.jpg",
  },
  {
    id: "batik-5",
    category: "batik",
    title: "Silk Batik V",
    titleRu: "Батик на шёлке V",
    year: "2010",
    sub: "Abstraction",
    subRu: "Абстракция",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_5.jpg",
  },
  {
    id: "batik-6",
    category: "batik",
    title: "Silk Batik VI",
    titleRu: "Батик на шёлке VI",
    year: "2010",
    sub: "Houses I",
    subRu: "Дома I",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_6.jpg",
  },
  {
    id: "batik-7",
    category: "batik",
    title: "Silk Batik VII",
    titleRu: "Батик на шёлке VII",
    year: "2010",
    sub: "Houses II",
    subRu: "Дома II",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_7.jpg",
  },
  {
    id: "batik-8",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2010",
    sub: "Fairytale town I",
    subRu: "Сказочный город I",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_8.jpg",
  },
  {
    id: "batik-9",
    category: "batik",
    title: "Silk Batik IX",
    titleRu: "Батик на шёлке IX",
    year: "2010",
    sub: "Fairytale town II",
    subRu: "Сказочный город II",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_9.jpg",
  },
  {
    id: "batik-10",
    category: "batik",
    title: "Silk Batik X",
    titleRu: "Батик на шёлке X",
    year: "2010",
    sub: "Fairytale town III",
    subRu: "Сказочный город III",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_10.jpg",
  },
  {
    id: "batik-11",
    category: "batik",
    title: "Silk Batik XI",
    titleRu: "Батик на шёлке XI",
    year: "2010",
    sub: "Birds",
    subRu: "Птицы",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_11.jpg",
  },
  {
    id: "batik-12",
    category: "batik",
    title: "Silk Batik XII",
    titleRu: "Батик на шёлке XII",
    year: "2010",
    sub: "Street",
    subRu: "Улица",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_12.jpg",
  },
  {
    id: "batik-13",
    category: "batik",
    title: "Silk Batik XIII",
    titleRu: "Батик на шёлке XIII",
    year: "2009",
    sub: "Music I",
    subRu: "Музыка I",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_13.jpg",
  },
  {
    id: "batik-14",
    category: "batik",
    title: "Silk Batik XIV",
    titleRu: "Батик на шёлке XIV",
    year: "2009",
    sub: "Music II",
    subRu: "Музыка II",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_14.jpg",
  },
  {
    id: "batik-15",
    category: "batik",
    title: "Jeans Batik XV",
    titleRu: "Батик на джинсе XV",
    year: "2011",
    sub: "Meadow grasses",
    subRu: "Луговые травы",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_15.jpg",
  },
  {
    id: "batik-16",
    category: "batik",
    title: "Silk Batik XVI",
    titleRu: "Батик на шёлке XVI",
    year: "2009",
    sub: "The Virgin Mary",
    subRu: "Дева Мария",
    available: false,
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_16.jpg",
  },
  {
    id: "batik-17",
    category: "batik",
    title: "Silk Batik XVII",
    titleRu: "Батик на шёлке XVII",
    year: "2010",
    sub: "Faces",
    subRu: "Лица",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_17.jpg",
  },
  {
    id: "batik-18",
    category: "batik",
    title: "Jeans Batik XVIII",
    titleRu: "Батик на джинсе XVIII",
    year: "2011",
    sub: "Eternity",
    subRu: "Вечность",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_18.jpg",
  },
  {
    id: "batik-19",
    category: "batik",
    title: "Silk Batik XIX",
    titleRu: "Батик на шёлке XIX",
    year: "2010",
    sub: "Pear Orchard",
    subRu: "Грушевый сад",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_19.jpg",
  },
  {
    id: "batik-20",
    category: "batik",
    title: "Silk Batik XX",
    titleRu: "Батик на шёлке XX",
    year: "2010",
    sub: "Elephants",
    subRu: "Слоны",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_20.jpg",
  },
  {
    id: "batik-21",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_21.jpg",
  },
  {
    id: "batik-22",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_22.jpg",
  },
  {
    id: "batik-23",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_23.jpg",
  },
  {
    id: "batik-24",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_24.jpg",
  },
  {
    id: "batik-25",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_25.jpg",
  },
  {
    id: "batik-26",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_26.jpg",
  },
  {
    id: "batik-27",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_27.jpg",
  },
  {
    id: "batik-28",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_28.jpg",
  },
  {
    id: "batik-29",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_29.jpg",
  },
  {
    id: "batik-30",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_30.jpg",
  },
  {
    id: "batik-31",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_31.jpg",
  },
  {
    id: "batik-32",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_32.jpg",
  },
  {
    id: "batik-33",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_33.jpg",
  },
  {
    id: "batik-34",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_34.jpg",
  },
  {
    id: "batik-35",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_35.jpg",
  },
  {
    id: "batik-36",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_36.jpg",
  },
  {
    id: "batik-37",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_37.jpg",
  },
  {
    id: "batik-38",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_38.jpg",
  },
  {
    id: "batik-39",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_39.jpg",
  },
  {
    id: "batik-40",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_40.jpg",
  },
  {
    id: "batik-41",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_41.jpg",
  },
  {
    id: "batik-42",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_42.jpg",
  },
  {
    id: "batik-43",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_43.jpg",
  },
  {
    id: "batik-44",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_44.jpg",
  },
  {
    id: "batik-45",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_45.jpg",
  },
  {
    id: "batik-46",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_46.jpg",
  },
  {
    id: "batik-47",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_47.jpg",
  },
  {
    id: "batik-48",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_48.jpg",
  },
  {
    id: "batik-49",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_49.jpg",
  },
  {
    id: "batik-50",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_50.jpg",
  },
  {
    id: "batik-51",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_51.jpg",
  },
  {
    id: "batik-52",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_52.jpg",
  },
  {
    id: "batik-53",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_53.jpg",
  },
  {
    id: "batik-54",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_54.jpg",
  },
  {
    id: "batik-55",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_55.jpg",
  },
  {
    id: "batik-56",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_56.jpg",
  },
  {
    id: "batik-57",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_57.jpg",
  },
  {
    id: "batik-58",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_58.jpg",
  },
  {
    id: "batik-59",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_59.jpg",
  },
  {
    id: "batik-60",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_60.jpg",
  },
  {
    id: "batik-61",
    category: "batik",
    title: "Silk Batik VIII",
    titleRu: "Батик на шёлке VIII",
    year: "2021",
    sub: "Painting",
    subRu: "Картина",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/BK_61.jpg",
  },
  // РОСПИСЬ ЗОНТОВ
  {
    id: "umbrella-1",
    category: "umbrella",
    title: "Umbrella I",
    titleRu: "Зонт I",
    year: "2024",
    sub: "Hand-painted umbrella",
    subRu: "Роспись зонта",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/Umbrella/Umb_1.jpg",
  },
  {
    id: "umbrella-2",
    category: "umbrella",
    title: "Umbrella II",
    titleRu: "Зонт II",
    year: "2024",
    sub: "Hand-painted umbrella",
    subRu: "Роспись зонта",
  },

  /////////////////////////////
  // { id: 'batik-1', category: 'batik', available: true },
  // { id: 'batik-2', category: 'batik',  available: true },
  // { id: 'batik-3', category: 'batik',  available: false }, // уже продана

  //////////////////////

  // painting
  {
    id: "painting-1",
    category: "painting",
    title: "Acrylic Series I",
    titleRu: "Акрил I",
    year: "2024",
    sub: "Acrylic on canvas",
    subRu: "Акрил на холсте",
  },
  {
    id: "painting-2",
    category: "painting",
    title: "Oil Study",
    titleRu: "Масляный этюд",
    year: "2024",
    sub: "Oil on canvas",
    subRu: "Масло на холсте",
  },
  {
    id: "painting-3",
    category: "painting",
    title: "Alcohol Ink I",
    titleRu: "Алкогольные чернила I",
    year: "2023",
    sub: "Alcohol ink",
    subRu: "Алкогольные чернила",
  },
  {
    id: "painting-4",
    category: "painting",
    title: "Watercolour Series",
    titleRu: "Акварельная серия",
    year: "2022",
    sub: "Watercolour",
    subRu: "Акварель",
  },

  {
    id: "decorative-1",
    category: "decorative",
    title: "Plaster Relief I",
    titleRu: "Гипсовый рельеф I",
    year: "2024",
    sub: "Plaster",
    subRu: "Гипс",
  },
  {
    id: "decorative-2",
    category: "decorative",
    title: "Decorative Panel",
    titleRu: "Декоративное панно",
    year: "2022",
    sub: "Plaster",
    subRu: "Гипс",
  },
];
// ...............................projectWorks/mozart 1

export const projectWorks = [
  {
    id: "illustration-Mozart",
    category: "illustration",
    slug: "mozart",
    title: "Mozart",
    titleRu: "Моцарт",
    year: "2023",
    sub: "Book illustration",
    subRu: "Книжная иллюстрация",
    desc: "A children's illustrated book about Mozart the canary. A bilingual book for children, written by Angelika Nikulina, with illustrations and layout design by Daria Morozova.",
    descRu:
      "Детская иллюстрированная книга о канарейке Моцарте. Билингвальная книга для детей, автор — Анжелика Никулина, иллюстрации и вёрстка-дизайн — Морозова Дарья.",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_books%201%202.jpg",
    pages: [
      {
        id: 1,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_1.jpg",
        caption: "Page 1",
        captionRu: "Cтраница 1",
      },
      {
        id: 2,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_2.jpg",
        caption: "Page 16-17",
        captionRu: "Cтраница 16-17",
      },
      {
        id: 3,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_3.jpg",
        caption: "Page 8-9",
        captionRu: "Cтраница 8-9",
      },
      {
        id: 4,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_4.jpg",
        caption: "Page 6-7",
        captionRu: "Cтраница 6-7",
      },
      {
        id: 5,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_5.jpg",
        caption: "Page 42",
        captionRu: "Cтраница 42",
      },
      {
        id: 6,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_6.jpg",
        caption: "Page 13",
        captionRu: "Cтраница 13",
      },
      {
        id: 7,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_7.jpg",
        caption: "Page 38-39",
        captionRu: "Cтраница 38-39",
      },
      {
        id: 8,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_8.jpg",
        caption: "Page 44-45",
        captionRu: "Cтраница 44-45",
      },
      {
        id: 9,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_9.jpg",
        caption: "Page 30",
        captionRu: "Cтраница 30",
      },

      {
        id: 10,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_10.jpg",
        caption: "Page 14-15",
        captionRu: "Cтраница 14-15",
      },
      {
        id: 11,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_11.jpg",
        caption: "Page 28-29",
        captionRu: "Cтраница 28-29",
      },
      {
        id: 12,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_12.jpg",
        caption: "Page 50",
        captionRu: "Cтраница 50",
      },
      {
        id: 13,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_13.jpg",
        caption: "Page 34-35",
        captionRu: "Cтраница 34-35",
      },
      {
        id: 14,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_14.jpg",
        caption: "Page 26-27",
        captionRu: "Cтраница 26-27",
      },
      {
        id: 15,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/cover_mozart.jpg",
        caption: "Cover",
        captionRu: "Обложка",
      },
      {
        id: 16,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart/mozart_D.jpg",
      },
    ],
  },
  // ...............................mozart 2
  {
    id: "illustration-Mozart 2",
    category: "illustration",
    slug: "mozart-friends",
    title: "Mozart and His Friends",
    titleRu: "Моцарт и его друзья",
    year: "2024",
    sub: "Book illustration",
    subRu: "Книжная иллюстрация",
    desc: "A sequel to Mozart — the canary meets new friends. Written by Angelika Nikulina, with illustrations and layout design by Daria Morozova.",
    descRu:
      "Продолжение истории о канарейке Моцарте и его новых друзьях. Автор — Анжелика Никулина, иллюстрации и вёрстка-дизайн — Морозова Дарья.",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_books%201.jpg",
    pages: [
      {
        id: 1,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_2.jpg",
        caption: "Page 28",
        captionRu: "Cтраница 28",
      },
      {
        id: 2,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_1.jpg",
        caption: "Page 2-3",
        captionRu: "Cтраница 2-3",
      },
      {
        id: 3,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_3.jpg",
        caption: "Page 22-23",
        captionRu: "Cтраница 22-23",
      },
      {
        id: 4,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_5.jpg",
        caption: "Page 31",
        captionRu: "Cтраница 31",
      },
      {
        id: 5,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_4.jpg",
        caption: "Page 36-37",
        captionRu: "Cтраница 36-37",
      },
      {
        id: 6,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_7.jpg",
        caption: "Page 20-21",
        captionRu: "Cтраница 20-21",
      },
      {
        id: 7,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_13.jpg",
        caption: "Page 17",
        captionRu: "Cтраница 17",
      },
      {
        id: 8,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_9.jpg",
        caption: "Page 32-33",
        captionRu: "Cтраница 32-33",
      },
      {
        id: 9,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_10.jpg",
        caption: "Page 6-7",
        captionRu: "Cтраница 6-7",
      },
      {
        id: 10,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_11.jpg",
        caption: "Page 9",
        captionRu: "Cтраница 9",
      },
      {
        id: 11,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_8.jpg",
        caption: "Page 38",
        captionRu: "Cтраница 38",
      },
      {
        id: 12,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_12.jpg",
        caption: "Page 44-45",
        captionRu: "Cтраница 44-45",
      },
      {
        id: 13,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/cover_mozart2.jpg",
        caption: "Cover",
        captionRu: "Обложка",
      },
      {
        id: 14,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart_books.jpg",
        caption: "Books",
        captionRu: "Книги",
      },
      {
        id: 15,
        image:
          "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart_lesezeichen.jpg",
        caption: "Lesezeichen",
        captionRu: "Закладка",
      },
    ],
  },
  // ...............................inner-instincts
  {
    id: "illustration-3",
    category: "illustration",
    slug: "inner-instincts",
    title: "Inner Instincts",
    titleRu: "Внутренние инстинкты",
    year: "2024",
    sub: "Illustration project",
    subRu: "Иллюстрационный проект",
    desc: "A concept project exploring animal instincts through illustration, postcards and apparel.",
    descRu:
      "Концептуальный проект об инстинктах животных — иллюстрации, открытки, футболки.",
    image:
      "https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/illustration%20books/mozart%202/mozart%202_books%201.jpg",
    pages: [],
  },

  // ...............................Graphic Design
  {
    id: "graphic-1",
    category: "graphic",
    slug: "brand-identity",
    title: "Brand Identity",
    titleRu: "Айдентика бренда",
    year: "2024",
    sub: "Logo & Identity",
    subRu: "Логотип и айдентика",
    pages: [],
  },
  {
    id: "graphic-2",
    category: "graphic",
    slug: "product-catalogue",
    title: "Product Catalogue",
    titleRu: "Каталог продукции",
    year: "2024",
    sub: "Catalogue",
    subRu: "Каталог",
    pages: [],
  },
  {
    id: "graphic-3",
    category: "graphic",
    slug: "poster-series",
    title: "Poster Series",
    titleRu: "Серия плакатов",
    year: "2023",
    sub: "Poster design",
    subRu: "Дизайн плакатов",
    pages: [],
  },
  {
    id: "graphic-4",
    category: "graphic",
    slug: "packaging-design",
    title: "Packaging Design",
    titleRu: "Дизайн упаковки",
    year: "2023",
    sub: "Packaging",
    subRu: "Упаковка",
    pages: [],
  },
  {
    id: "graphic-5",
    category: "graphic",
    slug: "technical-drawings",
    title: "Technical Drawings",
    titleRu: "Технические чертежи",
    year: "2022",
    sub: "Technical",
    subRu: "Технический",
    pages: [],
  },

  // ...............................Mural & Decoration
  {
    id: "mural-1",
    category: "mural",
    slug: "interior-art",
    title: "Interior Art & Wall Painting",
    titleRu: "Роспись стен и интерьеры",
    year: "2023",
    sub: "Wall painting & Decoration",
    subRu: "Роспись стен и декорации",
    desc: "Interior paintings, wall art, decoration design and film poster illustrations.",
    descRu:
      "Роспись интерьеров, декоративные стены, оформление декораций и плакаты к фильмам.",
    pages: [],
  },
];
