import BlogNavbar from "./blogNavbar";
import Footer from "./footer";

const BlogLayout = ({ children }) => {
  return (
    <>
      <nav className="px-[100px]">
        <BlogNavbar />
      </nav>

      <div>{children}</div>

      <footer className="px-[100px]">
        <Footer />
      </footer>
    </>
  );
};

export default BlogLayout;
