import { icons } from "../constants";
const FindInsurance = () => {
  return (
    <div id="findInsurance" className="flex justify-around p-6">
      {icons.map((icon) => (
        <div
          className="flex flex-col justify-center items-center bg-white shadow-lg shadow-gray-400 rounded-lg p-4 w-60 h-60 font-semibold"
          key={icon.alt}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
          <p
            className="mt-2 text-center text-2xl"
            /* As icon.title has <br/> in it we use dangerouslySetInnerHTML*/
            dangerouslySetInnerHTML={{
              __html: icon.title,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FindInsurance;
