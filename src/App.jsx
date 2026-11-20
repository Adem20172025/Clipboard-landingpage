import { Homepage } from "./landingpage-comps/heropage";
import mobileImg from "./assets/bg-header-desktop.png";
import destopImg from "./assets/bg-header-mobile.png";
import { Trackpage } from "./landingpage-comps/tracking";
import { Access } from "./landingpage-comps/access";
import { Workflow } from "./landingpage-comps/workflow";
import { Companies } from "./landingpage-comps/companies";
import { IosOs } from "./landingpage-comps/Ios$OS";
import { Footer } from "./landingpage-comps/Footer";
function App() {
  return (
    <main
      className="grid gap-25 bg-(image:--mobile-bg) bg-top-right bg-no-repeat bg-size-[50%_7%] md:bg-(image:--desktop-bg) md:bg-size-[100%_10%] min-w-screen"
      style={{
        "--mobile-bg": `url(${mobileImg})`,
        "--desktop-bg": `url(${destopImg})`,
      }}
    >
      <Homepage />
      <Trackpage />
      <Access />
      <Workflow />
      <Companies />
      <IosOs />
      <Footer />
    </main>
  );
}
export default App;
