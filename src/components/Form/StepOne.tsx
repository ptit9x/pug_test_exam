import { ChangeEvent, useMemo } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import {
  branchCodeList,
  branchList,
  salesTypeList,
  productTypeList,
  cityList,
  suburbList,
} from "../../constants";
import { FormStepOne } from "../../types";

interface StepOnePros {
  data: FormStepOne;
  onChange: (value: string, name: string) => void;
  onClickNext: () => void;
}

export default function StepOne({ data, onChange, onClickNext }: StepOnePros) {
  const isShowNextButton = useMemo(() => {
    return data.address !== "" && data.city !== "" && data.suburb !== "";
  }, [data]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    onChange(value, name);
  };
  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log({ name, value });
    onChange(value, name);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="city" required>
            City
          </InputLabel>
          <Select
            displayEmpty
            defaultValue=""
            fullWidth
            size="small"
            name="city"
            id="city"
            onChange={handleChangeSelect}
          >
            <MenuItem hidden disabled value="">
              Select ...
            </MenuItem>
            {cityList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="suburb" required>
            Suburb
          </InputLabel>
          <Select
            displayEmpty
            defaultValue=""
            fullWidth
            size="small"
            name="suburb"
            id="suburb"
            onChange={handleChangeSelect}
          >
            <MenuItem hidden disabled value="">
              Select ...
            </MenuItem>
            {suburbList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <InputLabel htmlFor="address" required>
            Address
          </InputLabel>
          <TextField
            fullWidth
            id="address"
            size="small"
            name="address"
            onChange={handleChangeAddress}
          />
        </Grid>
      </Grid>

      {isShowNextButton && (
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
