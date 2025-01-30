export const ProfileInfo = () => {
  return (
    <div className="text-center mt-16 sm:mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-500">Bryan Jimenez Calambas</h2>
      <p className="text-sm sm:text-base text-green-400 mt-2">Desarrollador <span className="font-bold uppercase">FullStack</span></p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 my-6">
        <div className="text-center">
          <h3 className="font-semibold text-green-500 text-lg">7</h3>
          <p className="text-green-400 text-sm">Proyectos</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-green-500 text-lg">3</h3>
          <p className="text-green-400 text-sm">Empresas</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-green-500 text-lg">5</h3>
          <p className="text-green-400 text-sm">Despliegues</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-green-500 text-lg">4a</h3>
          <p className="text-green-400 text-sm">Experiencia</p>
        </div>
      </div>
    </div>
  );
};
