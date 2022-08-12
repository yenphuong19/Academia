import Header from "../../components/Header/index";
import Intro from "../../components/Section/Intro";

function DefaultLayout() {
  return (
    <div>
      <Header />

      {/* Router */}
      <Intro />
    </div>
  );
}

export default DefaultLayout;
