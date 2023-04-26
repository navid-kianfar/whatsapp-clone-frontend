import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./auth.style";
import MenuIcon from "../../components/icons/menu.icon.component";
import CogsIcon from "../../components/icons/cogs.icon.component";
import LogoColored from "../../components/logos/logo.colored.component";
import qrImage from "../../assets/images/qr.png";

const AuthPage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Wrapper className="landing-wrapper">
      <div className="landing-wrapper-before"></div>
      <div class="landing-header">
        <span>
          <LogoColored />
        </span>
        <div class="landing-header-title">WhatsApp Web</div>
      </div>
      <div className="landing-window">
        <div class="landing-main">
          <div className="section-signin">
            <div className="signin-wrapper">
              <div className="info-wrapper">
                <div className="landing-title">
                  Use WhatsApp on your computer
                </div>
                <div className="horizontal-gap"></div>
                <ol>
                  <li>Open WhatsApp on your phone</li>
                  <li>
                    <span dir="ltr">
                      Tap&nbsp;
                      <strong>
                        <span dir="ltr">
                          Menu
                          <span>
                            &nbsp;
                            <MenuIcon />
                          </span>
                        </span>
                      </strong>
                      &nbsp; or&nbsp;
                      <strong>
                        <span dir="ltr">
                          Settings&nbsp;
                          <span>
                            &nbsp;
                            <CogsIcon />
                          </span>
                        </span>
                      </strong>
                      &nbsp; and select <strong>Linked Devices</strong>
                    </span>
                  </li>
                  <li>
                    <span dir="ltr">
                      Tap on <strong>Link a Device</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Point your phone to this screen to capture the QR code
                    </span>
                  </li>
                </ol>
              </div>
              <div className="qr-wrapper">
                <img src={qrImage} alt="" />
              </div>
            </div>
          </div>
          <div className="section-tutorial"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthPage;
