import { cardRef } from "@/lib/cardRef";
import React from "react";
import Card from "../card";

function Skill() {
  return (
    <section className="content" id="skill">
      <h2 className="h-break">project</h2>
      {/* <!--render project here--> */}
      {cardRef.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </section>
  );
}

export default Skill;
