import { icons } from "../constants";
const FindInsurance = () => {
  return (
    <div>
      {icons.map((icon) => (
        <div className="flex justify-center items-center" key={icon.alt}>
          <img
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        </div>
      ))}
    </div>
  );
};

export default FindInsurance;
