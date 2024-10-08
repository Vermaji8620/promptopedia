import Link from "next/link";

const Form = ({ type, post, setPost, submiting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} </span>Post
      </h1>
      <p className="desc text-left max-w-md">
        {type} and Share amazing prompts with the world and let your imagination
        run wild with any AI powered platform
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt{" "}
          </span>

          <textarea
            name=""
            id=""
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Right your prompt here"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              (#product #webdevelopment #idea)
            </span>
          </span>

          <input
            name=""
            id=""
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="#tag"
            required
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mb-5 gap-4 mx-3">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            disabled={submiting}
          >
            {submiting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
