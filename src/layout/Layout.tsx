import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col grow xl:ml-64 md:ml-64">
        <Header />
        <main className="grow p-4"></main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
