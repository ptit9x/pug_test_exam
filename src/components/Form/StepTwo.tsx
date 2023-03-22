import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { FormStepOne, FormStepTwo } from "../../types";

interface StepTwoProps {
  prevData: FormStepOne;
  data: FormStepTwo;
  onClickNext: () => void;
}

export default function StepTwo({ prevData, data, onClickNext }: StepTwoProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
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
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="body1">You've clocked in at:</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {data.clockIn}
          </Typography>
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="flex-end" sx={{ marginTop: 3 }}>
        <Button
          disableElevation
          variant="contained"
          color="error"
          onClick={onClickNext}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}
