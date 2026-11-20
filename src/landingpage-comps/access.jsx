import anywhere from "../assets/image-devices.png";
export function Access() {
  return (
    <section className="px-5 text-center flex flex-col gap-10 md:items-center">
      <article className="md:max-w-120 flex flex-col gap-4">
        <h3 className="text-xl text-gray-700 font-bold">Access Clipboard Anywhere</h3>
        <p className="text-sm text-gray-500">
          Whether you're on the go, or at your computer, you can access all your
          clipboard snippets in a few simple clicks.
        </p>
      </article>
      <img className="size-fit" src={anywhere} alt="any devices" />
    </section>
  );
}
