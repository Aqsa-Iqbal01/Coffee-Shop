import Image from 'next/image';

const Home = () => {
  return (
    <div className="font-serif bg-slate-50">
      <header className="bg-slate-500 p-4 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-italic">Coffee Shop</h1>
          <div>
            <a href="#menu" className="mr-4 hover:underline">Menu</a>
            <a href="#about" className="mr-4 hover:underline">About Us</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <section 
        style={{ backgroundImage: "url('/images/coffee.jpg')" }} 
        className="text-center p-10 bg-gradient-to-r from-red-400 to-red-300 bg-cover bg-center h-screen"
      >
        <h1 className="text-5xl text-white font-bold mb-4 mt-12">Welcome to Our Coffee Shop</h1>
        <p className="mb-4 text-lg text-white">Experience the best coffee in town!</p>
        <button className="bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800 transition duration-300">
          Order Now
        </button>
      </section>

      <section id="menu" className="container mx-auto p-10 text-red-950">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Menu</h2>
        <ul className="list-disc pl-5 mb-8 text-lg">
          <li className="mb-2">Espresso - $3.00</li>
          <li className="mb-2">Cappuccino - $4.00</li>
          <li className="mb-2">Latte - $4.50</li>
          <li className="mb-2">Mocha - $5.00</li>
          <li className="mb-2">Americano - $3.50</li>
          <li className="mb-2">Cold Brew - $4.00</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['coffee1', 'coffee2', 'coffee3', 'coffee4', 'coffee5', 'coffee6'].map((coffee, index) => (
            <div key={index} className="relative w-full h-48">
              <Image
                src={`/images/${coffee}.jpg`}
                alt={`Coffee ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="text-center p-10">
        <h2 className="text-4xl font-bold mb-4 text-red-950">About Us</h2>
        <Image
          src="/images/coffee7.jpg"
          alt="Our Coffee Shop"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mb-12"
        />
        <p className="mb-4 text-lg max-w-2xl mx-auto">
          Welcome to our coffee shop! Established in 2020, we are passionate about serving the finest coffee from around the world.
          Our cozy environment is the perfect place to relax, catch up with friends, or work on your next big idea.
        </p>
        <p className="mb-4 text-lg max-w-2xl mx-auto">
          Our mission is to provide quality coffee and a delightful experience for all our customers.
          Whether you&apos;re a coffee connoisseur or just looking for a quick caffeine fix, we have something for everyone!
        </p>
      </section>

      <section id="contact" className="bg-gradient-to-r from-slate-400 to-slate-300 p-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
        <form className="flex flex-col max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <label className="mb-2" htmlFor="name">Name</label>
          <input className="border rounded p-2 mb-4 focus:outline-none focus:ring focus:ring-orange-500" type="text" id="name" required />

          <label className="mb-2" htmlFor="email">Email</label>
          <input className="border rounded p-2 mb-4 focus:outline-none focus:ring focus:ring-orange-500" type="email" id="email" required />

          <label className="mb-2" htmlFor="message">Message</label>
          <textarea className="border rounded p-2 mb-4 focus:outline-none focus:ring focus:ring-orange-500" id="message" required />

          <button className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition duration-300" type="submit">
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>Copyrights © 2024 | Aqsa Iqbal Coffee Shop</p>
      </footer>
    </div>
  );
};

export default Home;
