import { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Steps from "./Steps";
import Countdown from "./Countdown";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import {
  FormStepFour,
  FormStepOne,
  FormStepThree,
  FormStepTwo,
} from "../../types";
import { submit } from "../../services/request";
import StepTitle from "./StepTitle";

export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepOne, setStepOne] = useState<FormStepOne>({
    address: "",
    city: "",
    suburb: "",
  });
  const [stepTwo, setStepTwo] = useState<FormStepTwo>({
    branchCode: "",
    branch: "store name",
    brand: "",
    salesType: "",
    productType: "",
  });
  const [toast, setToast] = useState({
    open: false,
    message: "",
  });

  const [stepThree, setStepThree] = useState<FormStepThree>({
    workingOn: "",
  });

  const stepFour: FormStepFour = useMemo(() => {
    return {
      clockOut: dayjs().add(8, "hours").format("YYYY-MM-DD HH:mm"), // assuming working 8 hours a day
    };
  }, []);

  const handleClickNext = async () => {
    if (activeStep === 3) {
      const formData = new FormData();
      const request = {
        ...stepOne,
        ...stepTwo,
        ...stepThree,
        ...stepFour,
      };

      Object.entries(request).forEach(([key, value]: [string, string]) => {
        formData.append(key, value);
      });

      submit
        .then((value) => console.log(value))
        .catch((error) => {
          console.log("request", request);
          setToast({
            open: true,
            message: error,
          });
        });
      return;
    }
    setActiveStep((prevState) => prevState + 1);
  };
  const handleChange = (value: string, name: string, step: number) => {
    switch (step) {
      case 0:
        setStepOne((prevState: any) => ({
          ...prevState,
          [name]: value,
        }));
        return;
      case 1:
        setStepTwo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      case 2:
        setStepThree((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        return;
      default:
        return;
    }
  };
  const handleCloseToast = () => {
    setToast((prevState) => ({ ...prevState, open: false }));
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
            data={stepTwo}
            onClickNext={handleClickNext}
            onChange={(value, name) => handleChange(value, name, 1)}
          />
        );
      case 2:
        return (
          <StepThree
            prevData={{ ...stepOne, ...stepTwo }}
            data={stepThree}
            onClickNext={handleClickNext}
            onChange={(value, name) => handleChange(value, name, 2)}
          />
        );
      case 3:
        return (
          <StepFour
            data={stepFour}
            prevData={{ ...stepOne, ...stepTwo, ...stepThree, ...stepFour }}
            onClickNext={handleClickNext}
          />
        );
      default:
        return;
    }
  };

  return (
    <Card sx={{ borderRadius: 3, padding: 2, minHeight: "32rem" }}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={toast.open}
        onClose={handleCloseToast}
        autoHideDuration={3000}
      >
        <Alert severity="error">{toast.message}</Alert>
      </Snackbar>

      <Steps activeStep={activeStep} />

      <Divider sx={{ marginTop: 3, marginBottom: 1.5 }} />

      <Countdown />

      <StepTitle step={activeStep} />

      {renderStep()}
    </Card>
  );
}
