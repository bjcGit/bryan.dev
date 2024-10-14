export const ProfileHeader = () => {
  return (
    <div
      className="relative h-40 sm:h-48 md:h-64 lg:h-80 xl:h-72 rounded-lg text-green-500" 
      style={{
        boxShadow: '0 4px 10px rgba(0, 255, 0, 0.3)',
      }}
    >
     
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url('/mat.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <img
          src="/fotico.jpg"
          alt="Profile"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-lg"
          style={{ boxShadow: '0 4px 15px rgba(0, 255, 0, 0.5)' }}
        />
      </div>
    </div>
  );
}
