import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data";

export const Testimonial = () => {
  return (
    <div className="px-[20px] py-10 flex flex-col items-center gap-10">
      {/* Row 1 - Heading & Description */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="text-mine-shaft-100 text-3xl font-semibold">
          What <span className="text-bright-sun-400">User</span> says about us?
        </h3>
      </div>

      {/* Row 2 - Testimonial Cards */}
      <div className="grid grid-cols-4 gap-5">
        {testimonials.map((testimonial, index) => (
          // Card
          <div
            key={index}
            className="p-2 flex flex-col gap-3 border border-bright-sun-400 rounded-xl"
          >
            {/* Row 1 */}
            <div className="flex items-center gap-3">
              {/* Profile Avatar */}
              <Avatar src="/profilePhoto.png" alt="profilePhoto" size="lg" />

              {/* Name + Rating */}
              <div>
                <h5 className="text-mine-shaft-100 font-semibold">
                  {testimonial.username}
                </h5>
                <Rating value={testimonial.ratings} fractions={2} readOnly />
              </div>
            </div>

            <p className="text-xs text-mine-shaft-400">{testimonial.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
