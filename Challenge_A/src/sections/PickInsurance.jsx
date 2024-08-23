import PickInsuranceIcons from "../components/PickInsuranceIcons";

const PickInsurance = () => {
  return (
    <section className="bg-cyan-50 flex justify-center items-center mt-4">
      <h1 className="font-semibold text-center text-2xl">
        Pick the insurance that suits your needs.
      </h1>
      <PickInsuranceIcons />
    </section>
  );
};

export default PickInsurance;
