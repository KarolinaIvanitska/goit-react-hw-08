import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#ff0000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
