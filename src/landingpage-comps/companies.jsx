import google from "../assets/logo-google.png";
import ibm from "../assets/logo-ibm.png";
import microsoft from "../assets/logo-microsoft.png";
import hp from "../assets/logo-hp.png";
import vg from "../assets/logo-vector-graphics.png";
export function Companies() {
  return (
    <section className="px-5 md:p-0 flex flex-col md:flex-row md:justify-around md:mt-20 gap-15 md:gap-0 items-center">
      <img className="w-30" src={google} alt="google logo" />
      <img className="w-30" src={ibm} alt="ibm logo" />
      <img className="w-30" src={microsoft} alt="microsoft logo" />
      <img className="w-30" src={hp} alt="hp logo" />
      <img className="w-30" src={vg} alt="vector graphics" />
    </section>
  );
}
