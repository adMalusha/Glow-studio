export const COLORS = {
  background: '#FDF7F5', // Soft Warm Cream
  text: '#5E503F',       // Deep Cocoa
  nude: '#F4D3D3',       // Soft Blush
  blush: '#F9E5E5',      // Dusty Rose
  gold: '#C98B73',       // Warm Terracotta / Rose Gold (Bubbly Belly Style)
  white: '#FFFFFF',
};

export const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3dR4ewTh5C4XlGBSMPqm9LhYw6viR-jxFS4UIV2gEl3nuB_xTOwiKSw0ZeDtr_-d7HHuE19Wei";

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sa=X&sca_esv=1cf3b1e2cbd119f3&sxsrf=ANbL-n4F6YTlUG0Jrz_T4_9QvayOwB_wmQ:1770022471712&q=Glow+Studio+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NTczMTGzMDcxMLM0MDAzs7Aw28DI-IpR2D0nv1whuKQ0JTNfISi1LDO1vHgRKzZRAMXl_ZdGAAAA&rldimm=5764468740690066886&tbm=lcl&hl=nl-BE&ved=2ahUKEwjz2K7Ft7qSAxWy1wIHHVaZBzYQ9fQKegQIVxAI&biw=1920&bih=945&dpr=1&aic=0#lkt=LocalPoiReviews";

export const REVIEWS = [
  {
    id: '1',
    name: 'A. Verbeken',
    text: 'Anouck is een heel sympathieke en spontane dame die je meteen op je gemak doet voelen. Voor aanvang van de behandeling kreeg ik uitleg over de procedure en hoe alles zou verlopen. Haar aanpak is zeer professioneel maar toch ongedwongen en aangenaam. Het resultaat van de behandeling is top! Ik ben erg blij met het resultaat en zal zeker en vast nog terugkomen :)!',
    rating: 5
  },
  {
    id: '2',
    name: 'I. De Wolf',
    text: 'Ik ben zeer tevreden over mijn bezoek aan Glow Studio, Anouck is een aangename jonge dame met een professionele aanpak, een toppertje, een aanrader!',
    rating: 5
  },
  {
    id: '3',
    name: 'K. Arys',
    text: 'Supervriendelijk, duidelijke uitleg! Ze informeert goed op voorhand welke behandeling je voor, tijdens en na de oksel-lasering moet doen. Anouck is een topvrouw! Ik kom zeker terug!',
    rating: 5
  },
  {
    id: '4',
    name: 'E. Demuynck',
    text: 'Anouck is niet alleen heel professioneel maar vooral zacht en vriendelijk. Heb mijn tanden laten witten en zeer blij met het advies en de behandeling. Een aanrader!',
    rating: 5
  }
];

export const TREATMENTS_INFO = {
  laser: {
    title: 'Laserontharing',
    description: 'Laserontharing biedt een langdurige oplossing voor ongewenste haargroei, met aandacht voor comfort en veiligheid. Elke behandeling wordt afgestemd op jouw huid- en haartype.',
    benefits: ['100% Veilig voor de huid', 'Effectief op alle zones', 'Permanent resultaat'],
  },
  teeth: {
    title: 'Tanden witten',
    description: 'Tanden witten bij Glow Studio gebeurt zonder peroxide en volledig veilig. Zo bereiken we een natuurlijk stralend resultaat dat zacht is voor je tanden.',
    benefits: ['Zonder peroxide', 'Resultaatgericht en veilig', 'Direct zichtbaar resultaat'],
  },
  pregnancy: {
    title: '3D Zwangerschapsbeeldje',
    description: 'Met een 3D zwangerschapsbeeldje wordt jouw zwangerschap omgezet in een unieke, tastbare herinnering. Elk beeldje wordt met precisie en zorg op maat gemaakt.',
    benefits: ['Gedetailleerde 3D-scan', 'Diverse kleuren', 'Hoogwaardige afwerking'],
  }
};

export const PRICE_LISTS = {
  mannen: {
    title: "Laserontharing mannen",
    categories: [
      {
        name: "GELAAT",
        items: [
          { label: "Wenkbrauwen/Neus/Oren", price: 35 },
          { label: "Snor", price: 50 },
          { label: "Baard of neklijn", price: 60 },
          { label: "Baard volledig", price: 100 },
          { label: "Volledig gelaat", price: 140 },
        ]
      },
      {
        name: "BOVENLICHAAM",
        items: [
          { label: "Handen en vingers", price: 40 },
          { label: "Oksels", price: 70 },
          { label: "Schouders", price: 80 },
          { label: "Boven- of onderarmen", price: 90 },
          { label: "Boven- of onderrug", price: 100 },
          { label: "Armen volledig", price: 150 },
          { label: "Armen en handen", price: 170 },
          { label: "Rug volledig", price: 190 },
        ]
      }
    ]
  },
  vrouwen: {
    title: "Laserontharing vrouwen",
    categories: [
      {
        name: "GELAAT",
        items: [
          { label: "Wenkbrauwen/Neus/Oren", price: 35 },
          { label: "Bovenlip/Kin/Wangen", price: 40 },
          { label: "Hals", price: 50 },
          { label: "Bovenlip en kin", price: 60 },
          { label: "Volledig gelaat", price: 120 },
        ]
      },
      {
        name: "BOVENLICHAAM",
        items: [
          { label: "Kleine zone (Vingers/Tepels)", price: 35 },
          { label: "Handen/Buiklijn", price: 40 },
          { label: "Oksels", price: 70 },
          { label: "Schouders/Borsten", price: 80 },
          { label: "Onder- of bovenarmen", price: 80 },
          { label: "Onder- of bovenrug", price: 80 },
          { label: "Buik", price: 90 },
          { label: "Armen volledig", price: 140 },
          { label: "Armen en handen", price: 150 },
          { label: "Volledige rug", price: 150 },
        ]
      },
      {
        name: "ONDERLICHAAM",
        items: [
          { label: "Bilnaad", price: 40 },
          { label: "Bikinilijn met slip", price: 60 },
          { label: "Voeten en tenen", price: 70 },
          { label: "Billen", price: 80 },
          { label: "Bikinilijn volledig", price: 100 },
          { label: "Onder- of bovenbenen", price: 160 },
          { label: "Benen volledig", price: 290 },
        ]
      }
    ]
  },
  tanden: {
    title: "Tanden witten",
    categories: [
      {
        name: "SPARKLE SMILE",
        items: [{ label: "20 MIN - TOUCH UP", price: 40 }]
      },
      {
        name: "SPARKLE SMILE EXTRA",
        items: [{ label: "40 MIN", price: 65 }]
      },
      {
        name: "SPARKLE WHITE SMILE",
        items: [{ label: "60 MIN - OPPERVLAKKIGE VERKLEURING", price: 90 }]
      },
      {
        name: "SPARKLE DIAMOND SMILE",
        items: [{ label: "80 MIN - AANGERADEN BIJ ROKERS", price: 120 }]
      }
    ]
  },
  pregnancy: {
    title: "3D Zwangerschapsbeeldje",
    categories: [
      {
        name: "12 CM",
        items: [
          { label: "NATUREL BELLY", price: 230 },
          { label: "BRONZE BELLY", price: 270 }
        ]
      },
      {
        name: "15 CM",
        items: [
          { label: "NATUREL BELLY", price: 285 },
          { label: "BRONZE BELLY", price: 310 }
        ]
      },
      {
        name: "17 CM",
        items: [
          { label: "NATUREL BELLY", price: 325 },
          { label: "BRONZE BELLY", price: 350 }
        ]
      },
      {
        name: "19 CM",
        items: [
          { label: "NATUREL BELLY", price: 375 },
          { label: "BRONZE BELLY", price: 400 }
        ]
      }
    ]
  }
};