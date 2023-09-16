import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="mx-auto h-80vh flex flex-col justify-center max-w-5xl">
        <div className="my-7">
          <h1 className="text-gray-200 text-4xl font-semibold uppercase">
            About me
          </h1>
          <hr />
          <p className="text-gray-400 py-3 ">
            Hi, I'm Christ Narvarte, a passionate, dedicated, and aspiring
            junior frontend developer with a love for coding and a knack for
            creating innovative projects. As a junior developer, I am
            continually inspired to explore and learn within the vast and
            ever-evolving world of technology. My honed skills, shaped through a
            tremendous amount of effort and practice, fuel my journey towards
            becoming a more proficient and effective coder.
          </p>
        </div>

        <div>
          <h1 className="text-gray-200 text-4xl font-semibold uppercase">
            My Journey
          </h1>
          <hr />
          <p className="text-gray-400 py-3">
            My journey as a developer began with a curiosity for turning ideas
            into reality. This curiosity ignited my passion for coding and drove
            me to dive headfirst into the world of web development. Since then,
            I've been on an exciting learning adventure, soaking up knowledge
            and constantly challenging myself to grow.
          </p>
        </div>
      </div>
      <Footer isAbsolute={true} />
    </>
  );
};

export default About;
