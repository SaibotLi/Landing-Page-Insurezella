import PickInsuranceIcons from "../components/PickInsuranceIcons";

const PickInsurance = () => {
  return (
    <section className="bg-cyan-50 flex-col justify-center items-center my-4 py-12">
      <h1 className="font-semibold text-center text-2xl">
        Pick the insurance that suits your needs.
      </h1>
      <PickInsuranceIcons />
    </section>
  );
};

export default PickInsurance;
