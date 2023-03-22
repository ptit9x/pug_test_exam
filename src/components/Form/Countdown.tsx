import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { grey } from "@mui/material/colors";

export default function Countdown() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          window.location.reload();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  const addLeadingZeros = (number: number) => {
    if (number < 10) return `0${number}`;
    return number;
  };

  return (
    <Card sx={{ borderRadius: 0 }}>
      <Typography
        sx={{
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 400,
          fontSize: "0.875rem",
          paddingTop: 1,
          paddingBottom: 1,
          color: grey[700],
        }}
        variant="body1"
      >
        After
        <Chip
          component="span"
          label={`${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`}
          size="small"
          sx={{
            marginLeft: 0.5,
            marginRight: 0.5,
            borderRadius: 1,
            backgroundColor: "#FF0000",
            color: "#ffffff",
          }}
        />
        this page will be refreshed
      </Typography>
    </Card>
  );
}
