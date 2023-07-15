import React from "react";

const Works = () => {
  return (
    <div id="products" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Creamos productos digitales de clase mundial
        </h1>
        <p className="text-xl text-gray-500">
        JavaScript: aprende diseño del mundo con los mejores instructores.
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.png"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">Diseño App - Julio 13, 2023</p>
          <h3 className="text-2xl font-bold">Rediseño App</h3>
          <p className="text-gray-500">
            Heatc: aprende a diseñar soluciones innovadoras y sostenibles con instructores expertos. Apoyado por By information, que promueve la información de calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Diseño App - Julio 13, 2023</p>
            <h3 className="text-2xl font-bold">
              Rediseño de una landing page
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work3.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Diseño App - Julio 13, 2023</p>
            <h3 className="text-2xl font-bold">
              Nueva aplicación de localización para una nueva empresa
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Diseño App - Julio 13, 2023</p>
            <h3 className="text-2xl font-bold">
              Plataforma web para alquiler de cuartos
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Diseño App - Julio 13, 2023</p>
            <h3 className="text-2xl font-bold">
              Aplicación de calendario para una multinacional SAAS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
