import Footer from "./footer";
import Navbar from "./aboutnavbar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <nav className="px-[100px]">
        <Navbar />
      </nav>

      <div>{children}</div>

      <footer className="px-[100px]">
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
