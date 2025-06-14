import { Carousel } from "@mantine/carousel";
import { categories } from "../../Data/Data";

const JobCategories = () => {
  return (
    <div className="py-14 flex flex-col items-center gap-10">
      {/* Row 1 - Heading & Description */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="text-mine-shaft-100 text-3xl font-semibold">
          Browse <span className="text-bright-sun-400">Job</span> Category
        </h3>
        <p className="text-mine-shaft-300">
          Explore diverse job opportunities tailored to your skills. Start your{" "}
          <br />
          career journey today!
        </p>
      </div>

      {/* Row 2 - Carousel */}
      <div className="w-full">
        <Carousel
          slideSize="22%"
          slideGap="md"
          emblaOptions={{
            loop: true,
          }}
          //  below is the Advanced Tailwind CSS used : "&_button" -> targets button inside Carousel
          className="[&_button]:border-none [&_button]:bg-bright-sun-300 [&_button]:opacity-0 [&_button]:hover:opacity-75 hover:[&_button]:opacity-100"
        >
          {categories.map((category, index) => (
            <Carousel.Slide key={index}>
              <div className="w-64 flex flex-col items-center gap-3 p-3 border border-bright-sun-400 rounded-lg text-center hover:cursor-pointer hover:shadow-lg hover:shadow-bright-sun-500 transition duration-500 ease-in-out">
                {/* Logo */}
                <div className="w-fit bg-bright-sun-300 p-2 rounded-full">
                  <img
                    src={`/Categories/${category.title}.png`}
                    alt=""
                    className="h-8"
                  />
                </div>

                {/* Title */}
                <p className="text-white text-xl font-semibold">
                  {category.title}
                </p>

                {/* Description */}
                <p className="text-mine-shaft-300 text-sm">{category.desc}</p>

                {/* Total Jobs Posted */}
                <p className="text-bright-sun-300">
                  {category.job_count}k+ new job posted
                </p>
              </div>
            </Carousel.Slide>
          ))}

          {/* ...other slides */}
        </Carousel>
      </div>
    </div>
  );
};

export default JobCategories;
