import { useState, useEffect } from 'react';
import { AboutMe, Educacion, Experiencia, Habilidades, Loader, Navbar, ProfileHeader, ProfileInfo } from "../components";


export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="min-h-screen bg-black text-green-500">
      <Navbar />
      <main className="p-8">
        <ProfileHeader />
        <ProfileInfo />
        <AboutMe />
        <hr className='border-green-500 my-8' />
        <Habilidades/>
        <hr className='border-green-500 my-8' />
        <Experiencia/>
        <hr className='border-green-500 my-8' />
        <Educacion/>
      </main>
    </div>
  );
};
