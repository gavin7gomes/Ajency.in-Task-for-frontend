import { FaPhoneAlt, FaMale, FaShip, FaFish, FaSwimmer, FaSnowboarding, FaCalendar } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Services',
    links: [
      { label: 'Jet Boating', icon: <FaShip />, url: '/' },
      { label: 'Snorkeling', icon: <FaFish />, url: '/' },
      { label: 'Scuba Diving', icon: <FaSwimmer />, url: '/' },
      { label: 'Jet Surfing', icon: <FaSnowboarding />, url: '/' },
    ],
  },
  {
    page: 'Blog',
    links: [
      { label: 'October', icon: <FaCalendar />, url: '/' },
      { label: 'November', icon: <FaCalendar />, url: '/' },
      { label: 'December', icon: <FaCalendar />, url: '/' },
      
    ],
  },
  {
    page: 'Contact',
    links: [
      { label: 'Call', icon: <FaPhoneAlt />, url: '/' },
      { label: 'Visit', icon: <FaMale />, url: '/' },
    ],
  },
];

export default sublinks;
