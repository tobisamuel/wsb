import Footer from "./footer";
import PlainNav from "./plainNav";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="px-[100px]">
        <PlainNav />
      </nav>

      <div>{children}</div>

      <footer className="px-[100px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
