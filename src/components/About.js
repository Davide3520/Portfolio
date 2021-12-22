export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Davide and
            <br className="hidden lg:inline-block" /> I am a Software Engineer.
          </h1>
          <p className="mb-8 leading-relaxed">
          I was born in Cagli, a small town in central Italy, where everyone knows each other. The town is filled with history, there are still remain of ancient bridges and roads built during the Roman Empire, all while surrounded by nature. I used to spend my summer days with my friends keeping cool in the fresh water that flows from the many rivers and creeks nearby. I moved to the United States about four years ago to be with my wife, the rest of my family lives in Italy and we travel there every year to visit them. One of my biggest passions other than programming is basketball, I played for 15 years and I learned many important skills like teamwork, communication, and dependability.
          </p>
          <div className="flex justify-center">
          <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
          </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me.png"
          />
        </div>
      </div>
    </section>
  )
}
