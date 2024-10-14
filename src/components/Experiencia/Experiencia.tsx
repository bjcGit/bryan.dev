export const Experiencia = () => {
    return (
      <section className="text-center mt-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-4">Experiencia laboral</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         
          <div className="bg-black text-green-500 border border-green-500 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">DESARROLLADOR FULLSTACK</h4>
            <p className="italic">SMART TMT - Junio de 2023 - Junio de 2024</p>
            <ul className="list-disc list-inside mt-2 text-left">
              <li>Soporte en la herramienta de Power BI</li>
              <li>Creación de Sentencias de SQL</li>
              <li>Soporte en aplicativos elaborados en REACT, REACT NATIVE, Java</li>
            </ul>
          </div>
  
         
          <div className="bg-black text-green-500 border border-green-500 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">DESARROLLADOR FULLSTACK</h4>
            <p className="italic">EMCALI, Prestador de Servicio - Abril de 2022 - Junio de 2024</p>
            <ul className="list-disc list-inside mt-2 text-left">
              <li>Desarrollo de aplicaciones en (ANGULAR, REACT, REACT NATIVE)</li>
              <li>Creación de servidores con NESTJS, EXPRESS JS</li>
              <li>Configuración de servidores en AWS EC2, S3, API GATEWAY</li>
              <li>Conexiones a base de datos con MySQL, PostgreSQL, DynamoDB, MongoDB, Oracle</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
