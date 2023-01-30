import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { sendMessage } from "../../services/sockets";
import { errorExit } from "../../services/sweetalert.js";
import { BsBoxArrowInRight } from "react-icons/bs";
import "./LogoutButton.css";

const LogoutButton = () => {
  const { user, logout } = useAuth0();
  const handler = () => {
    errorExit().then((response) => {
      if (response) {
        sendMessage("exit", user);
        logout({
          // returnTo: "http://localhost:3000",
          returnTo: "https://client-deploy-wild-design.vercel.app",
          clientID: "WawCbbdYBrnbIDvqnhUIyulgHhicovQJ",
        });
      }
    });
  };

  return (
    <Button
      onClick={handler}
      w="24"
      h="32px"
      rightIcon={<BsBoxArrowInRight />}
      colorScheme="white"
      variant="solid"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
