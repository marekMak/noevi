"use client";
import { useState } from "react";

type EstimatorProps = {
  resultKwh: number | null;
  setResultKwh: (val: number) => void;
  electricHeating: boolean;
  setElectricHeating: (val: boolean) => void;
  heatingMonths: number;
  setHeatingMonths: (val: number) => void;
};

const Estimator = ({
  resultKwh,
  setResultKwh,
  electricHeating,
  setElectricHeating,
  heatingMonths,
  setHeatingMonths,
}: EstimatorProps) => {
  const [people, setPeople] = useState(2);
  const [bigAppliances, setBigAppliances] = useState(3);
  const [smallAppliances, setSmallAppliances] = useState(5);
  const [resultEur, setResultEur] = useState<number | null>(null);

  const calculateConsumption = () => {
    const peopleConsumption = people * 35;
    const bigAppliancesConsumption = bigAppliances * 25;
    const smallAppliancesConsumption = smallAppliances * 7;
    const heatingMonthly = electricHeating ? (heatingMonths * 250) / 12 : 0;

    const total =
      peopleConsumption +
      bigAppliancesConsumption +
      smallAppliancesConsumption +
      heatingMonthly;

    const totalRounded = Math.round(total);
    setResultKwh(totalRounded);
    setResultEur(Math.round(total * 0.25 * 100) / 100);
  };

  return (
    <div className="bg-white p-6 space-y-4">
      <h2 className="text-2xl font-bold text-greeno -mt-2">
        Electricity Consumption Estimator
      </h2>

      <label className="block">
        People in household:
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(+e.target.value)}
          className="w-full border mt-1 p-2 rounded"
          min={1}
        />
      </label>

      <label className="block">
        Large appliances:
        <input
          type="number"
          value={bigAppliances}
          onChange={(e) => setBigAppliances(+e.target.value)}
          className="w-full border mt-1 p-2 rounded"
        />
      </label>

      <label className="block">
        Small appliances:
        <input
          type="number"
          value={smallAppliances}
          onChange={(e) => setSmallAppliances(+e.target.value)}
          className="w-full border mt-1 p-2 rounded"
        />
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={electricHeating}
          onChange={() => setElectricHeating(!electricHeating)}
        />
        Uses electric heating
      </label>

      {electricHeating && (
        <label className="block">
          Months of heating per year:
          <input
            type="number"
            value={heatingMonths}
            onChange={(e) => setHeatingMonths(+e.target.value)}
            className="w-full border mt-1 p-2 rounded"
            min={1}
            max={12}
          />
        </label>
      )}

      <button
        onClick={calculateConsumption}
        className="bg-greeno text-white px-4 py-2 rounded"
      >
        Estimate Consumption
      </button>

      {resultKwh !== null && resultEur !== null && (
        <div className="mt-4 text-lg font-semibold space-y-1">
          <p>
            ⚡ Estimated monthly consumption:{" "}
            <strong className="text-greeno">{resultKwh} kWh</strong>
          </p>
          <p>
            💶 Estimated monthly cost:{" "}
            <strong className="text-greeno">{resultEur.toFixed(2)} €</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Estimator;
