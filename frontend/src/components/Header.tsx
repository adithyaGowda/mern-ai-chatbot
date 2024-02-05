import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

function Header() {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                text="Go To Chat"
                to="/chat"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                text="Logout"
                textColor="white"
                to="/"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                text="Login"
                to="/login"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                text="Signup"
                textColor="white"
                to="/signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
