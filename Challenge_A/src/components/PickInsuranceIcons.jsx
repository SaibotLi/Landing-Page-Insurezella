import { insuranceIcons } from "../constants";

const PickInsuranceIcons = () => {
  return (
    <div className="lg:grid-cols-3 grid grid-cols-2  gap-12 mt-8">
      {insuranceIcons.map((icon, index) => (
        <div key={index} className="text-center">
          <img src={icon.src} alt={icon.alt} className="my-4 mx-auto" />
          <h2 className="my-6 lg:my-4 font-semibold text-blue-500 mt-2 text-xl">
            {icon.alt}
          </h2>
          <p className="text-sm text-gray-500">
            Here it would go some text related to {icon.alt}.
          </p>
        </div>
      ))}
    </div>
  );
};

export default PickInsuranceIcons;
