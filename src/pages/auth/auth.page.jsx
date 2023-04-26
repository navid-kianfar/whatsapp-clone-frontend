import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./auth.style";
import MenuIcon from "../../components/icons/menu.icon";
import CogsIcon from "../../components/icons/cogs.icon";
import LogoColored from "../../components/logos/logo.colored";
import QR from "../../components/qr/qr";
import tutorialImage from "../../assets/images/tutorial.png";

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
      <div className="landing-header">
        <span>
          <LogoColored />
        </span>
        <div className="landing-header-title">WhatsApp Web</div>
      </div>
      <div className="landing-window">
        <div className="landing-main">
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
                <QR />
              </div>
            </div>
          </div>
        </div>
        <div className="section-tutorial">
          <div className="landing-title">Tutorial</div>
          <a href="https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=en">
            Need help to get started?
          </a>
          <img src={tutorialImage} alt="tutorialImage" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthPage;
