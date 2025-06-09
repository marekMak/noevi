"use client";
import { useState } from "react";
import Nav from "../components/shared/nav";
import Estimator from "./components/Estimator";
import Graph from "./components/Graph";

const page = () => {
  const [resultKwh, setResultKwh] = useState<number | null>(null);
  const [resultEur, setResultEur] = useState<number | null>(null);
  const [electricHeating, setElectricHeating] = useState(false);
  const [heatingMonths, setHeatingMonths] = useState(6);

  return (
    <div className="bg-greeno w-full min-h-screen flex flex-col justify-center">
      <Nav />

      <div className="bg-white py-20 w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 pb-10 px-10 md:px-20 lg:px-34">
        <Estimator
          resultKwh={resultKwh}
          setResultKwh={setResultKwh}
          electricHeating={electricHeating}
          setElectricHeating={setElectricHeating}
          heatingMonths={heatingMonths}
          setHeatingMonths={setHeatingMonths}
        />

        <Graph
          electricHeating={electricHeating}
          heatingMonths={heatingMonths}
        />
      </div>
    </div>
  );
};

export default page;
