import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import logo from "../assets/logo.svg";
export function Footer() {
  return (
    <footer className="min-w-full flex flex-col md:flex-row md:justify-around items-center gap-7  py-10 bg-gray-500/10">
      <div className="flex flex-col md:flex-row items-center gap-7 md:gap-30 sm:gap-15">
        <img className="size-12" src={logo} alt="logo icon" />
        <article className="flex flex-col md:flex-row md:gap-20 gap-5">
          <div className="flex flex-col gap-5 items-center">
            <a className="text-md font-semibold text-gray-500/75" href="#">
              FAQs
            </a>
            <a className="text-md font-semibold text-gray-500/75" href="#">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <a className="text-md font-semibold text-gray-500/75" href="#">
              Privacy Policy
            </a>
            <a className="text-md font-semibold text-gray-500/75" href="#">
              Press Kit
            </a>
          </div>
          <a className="text-md font-semibold text-gray-500/75" href="#">
            Install Guide
          </a>
        </article>
      </div>
      <div className="flex gap-7">
        <img
          className="size-5 cursor-pointer"
          src={facebook}
          alt="facebook icon"
        />
        <img
          className="size-5 cursor-pointer"
          src={twitter}
          alt="twitter icon"
        />
        <img
          className="size-5 cursor-pointer"
          src={instagram}
          alt="instagram icon"
        />
      </div>
    </footer>
  );
}
