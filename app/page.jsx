import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-between flex-col">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="md:hidden" />
        <span className="orange_gradient text-center"> AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopedia is a platform that provides AI generated prompts for
        writers, artists, and creators. It is a place where you can discover new
        ideas and share your creations with the world.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
