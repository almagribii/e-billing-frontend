import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col grow xl:ml-64 md:ml-64">
        <Header />
        <main className="grow p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
