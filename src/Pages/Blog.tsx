import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import bgImage from "../assets/banner 2.jpg";

const blogs = [
  {
    image: blog1,
    title: "Bed Room",
    subtitle: "The standard chunk",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are.",
  },
  {
    image: blog2,
    title: "Bed Room",
    subtitle: "The standard chunk",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are.",
  },
  {
    image: blog3,
    title: "Bed Room",
    subtitle: "The standard chunk",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are.",
  },
];

function Blog() {
  return (
    <div
      className="min-h-screen py-12 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center lg:mt-30">
        <h2 className="text-4xl font-bold text-white mb-2">BLog</h2>
        <p className="text-md text-white">Home / Blog</p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image Wrapper with Zoom Animation */}
              <div className="overflow-hidden group">
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-74 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  {blog.title}
                </h3>
                <h4 className="text-lg font-bold text-red-500 mb-2">
                  {blog.subtitle}
                </h4>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
