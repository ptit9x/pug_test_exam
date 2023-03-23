import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

import CollapsedMenu from "./CollapsedMenu";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isCollapsed ? "hidden" : "visible";
  }, [isCollapsed]);

  const handleClickCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: "#CB4248",
        borderRadius: 3,
        padding: 2,
        marginBottom: 2,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: "#ffffff",
              },
            }}
          >
            <Typography sx={{ color: "#ffffff" }}>User Dashboard</Typography>
            <Typography sx={{ color: "#ffffff" }}>Attendance</Typography>
          </Breadcrumbs>

          <Typography
            sx={{
              color: "#ffffff",
              display: { xs: "none", sm: "none", md: "block" },
            }}
            fontWeight={700}
          >
            Attendance
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "#fff",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={handleClickCollapse}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          {isCollapsed && <CollapsedMenu />}

          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <Button
              variant="text"
              sx={{ color: "#ffffff", textTransform: "none", padding: 0 }}
            >
              Set Password
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "#ffffff",
                    height: "80%",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
              }
              spacing={2}
            >
              <Button
                variant="text"
                sx={{ color: "#ffffff", fontWeight: 700, padding: 0 }}
              >
                Logout
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "#ffffff",
                  fontWeight: 700,
                  padding: 0,
                  textTransform: "none",
                }}
                endIcon={<SettingsIcon />}
              >
                Hi, Mark
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
}
