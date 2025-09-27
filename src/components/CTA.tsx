import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra comunidad y descubre todas las oportunidades que tenemos para ti.
          </p>
          <button className="btn-primary bg-white text-primary hover:bg-bg-light hover:text-primary-dark text-lg px-8 py-4">
            Registrarse Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

