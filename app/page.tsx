import Link from "next/link";
import Carousel from "./components/Carousal";

const slides = [
  {
    src: "/building-1.jpg",
    label: "Trusthold Development Group",
    content:
      "Trusthold Development Group continues to offer expert services in development...",
    url: "/about",
  },
  {
    src: "/brown-building.jpg",
    label: "Spears 1858",
    content: " Home to luxurious apartments...",
    url: "/about",
  },

  {
    src: "/rubik-building.jpg",
    label: "Rubik 1709",
    content: "A location perfect for businesses and medical practices...",
    url: "/about",
  },
  {
    src: "/spears-building.jpg",
    label: "Spears 88 ",
    content:
      "Spears 88 is in the center of Beirut’s business and commercial district...",
    url: "/about",
  },
];
export default function Home() {
  return (
    <div>
      <Carousel slides={slides} />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Section */}
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-red-700">About Us</h2>
            <p className="text-lg mb-4">
              Trusthold Development Group is built on the foundations of trust
              and rooted in professional integrity. A private real-estate
              development firm, Trusthold invests in real-estate and develops
              high-end residential, commercial, and retail projects in Lebanon.
            </p>
            <Link href={"/about"} className="bg-white border border-red-700 text-red-700 px-4 py-2 rounded hover:bg-red-700 hover:text-white focus:outline-none">
              About Us
            </Link>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 lg:pl-8">
            <img src="/profile.jpg" alt="Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
