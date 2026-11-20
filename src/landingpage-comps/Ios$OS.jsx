export function IosOs() {
  return (
    <section className="px-5 flex flex-col gap-10 md:gap-10 md:items-center">
      <div className="text-gray-700 flex flex-col text-center gap-5 md:max-w-140">
        <h1 className="font-bold text-2xl">Clipboard for iOS and Mac OS</h1>
        <p className="text-sm text-gray-500">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 md:max-w-120">
        <button className="md:w-1/2 cursor-pointer font-semibold text-white shadow-[0_3px_1px_hsl(171_45%_44%)] bg-green-500 p-2 rounded-full">
          Download for iOS
        </button>
        <button className="md:w-1/2 cursor-pointer text-white rounded-full bg-blue-500 p-2 font-semibold shadow-[0_2px_1px_hsl(233_100%_39%)] ">
          Download for Mac
        </button>
      </div>
    </section>
  );
}
