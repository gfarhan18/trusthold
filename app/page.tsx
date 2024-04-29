import Carousel from "./components/Carousal";

const slides = [
  {
    src: '/brown-building.jpg',
    label: 'Slide 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: '/building-1.jpg',
    label: 'Slide 2',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    src: 'rubik-building.jpg',
    label: 'Slide 3',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    src: 'spears-building.jpg',
    label: 'Slide 2',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

];
export default function Home() {
  return (
    <div> <Carousel slides={slides} /></div>
  );
}
