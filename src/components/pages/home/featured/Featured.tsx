import React from "react";
import { Card } from "@/components/Base";
import { DataItem } from "@/components/type";
import { data } from "@/data";
import './Featured.scss';

const Featured: React.FC = () => {
  const docs: DataItem[] = data.filter(
    (item): item is DataItem => item.group !== undefined
  );

  return (
    <section className="featured">
      <div className="featured__container">
        <h2 className="featured__title">
          Featured Products
        </h2>
        <div className="featured__card-wrapper">
          {docs.map((item) => (
            <Card
              key={item.id}
              imgSrc={item.img.default}
              imgSrcset={item.img.webP}
              alt="group"
              group={item.group}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Featured;
