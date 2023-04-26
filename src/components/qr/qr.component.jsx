import { useEffect, useState } from "react";
import qrImage from "../../assets/images/qr.png";
import AnimatedLoader from "../animated-loader/animated.loader.component";
import RefreshIcon from "../icons/refresh.icon.component";

const initialState = {
  waiting: true,
  expired: true,
  qrCode: "",
};

const QR = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, waiting: false });
    }, 1000);
  }, []);

  const refreshQRCode = () => {
    setState({ ...state, waiting: true });
    setTimeout(() => {
      setState({ ...state, waiting: false, expired: false });
    }, 1000);
  };

  if (state.waiting) {
    return (
      <div className="qr-container">
        <AnimatedLoader />
      </div>
    );
  }
  return (
    <div className={`qr-container ${state.expired ? "expired" : ""}`}>
      <img src={state.qrCode || qrImage} alt="" />
      {state.expired && (
        <div className="reload-wrapper">
          <button onClick={refreshQRCode}>
            <RefreshIcon />
            <span>Click to Reload</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default QR;
