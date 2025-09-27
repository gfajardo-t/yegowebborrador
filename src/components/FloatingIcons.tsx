import React from 'react';

const FloatingIcons: React.FC = () => {
  const floatingButtons = [
    {
      href: 'https://wa.me/16692315122',
      icon: '💬',
      title: 'Comunícate al WhatsApp',
      position: 'bottom-5 right-5',
      bgColor: 'bg-green-500',
    },
    {
      href: 'https://meet.google.com/jbq-fyyi-fbk',
      icon: '📹',
      title: 'Full capacitación',
      position: 'bottom-20 right-5',
      bgColor: 'bg-blue-500',
    },
    {
      href: 'https://www.tiktok.com/@yegoenvivo',
      icon: '🎵',
      title: 'Todos los días de 6 a.m a 10 p.m',
      position: 'bottom-32 right-5',
      bgColor: 'bg-black',
    },
  ];

  return (
    <>
      {floatingButtons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed ${button.position} w-14 h-14 ${button.bgColor} rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-all duration-300 z-50 hover:shadow-xl`}
          title={button.title}
        >
          <span className="text-2xl">{button.icon}</span>
        </a>
      ))}
    </>
  );
};

export default FloatingIcons;

