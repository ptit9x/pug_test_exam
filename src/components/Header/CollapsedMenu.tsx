import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";
import Divider from "@mui/material/Divider";

export default function CollapsedMenu() {
  return (
    <Card
      raised={false}
      sx={{
        position: "absolute",
        top: "6.5rem",
        backgroundColor: "#CB4248",
        left: "1rem",
        right: "1rem",
        height: "calc(100vh - 9.5rem)",
        borderRadius: 3,
        zIndex: 999,
        padding: 2,
      }}
    >
      <MenuList>
        <MenuItem sx={{ color: "#ffffff" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            Set Password
            <LockIcon />
          </Stack>
        </MenuItem>
        <Divider sx={{ backgroundColor: "#ffffff" }} />
        <MenuItem sx={{ color: "#ffffff" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            LOGOUT
            <LogoutIcon />
          </Stack>
        </MenuItem>
        <Divider sx={{ backgroundColor: "#ffffff" }} />
        <MenuItem sx={{ color: "#ffffff" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            Hi, Mark
            <SettingsIcon />
          </Stack>
        </MenuItem>
      </MenuList>
    </Card>
  );
}
