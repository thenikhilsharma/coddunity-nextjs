import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './style.css';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-28">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-black rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black poppins-thin uppercase text-white backdrop-blur-sm rounded-xl">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/2.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/2.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 7",
    id: 7,
  },
];