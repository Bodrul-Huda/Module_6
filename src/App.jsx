import "../src/assets/css/index.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function App() {
  return (
    <>
      <Header name="My<App/>" />
      <Content />
      <Footer name="My<App/>" />
    </>
  );
}
