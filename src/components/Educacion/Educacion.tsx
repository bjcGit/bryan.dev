
export const Educacion = () => {
  return (
    <section className="text-center mt-8">
    <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-4">Formación Académica</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Primera formación */}
      <div className="bg-black text-green-500 border border-green-500 p-4 rounded-lg shadow-md">
        <h4 className="text-lg font-bold">SENA</h4>
        <p className="italic">ADSI - Octubre 3 del 2020</p>
        <p className="mt-2 text-left">
          Tecnología en análisis y desarrollo de sistemas de información (ADSI) – Centro de Electricidad y
          Automatización Industrial CEAI. Servicio Nacional de Aprendizaje SENA.
        </p>
      </div>

      {/* Segunda formación */}
      <div className="bg-black text-green-500 border border-green-500 p-4 rounded-lg shadow-md">
        <h4 className="text-lg font-bold">CCED</h4>
        <p className="italic">Técnico - Diciembre del 2012</p>
        <p className="mt-2 text-left">
          Técnico en sistemas y administración de redes. CCED- Centro de capacitación y educación dirigida.
        </p>
      </div>
    </div>
  </section>
  )
}
