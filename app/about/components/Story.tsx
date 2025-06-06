import React from "react";

const Story = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-6xl font-semibold text-greeno">Our story</h2>
      <div className="flex flex-col gap-4">
        <p className="font-light text-justify">
          In the scenic Austrian town of Hainburg an der Donau, where the wind
          flows freely between the Danube and the rolling hills,{" "}
          <span className="text-greeno font-semibold">Noevi </span>
          was born — a next-generation energy company committed to
          sustainability and harmony with nature.
        </p>
        <p className="font-light text-justify">
          From day one, Noevi has focused on
          <span className="text-greeno font-semibold">
            {" "}
            generating clean electricity from wind
          </span>
          — a renewable source that leaves no scars on the landscape and gives
          back more than it takes. Our wind turbines quietly transform natural
          motion into reliable energy for homes, businesses, and future
          generations.
        </p>
        <p className="font-light text-justify">
          We care deeply about{" "}
          <span className="text-greeno font-semibold">
            the environment, the local community, and long-term wellbeing.
          </span>{" "}
          We believe that energy doesn’t have to cost the Earth — it can protect
          it.
        </p>
      </div>
      <h2 className="text-6xl font-semibold text-greeno">What We Stand For</h2>
      <ul className="font-light text-justify ml-4 space-y-2">
        <li className="flex items-center gap-2">
          <img src="/check.svg" alt="check icon" className="w-6 h-6" />
          <span className="text-greeno font-semibold">Sustainability </span>
          in every step we take
        </li>
        <li className="flex items-center gap-2">
          <img src="/check.svg" alt="check icon" className="w-6 h-6" />
          <span className="text-greeno font-semibold">Transparency</span>
          with people and partners
        </li>
        <li className="flex items-center gap-2">
          <img src="/check.svg" alt="check icon" className="w-6 h-6" />
          <span className="text-greeno font-semibold">Innovation</span> that
          respects nature
        </li>
      </ul>
    </div>
  );
};

export default Story;
