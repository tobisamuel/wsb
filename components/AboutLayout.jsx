import Navbar from "./aboutnavbar";
import Footer from "./footer";

const PageLayout = ({ children }) => {
  return (
    <div>
      <nav className="md:px-[100px]">
        <Navbar />
      </nav>

      <div>{children}</div>

      <footer className="md:px-[100px]">
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
