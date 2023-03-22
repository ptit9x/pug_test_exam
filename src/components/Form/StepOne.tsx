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
} from "../../constants";
import { FormStepOne } from "../../types";
import { useMemo } from "react";

interface StepOnePros {
  data: FormStepOne;
  onChange: (value: string, name: string) => void;
  onClickNext: () => void;
}

export default function StepOne({ data, onChange, onClickNext }: StepOnePros) {
  const isShowNextButton = useMemo(() => {
    return (
      data.branchCode !== "" &&
      data.salesType !== "" &&
      data.productType !== "" &&
      data.brand !== ""
    );
  }, [data]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    onChange(value, name);
  };

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
            onChange={handleChangeSelect}
          >
            <MenuItem hidden disabled value="">
              Branch code
            </MenuItem>
            {branchCodeList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputLabel htmlFor="branch">Branch</InputLabel>
          <TextField
            disabled
            id="branch"
            name="branch"
            fullWidth
            size="small"
            placeholder="Store name"
            value={data.branch}
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
            onChange={handleChangeSelect}
          >
            <MenuItem hidden disabled value="">
              Select...
            </MenuItem>
            {branchList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
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
            onChange={handleChangeSelect}
          >
            <MenuItem hidden disabled value="">
              Select...
            </MenuItem>
            {salesTypeList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
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
            onChange={handleChangeSelect}
          >
            <MenuItem hidden disabled value="">
              Select...
            </MenuItem>
            {productTypeList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
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
