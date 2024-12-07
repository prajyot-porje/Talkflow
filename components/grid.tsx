import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {


  return (
    <BentoGrid  className="h-[50vh] mx-auto">
      <BentoGridItem 
        title="The Future's Mind"
        description="Artificial Intelligence: Bridging imagination and reality."
        src="/image1.png"
      />
      <BentoGridItem
        title="Nature's Embrace"
        description="Where every leaf whispers the secrets of life."
        src="/image2.png"
        className="md:col-span-2"
      />
      <BentoGridItem
        title="The Human Spirit"
        description="Resilient and ever-evolving, the heart of our world"
        src="/image3.png"
        className="md:col-span-2"
      />
      <BentoGridItem
        title="The Untamed Kingdom"
        description="In the wild, every creature tells a story of survival.."
        src="/image4.png"
        className="md:col-span-1"
        
      />
    </BentoGrid>
  );
};

export default Grid;
