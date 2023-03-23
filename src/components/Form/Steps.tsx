import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepConnector from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { grey, red } from "@mui/material/colors";

const steps = ["Share Location", "Clock in", "Working On", "Clock out"];
const stepColors: { [key: string]: string } = {
  completed: "#a00409",
  active: "#ed1c24",
  default: "#e0e0e0",
};

interface StepIconProps {
  completed: boolean;
  active: boolean;
}

interface StepsProps {
  activeStep: number;
}

function StepIcon({ completed, active }: StepIconProps) {
  const renderStep = (): string => {
    if (completed) return "completed";
    if (active) return "active";
    return "default";
  };

  return (
    <Box
      sx={{
        borderRadius: "50%",
        width: "1rem",
        height: "1rem",
        backgroundColor: stepColors[renderStep()],
      }}
    />
  );
}

export default function Steps({ activeStep }: StepsProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginTop: 2, marginBottom: { xs: 2 } }}
      >
        <Badge
          badgeContent={3}
          sx={{
            "& .MuiBadge-badge": {
              top: "-0.3125rem",
              backgroundColor: "#FF4D4E",
              color: "#ffffff",
            },
          }}
        >
          <ErrorOutlineIcon sx={{ color: "#FF4D4E" }} />
        </Badge>

        <Button
          disableElevation
          variant="contained"
          sx={{
            minWidth: "fit-content",
            padding: 0.5,
            backgroundColor: "#1576ff",
          }}
        >
          <SettingsIcon fontSize="small" />
        </Button>
      </Grid>

      <Box
        sx={{ width: { lg: "80%", sm: "100%", xs: "100%" }, margin: "0 auto" }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={
            <StepConnector
              sx={{
                top: "0.5rem",
                "&.Mui-active .MuiStepConnector-line": {
                  borderColor: "#ed1c24",
                  borderTopWidth: "0.125rem",
                },
                "&.Mui-completed .MuiStepConnector-line": {
                  borderColor: "#ed1c24",
                  borderTopWidth: "0.125rem",
                },
              }}
            />
          }
        >
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  StepIconComponent={StepIcon}
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontSize: "0.625rem",
                      marginTop: "0.5rem",
                      color: grey[700],
                      fontWeight: 500,
                    },
                    "& .Mui-completed": {
                      color: grey[700],
                    },
                    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
                      marginTop: "0.5rem !important",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Box>
  );
}
