import { insuranceIcons } from "../constants";

const PickInsuranceIcons = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {insuranceIcons.map((icon, index) => (
        <div key={index} className="text-center">
          <img src={icon.src} alt={icon.alt} className="mx-auto" />
          <h2 className="font-semibold text-blue-500 mt-2">{icon.alt}</h2>
          <p>Here it would go some text related to {icon.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default PickInsuranceIcons;
