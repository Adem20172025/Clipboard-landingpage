import logo from "../assets/logo.svg";
export function Homepage() {
  return (
    <section className=" px-5 flex flex-col gap-10 items-center pt-20">
      <img className="size-25" src={logo} alt="my logo" />
      <div className="text-gray-700 flex flex-col text-center gap-5">
        <h1 className="font-bold text-2xl md:text-3xl">A history of everything you copy</h1>
        <p className="text-sm text-gray-500 md:max-w-120">
          Clipboard allows you to track and organize everything you copy.
          instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center w-full gap-4 md:max-w-110">
        <button className="cursor-pointer font-semibold text-white shadow-[0_3px_1px_hsl(171_45%_44%)] bg-green-500 p-2 rounded-full md:w-1/2">
          Download for iOS
        </button>
        <button className="cursor-pointer text-white rounded-full bg-blue-500 p-2 font-semibold shadow-[0_2px_1px_hsl(233_100%_39%)] md:w-1/2">
          Download for Mac
        </button>
      </div>
    </section>
  );
}
