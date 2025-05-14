import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Contact Us to Developed modern web apps with React, TypeScript, and Tailwind!
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
