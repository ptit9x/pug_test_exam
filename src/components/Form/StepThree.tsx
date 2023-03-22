import { ChangeEvent } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { FormStepOne, FormStepTwo, FormStepThree } from "../../types";

type PrevData = FormStepOne & FormStepTwo;

interface StepTwoProps {
  prevData: PrevData;
  data: FormStepThree;
  onClickNext: () => void;
  onChange: (value: string, name: string) => void;
}

export default function StepThree({
  prevData,
  data,
  onClickNext,
  onChange,
}: StepTwoProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    onChange(value, name);
  };

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
          <Typography variant="body1">Clock In: {prevData.clockIn}</Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="workingOn" required>
            Working On
          </InputLabel>
          <TextField
            multiline
            id="workingOn"
            name="workingOn"
            fullWidth
            size="small"
            placeholder="Write what you will do to day..."
            maxRows={4}
            minRows={4}
            value={data.workingOn}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      {data.workingOn !== "" && (
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
      )}
    </>
  );
}
