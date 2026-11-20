import comImg from "../assets/image-computer.png";
export function Trackpage() {
  return (
    <section className="px-5 md:p-0 flex flex-col gap-10 text-center">
      <div className="flex flex-col gap-5 md:items-center">
        <h2 className="text-xl font-bold text-gray-700">
          Keep track of your snippets
        </h2>
        <p className="text-sm text-center text-gray-500 md:max-w-120">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <article className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <img
          className="max-[100px]:max-w-100"
          src={comImg}
          alt="computer image"
        />
        <div className="flex flex-col gap-10 md:gap-15 md:justify-center md:max-w-90 md:text-start">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-700">
              Quick Search
            </h3>
            <p className="text-[14px] text-gray-500">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-700">iCloud Sync</h3>
            <p className="text-[14px] text-gray-500">
              instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-700">
              Complete History
            </h3>
            <p className="text-[14px] text-gray-500">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
