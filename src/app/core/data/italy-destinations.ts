import { Destination } from '../models/destination.model';

export const ITALY_DESTINATIONS: Destination[] = [
  {
    id: 'rome',
    number: '01',
    name: 'Rome',
    subtitle: 'The Eternal City',
    description: 'Walk through history in the Eternal City, where ancient ruins meet vibrant Italian life.',
    imageUrl: '/assets/images/Rome.jfif',
    linkText: 'Discover Rome →'
  },
  {
    id: 'venice',
    number: '02',
    name: 'Venice',
    subtitle: 'The City Of Canals',
    description: 'Lose yourself among canals, bridges and romantic streets in the floating city.',
    imageUrl: '/assets/images/Venice.jfif',
    linkText: 'Discover Venice →'
  },
  {
    id: 'florence',
    number: '03',
    name: 'Florence',
    subtitle: 'The Art City',
    description: 'Experience Renaissance art, beautiful architecture and authentic Tuscan culture.',
    imageUrl: '/assets/images/florence.jpg',
    linkText: 'Discover Florence →'
  },
  {
    id: 'milan',
    number: '04',
    name: 'Milan',
    subtitle: 'Fashion & Design Capital',
    description: 'Discover Italian fashion, modern design and the impressive Duomo.',
    imageUrl: '/assets/images/milan.jpg',
    linkText: 'Discover Milan →'
  },
  {
    id: 'amalfi',
    number: '05',
    name: 'Amalfi Coast',
    subtitle: 'Mediterranean Paradise',
    description: 'Enjoy dramatic cliffs, colorful villages and breathtaking Mediterranean views.',
    imageUrl: '/assets/images/amalfi.jpg',
    linkText: 'Discover Amalfi →'
  },
  {
    id: 'cinque-terre',
    number: '06',
    name: 'Cinque Terre',
    subtitle: 'Colorful Seaside Villages',
    description: 'Explore colorful seaside villages, hiking trails and spectacular landscapes.',
    imageUrl: '/assets/images/cinque-terre.jpg',
    linkText: 'Discover Cinque Terre →'
  }
];

export const POPULAR_DESTINATIONS = ITALY_DESTINATIONS.slice(0, 3);