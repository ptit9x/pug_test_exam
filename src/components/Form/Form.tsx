import { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { grey } from "@mui/material/colors";

import Steps from "./Steps";
import Countdown from "./Countdown";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

export interface FormStepOne {
  branchCode: string;
  branch: string;
  brand: string;
  salesType: string;
  productType: string;
}

export interface FormStepTwo {
  clockIn: string;
}

export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepOne, setStepOne] = useState<FormStepOne>({
    branchCode: "",
    branch: "store name",
    brand: "",
    salesType: "",
    productType: "",
  });
  const [stepTwo, setStepTwo] = useState<FormStepTwo>({
    clockIn: "",
  });

  const handleClickNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };
  const handleChange = (value: string, name: string, step: number) => {
    switch (step) {
      case 0:
        setStepOne((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        return;
      case 1:
        setStepTwo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        return;
      default:
        return;
    }
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepOne
            data={stepOne}
            onChange={(value, name) => handleChange(value, name, 0)}
            onClickNext={handleClickNext}
          />
        );
      case 1:
        return (
          <StepTwo
            prevData={stepOne}
            data={stepTwo}
            onClickNext={handleClickNext}
          />
        );
      default:
        return;
    }
  };

  return (
    <Card sx={{ borderRadius: 3, padding: 2, minHeight: "500px" }}>
      <Steps activeStep={activeStep} />

      <Divider sx={{ marginTop: 3, marginBottom: 1.5 }} />

      {/* <Countdown /> */}

      {renderStep()}
    </Card>
  );
}
