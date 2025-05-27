import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Import the actual images for the blog section
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog5 from "../assets/blog-wide.jpg";
import blog4 from "../assets/blog-4.jpg";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    review:
      "Absolutely amazing experience! The room was clean, the staff was friendly, and the smart key access made everything so convenient.",
    rating: 5,
  },
  {
    name: "David Lee",
    review:
      "I loved the modern design and technology integration. It felt secure and easy to use. Highly recommend this hotel!",
    rating: 4.5,
  },
  {
    name: "Emily Smith",
    review:
      "A seamless check-in and check-out experience. The breakfast was delicious, and I appreciated the complimentary amenities.",
    rating: 5,
  },
];

function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }

  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} />);
  }

  return stars;
}

function CustomerReview() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Hotel News Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-xl text-[#efc61e] uppercase tracking-widest">
          Hotel News
        </h2>
        <p className="text-5xl font-bold text-gray-800 mt-2">
          Our Blog & Event
        </p>
      </div>

{/* Blog Images Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-20">
  {/* Regular images with overlay text and category button */}
  {[{ img: blog1, text: "Travel Trip\nTremblant In Canada", date: "15th April, 2019", category: "Camping" },
    { img: blog2, text: "Choosing A Static\nCaravan", date: "15th April, 2019", category: "Event" },
    { img: blog3, text: "Copper Canyon", date: "21st April, 2019", category: "Event" },
    { img: blog5, text: "Trip To Iqaluit\nIn Nunavut", date: "08th April, 2019", category: "Travel" },
    { img: blog4, text: "Traveling To\nBarcelona", date: "12th April, 2019", category: "Travel" }]
    .map((item, index) => (
      <div 
        key={index} 
        className={`relative ${index === 3 ? 'lg:col-span-2' : ''}`} 
      >
        <img
          src={item.img}
          alt={`Blog ${index + 1}`}
          className="w-full h-100 object-cover rounded-lg shadow"
        />
        <div className="absolute bottom-4 left-4 text-white">
          {/* Category button first */}
          <button className="bg-[#f5be38] text-black py-1 px-4 rounded-sm shadow-md hover:bg-yellow-400 mb-2">
            {item.category}
          </button>
          {/* Item Text and Date */}
          <p className="font-bold text-2xl">{item.text}</p>
          <p className="text-lg">{item.date}</p>
        </div>
      </div>
    ))}
</div>


      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest">
          Testimonials
        </h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">
          What Customers Say?
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
            <div className="mt-auto">
              <h4 className="text-lg font-semibold text-black">
                {testimonial.name}
              </h4>
              <div className="text-yellow-500 mt-1 flex gap-1 text-sm">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;
