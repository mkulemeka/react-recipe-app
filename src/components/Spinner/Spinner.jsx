import "./Spinner.scss";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={{ height: "60vh" }}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
