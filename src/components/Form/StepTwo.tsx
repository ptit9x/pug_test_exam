import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { FormStepTwo } from "./Form";

interface StepTwoProps {
  data: FormStepTwo;
  onClickNext: () => void;
}

export default function StepTwo({ data, onClickNext }: StepTwoProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="branchCode" required>
            Branch code
          </InputLabel>
          <Select
            displayEmpty
            defaultValue=""
            fullWidth
            size="small"
            placeholder="Branch code"
            name="branchCode"
            id="branchCode"
          >
            <MenuItem hidden disabled value="">
              Branch code
            </MenuItem>
          </Select>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="branch">branch</InputLabel>
          <TextField
            disabled
            id="branch"
            name="branch"
            fullWidth
            size="small"
            placeholder="Store name"
          />
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <InputLabel htmlFor="brand" required>
            Brand
          </InputLabel>
          <Select
            displayEmpty
            defaultValue=""
            fullWidth
            size="small"
            placeholder="Brand"
            id="brand"
            name="brand"
          >
            <MenuItem hidden disabled value="">
              Select...
            </MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <InputLabel htmlFor="salesType" required>
            Sales Type
          </InputLabel>
          <Select
            displayEmpty
            defaultValue=""
            fullWidth
            size="small"
            id="salesType"
            name="salesType"
          >
            <MenuItem hidden disabled value="">
              Select...
            </MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <InputLabel htmlFor="productType" required>
            Product Type
          </InputLabel>
          <Select
            displayEmpty
            defaultValue=""
            fullWidth
            size="small"
            name="productType"
            id="productType"
          >
            <MenuItem hidden disabled value="">
              Select...
            </MenuItem>
          </Select>
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
