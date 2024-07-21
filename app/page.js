import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-cover text-white font-outfit tracking-wide">
      <div className='gradient-hero opacity-10 z-40'></div>
      <img src='/background.png' className='w-full h-full object-cover absolute mix-blend-screen' />
      {/* <div className='absolute  left-1/2 w-1/2 h-72 bg-white flex items-center justify-center transform -translate-x-1/2  bg-gradient-to-b from-blue-500 to-red-500'>asd</div> */}
      
      <div className='bg-neutral-950 bg-opacity-80 max-h-24 relative z-10'>
        <header className="flex items-center justify-between max-w-7xl mx-auto p-6 bg-gradient- from-purple-500 to-green-400">
          <div className="text-3xl font-bold"><img src='logo.png' alt="Logo"/></div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 cursor-pointer">About</a>
            <a href="#" className="hover:text-gray-400 cursor-pointer">Services</a>
            <a href="#" className="hover:text-gray-400 cursor-pointer">Process</a>
            <a href="#" className="hover:text-gray-400 cursor-pointer">Work</a>
            <a href="#" className="hover:text-gray-400 cursor-pointer">Pricing</a>
            <a href="#" className="hover:text-gray-400 cursor-pointer">FAQs</a>
          </nav>
          <button className="bg-transparent border border-blue-900 px-10 py-3 rounded-2xl text-lg hover:scale-110 transition cursor-pointer">Book a call</button>
        </header>
      </div>
      <main className="flex flex-col items-start justify-center max-w-7xl mx-auto text-left p-12">
        <div className='absolute top-1/3 2xl:top-1/4 '>
          <h1 className="text-4xl font-normal md:text-5xl lg:text-6xl mb-6">
            Empowering Lives Through <br /> Innovative <span className='font-bold underline decoration-violet-600 decoration-8 hover:scale-110 transition'>AI</span> Technologies.
          </h1>
          <p className="text-xl font-normal tracking-wide text-neutral-400 md:text-xl mb-8">
            Finding new horizons for visionaries to accelerate their innovation and progress.
          </p>
          <div className="flex gap-10">
            <button className="bg-violet-700 px-6 py-3 rounded-2xl font-normal text-xl hover:scale-110 transition cursor-pointer">Explore Our Services</button>
            <button className="bg-transparent border border--900 px-10 py-3 rounded-2xl text-lg hover:scale-110 transition cursor-pointer">Learn more</button>
          </div>
          <footer className="mt-24 text-gray-500">
            <div className="fade-out text-gradient text-2xl">
              From Ideas to Software Solutions <span className='text-black' >💡✨</span> From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 💡✨
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
