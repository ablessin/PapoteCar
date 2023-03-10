import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import { Container, Paper } from "@mui/material";

const steps = [
  {
    label: "Account Information",
    content: <SignupStep1 />,
  },
  {
    label: "Account Customization",
    content: <SignupStep2 />,
  },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 5, height: "auto" }}>
          <Box>{steps[activeStep].content}</Box>

          <div>
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {activeStep !== 0 && (
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Retour
                  </Button>
                )}
                <Box />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleComplete}
                >
                  Valider
                </Button>
              </Box>
            </React.Fragment>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}

//           <Box sx={{ width: "100%" }}>
//             <Stepper nonLinear activeStep={activeStep}>
//               {steps.map((label, index) => (
//                 <Step key={label} completed={completed[index]}>
//                   <StepButton color="inherit" onClick={handleStep(index)}>
//                     {label}
//                   </StepButton>
//                 </Step>
//               ))}
//             </Stepper>
//           </Box>
//           <Typography
//             variant="h4"
//             component="h1"
//             sx={{ mb: 2, textAlign: "center" }}
//           >
//             Inscription
//           </Typography>
//           <Box
//             component="form"
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "100%" },
//             }}
//             noValidate
//             autoComplete="off"
//             className={Style.formContainer}
//           >
//             <Box>{steps[activeStep].content}</Box>
//             <Link href="/connexion" color="inherit" sx={{ mb: 3 }}>
//               D??j?? un compte ? Se connecter
//             </Link>
//             <Button variant="contained" color="success">
//               Valider
//             </Button>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// }
