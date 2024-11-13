import React from "react";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";

const page = () => {
  return (
    <div>
      <Card
        title="Top Destinations"
        description="Explore the world’s best destinations, from bustling cities to peaceful retreats."
      />

      <div className="Card-pr">
        <CardContainer />
      </div>
    </div>
  );
};

export default page;
