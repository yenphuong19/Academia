import Header from "../../components/Header/index";
import Benefit from "../../components/Benefit";
import Counter from "../../components/Counter";
import Intro from "../../components/Intro";
import Section from "../../components/Section";
import Register from "../../components/Register";
import Footer from "../../components/Footer";


function DefaultLayout() {
  return (
    <div>
      <Header />

      {/* Router */}
      <Intro />
      <Benefit />
      <Counter />
      <Section />
      <Register />

      <Footer />
    </div>
  );
}

export default DefaultLayout;
