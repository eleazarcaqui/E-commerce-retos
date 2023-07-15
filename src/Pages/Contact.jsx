import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <p className="mb-2">¡Gracias por tu interés en contactarnos!</p>
      <p className="mb-4">Puedes comunicarte con nosotros a través de los siguientes medios:</p>
      <ul className="list-disc pl-6">
        <li>Teléfono: +123456789</li>
        <li>Email: info@example.com</li>
        <li>Dirección: Calle Principal 123, Ciudad</li>
      </ul>
    </section>
  );
};

export default Contact;