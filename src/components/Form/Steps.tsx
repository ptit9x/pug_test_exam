import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { grey, red } from "@mui/material/colors";

const steps = ["Share Location", "Clock in", "Working On", "Clock out"];
const stepColors: { [key: string]: string } = {
  completed: red[800],
  active: red[500],
  default: grey[400],
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
        width: "16px",
        height: "16px",
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
          color="error"
          sx={{ "& .MuiBadge-badge": { top: "-5px" } }}
        >
          <ErrorOutlineIcon color="error" />
        </Badge>

        <Button
          disableElevation
          variant="contained"
          sx={{ minWidth: "fit-content", padding: 0.5 }}
        >
          <SettingsIcon fontSize="small" />
        </Button>
      </Grid>

      <Box
        sx={{ width: { lg: "80%", sm: "100%", xs: "100%" }, margin: "0 auto" }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  StepIconComponent={StepIcon}
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontSize: "10px",
                      marginTop: "8px",
                      color: grey[700],
                      fontWeight: 500,
                    },
                    "& .Mui-completed": {
                      color: grey[700],
                    },
                    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
                      marginTop: "8px !important",
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
