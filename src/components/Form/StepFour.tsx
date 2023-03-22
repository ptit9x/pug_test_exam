import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormStepFour,
} from "../../types";

type PrevData = FormStepOne & FormStepTwo & FormStepThree;

interface StepTwoProps {
  prevData: PrevData;
  data: FormStepFour;
  onClickNext: () => void;
}

export default function StepFour({
  prevData,
  data,
  onClickNext,
}: StepTwoProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="body1">City: {prevData.city}</Typography>
          <Typography variant="body1">Suburb: {prevData.suburb}</Typography>
          <Typography variant="body1">Address: {prevData.address}</Typography>
          <Typography variant="body1">
            Branch code: {prevData.branchCode}
          </Typography>
          <Typography variant="body1">Branch: {prevData.branch}</Typography>
          <Typography variant="body1">
            Sales type: {prevData.salesType}
          </Typography>
          <Typography variant="body1">
            Product type: {prevData.productType}
          </Typography>
          <Typography variant="body1">
            Working on: {prevData.workingOn}
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="body1">You've clocked out at:</Typography>
          <Typography variant="body1">{data.clockOut}</Typography>
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="flex-end" sx={{ marginTop: 3 }}>
        <Button
          disableElevation
          variant="contained"
          color="error"
          onClick={onClickNext}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}
