import Typography from "@mui/material/Typography";

interface StepTitleProps {
  step: number;
}

const stepTitles: { [key: number]: string } = {
  0: "Share Location",
  1: "Clock In",
  2: "Working On",
  3: "Clock Out",
};

export default function StepTitle({ step }: StepTitleProps) {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "1.25rem",
        marginBottom: 2,
        marginTop: 0.5,
        textTransform: "capitalize",
        color: "#CB4248",
      }}
    >
      Enter {stepTitles[step]} information
    </Typography>
  );
}
