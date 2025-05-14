import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to MyApp!</h1>
        <p className="text-gray-700">
          This is the main page of your application.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
