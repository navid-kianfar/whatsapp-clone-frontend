import { useEffect, useState } from "react";
import qrImage from "../../assets/images/qr.png";
import AnimatedLoader from "../animated-loader/animated.loader";
import RefreshIcon from "../icons/refresh.icon";
import Wrapper from "./qr.style";
import { fetchQR } from "../../services/api.service";
import { socket } from "../../services/socket.service";

const initialState = {
  waiting: true,
  expired: false,
  qrCode: "",
};

const QR = () => {
  const [state, setState] = useState(initialState);

  const updateQRImage = (base64) => {
    setState({
      ...state,
      qrCode: base64,
      waiting: false,
      expired: base64.length === 0,
    })
  };

  const onQREvent = (payload) => {
    updateQRImage(payload.qr);
  };

  const retrive = () => {
    fetchQR().then((res) => updateQRImage(res.data.qr));
  };

  useEffect(() => {
    retrive();
    socket.on('qr', onQREvent);

    return () => {
      socket.off('qr', onQREvent);
    };
  }, []);

  const refreshQRCode = () => {
    setState({ ...state, waiting: true });
    retrive();
  };

  if (state.waiting) {
    return (
      <Wrapper>
        <AnimatedLoader />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <img
        className={state.expired ? "expired" : ""}
        src={state.qrCode || qrImage}
        alt=""
      />
      {state.expired && (
        <div className="reload-wrapper">
          <button onClick={refreshQRCode}>
            <RefreshIcon />
            <span>Click to Reload</span>
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default QR;
