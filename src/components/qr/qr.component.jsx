import { useEffect, useState } from "react";
import qrImage from "../../assets/images/qr.png";
import AnimatedLoader from "../animated-loader/animated.loader.component";

const initialState = {
  waiting: true,
  expired: false,
  qrCode: "",
};

const QR = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, waiting: false });
    }, 1000);
  }, []);

  if (state.waiting) {
    return (
      <div className="qr-container">
        <AnimatedLoader />
      </div>
    );
  }
  return (
    <div className="qr-container">
      <img src={qrImage} alt="" />
      {state.expired && <div>Reload</div>}
    </div>
  );
};

export default QR;
