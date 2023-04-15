import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import { Container, Paper } from "@mui/material";

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [secondPassword, setSecondPassword] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [username, setUserName] = React.useState("");

  const steps = [
    {
      label: "Account Information",
      content: (
        <SignupStep1
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          gender={gender}
          setGender={setGender}
          firstName={firstName}
          setFirstName={setFirstName}
          surname={surname}
          setSurname={setSurname}
          secondPassword={secondPassword}
          setSecondPassword={setSecondPassword}
        />
      ),
    },
    {
      label: "Account Customization",
      content: <SignupStep2 username={username} setUserName={setUserName} />,
    },
  ];

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

  const handleComplete = async () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    if (allStepsCompleted()) {
      const data = {
        email: email,
        password: password,
        gender: gender,
        surname: surname,
        firstName: firstName,
        username: username,
        role: "user",
      };

      const response = await fetch(
        "http://localhost:8080/api/greenGo/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Vérification de la réponse de l'API
      if (response.ok) {
        // Redirection vers la page de confirmation
        window.location.href = "/";
      } else {
        // Affichage d'un message d'erreur
        alert("Une erreur s'est produite lors de l'inscription.");
      }
    }
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
