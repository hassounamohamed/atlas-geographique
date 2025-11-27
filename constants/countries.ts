import { CountryData } from '@/models/country';

export const COUNTRIES: CountryData[] = [
  { id: 'fr', name: 'France', capital: 'Paris', population: '67 millions', area: '643 801 km²', languages: 'Français', image: require('@/assets/images/france.jpg') },
  { id: 'tn', name: 'Tunisie', capital: 'Tunis', population: '12 millions', area: '163 610 km²', languages: 'Arabe', image: require('@/assets/images/Tunisia_Big.png') },
  { id: 'br', name: 'Brésil', capital: 'Brasília', population: '215 millions', area: '8 515 767 km²', languages: 'Portugais', image: require('@/assets/images/Bresil.jpeg') },
  { id: 'it', name: 'Italie', capital: 'Rome', population: '59 millions', area: '301 340 km²', languages: 'Italien', image: require('@/assets/images/Italie.jpg') },
  { id: 'ca', name: 'Canada', capital: 'Ottawa', population: '39 millions', area: '9 984 670 km²', languages: 'Anglais', image: require('@/assets/images/canda.jpg') },
  { id: 'au', name: 'Australie', capital: 'Canberra', population: '26 millions', area: '7 692 024 km²', languages: 'Anglais', image: require('@/assets/images/Australie.jpg') },
  { id: 'de', name: 'Allemagne', capital: 'Berlin', population: '84 millions', area: '357 022 km²', languages: 'Allemand', image: require('@/assets/images/Allemagne.jpg') },
  { id: 'es', name: 'Espagne', capital: 'Madrid', population: '47 millions', area: '505 990 km²', languages: 'Espagnol', image: require('@/assets/images/Espagne.jpg') },
  { id: 'za', name: 'Afrique du Sud', capital: 'Pretoria', population: '60 millions', area: '1 219 090 km²', languages: 'Afrikaans', image: require('@/assets/images/Afrique_du_Sud.webp') },
];
