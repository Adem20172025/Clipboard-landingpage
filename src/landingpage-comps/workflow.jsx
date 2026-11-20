import blacklist from "../assets/icon-blacklist.svg";
import ai from "../assets/icon-text.svg";
import preview from "../assets/icon-preview.svg";
export function Workflow() {
  return (
    <section className="px-5 text-center flex flex-col gap-15 items-center">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-700">
          Supercharge your workflow
        </h3>
        <p className="text-sm text-gray-500">
          We've got the tools to boost your productivity.
        </p>
      </div>
      <article className="flex flex-col gap-10 md:flex-row md:max-w-300 md:items-center">
        <div className="flex flex-col gap-4 items-center">
          <img className="size-8" src={blacklist} alt="blacklists icon" />
          <h4 className="text-xl font-bold text-gray-700">Create blacklists</h4>
          <p className="text-sm text-gray-500">
            Ensure sensitive information never makes it way to your clipboard by
            excluding certain sources.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img className="size-8" src={ai} alt="text icon" />
          <h4 className="text-xl font-bold text-gray-700">
            Plain text snippets
          </h4>
          <p className="text-sm text-gray-500">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img className="w-10" src={preview} alt="preveiw icon" />
          <h3 className="text-xl font-bold text-gray-700">Sneak preview</h3>
          <p className="text-sm text-gray-500">
            Quick preview of all snippets on your clipboard for easy access.
          </p>
        </div>
      </article>
    </section>
  );
}
