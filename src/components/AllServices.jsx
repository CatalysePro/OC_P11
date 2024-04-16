// AllServices.jsx
import React from 'react';
import '../style/AllServices.css';
import ServiceElement from './ServiceElement';

import chatIcon from '../pictures/icons/icon-chat.png';
import moneyIcon from '../pictures/icons/icon-money.png';
import securityIcon from '../pictures/icons/icon-security.png';

function AllServices() {
  const services = [
    {
      iconSrc: chatIcon,
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      iconSrc: moneyIcon,
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      iconSrc: securityIcon,
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {services.map((service, index) => (
        <ServiceElement
          key={index}
          iconSrc={service.iconSrc}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}

export default AllServices;
