import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/loading";
import { useAppContext } from "../../context/appContext";

const ChatsPage = () => {
  const navigate = useNavigate();
  const { loading, user } = useAppContext();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }
  return <div></div>;
};

export default ChatsPage;
