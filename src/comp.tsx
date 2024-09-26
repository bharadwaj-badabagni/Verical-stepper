import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import IconButton from "@mui/material/IconButton";

// ----------------------------------------------------------------------

const stepsMain = [
  {
    label: "Date Of Visit",
  },
  {
    label: "Post-Procedure/Discharge",
  },
  {
    label: "Patient Demographics",
  },
  {
    label: "Eligibility Criteria",
  },
  {
    label: "Vital Signs",
  },
  {
    label: "Physical Examinations",
  },
  {
    label: "Medical & Cardiac History",
  },
];

const stepsNested = [
  {
    label: "Risk Factor For Cad",
  },
  {
    label: "Medical History",
  },
  {
    label: "Angina Status",
  },
];

export default function VerticalLinearStepper() {
  const [activeStepMain, setActiveStepMain] = useState(0);
  const [selectedStep, setSelectedStep] = useState(null); // Track selected step for container
  const [activeStepNested, setActiveStepNested] = useState(0); // Track steps for the nested stepper

  const handleStepClickMain = (index) => {
    setActiveStepMain(index);
    setSelectedStep(index === selectedStep ? null : index); // Toggle container visibility
  };

  const handleStepClickNested = (index) => {
    setActiveStepNested(index); // Set the active step for the nested stepper
  };

  const handleResetMain = () => {
    setActiveStepMain(0);
    setSelectedStep(null);
  };

  const handleResetNested = () => {
    setActiveStepNested(0);
  };

  return (
    <>
      <Stepper activeStep={activeStepMain} orientation="vertical">
        {stepsMain.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              onClick={() => handleStepClickMain(index)}
              style={{ cursor: "pointer" }} // Add pointer cursor for clickability
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box sx={{ mt: 3 }}>
                {/* Conditionally render the white container below each respective label */}
                {selectedStep === index && index === 6 && (
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      mt: 2,
                      bgcolor: "white",
                      boxShadow: "0px 4px 12px rgba(15, 15, 15, 0.15)",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6">
                      Details for: {step.label}
                    </Typography>
                    <Typography paragraph>
                      This is where you can add more information or details
                      about the step.
                    </Typography>

                    {/* Nested stepper */}
                    <Stepper
                      activeStep={activeStepNested}
                      orientation="vertical"
                    >
                      {stepsNested.map((nestedStep, nestedIndex) => (
                        <Step key={nestedStep.label}>
                          <StepLabel
                            onClick={() => handleStepClickNested(nestedIndex)}
                            style={{ cursor: "pointer" }}
                          >
                            {nestedStep.label}
                          </StepLabel>
                          <StepContent>
                            <Box display="flex" gap={2}>
                              {/* Task Done Button */}
                              <IconButton
                                aria-label="task done"
                                sx={{
                                  width: "24px",
                                  height: "24px",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "100% 100%",
                                  backgroundImage:
                                    "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cg fill=%27none%27 stroke=%272da935%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 color=%272da935%27%3E%3Cpath d=%27M13.5 20s1 0 2 2c0 0 3.177-5 6-6M7 16h4m-4-5h8M6.5 3.5c-1.556.047-2.483.22-3.125.862-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C4.253 22 5.668 22 8.496 22h2.5m4.496-18.5c1.556.047 2.484.22 3.125.862.88.88.88 2.295.88 5.126V13.5%27/%3E%3Cpath d=%27M6.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 110 3.5h-5.5a1.75 1.75 0 01-1.75-1.75%27/%3E%3C/g%3E%3C/svg%3E')",
                                }}
                              />
                              {/* Task Remove Button */}
                              <IconButton
                                aria-label="task remove"
                                sx={{
                                  width: "24px",
                                  height: "24px",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "100% 100%",
                                  backgroundImage:
                                    "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cg fill=%27none%27 stroke=%27ec2727%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 color=%27ec2727%27%3E%3Cpath d=%27m21.5 16-3 3m0 0-3 3m3-3 3 3m-3-3-3-3M7 16h4m-4-5h8M6.5 3.5c-1.556.047-2.483.22-3.125.862-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C4.253 22 5.668 22 8.496 22H12m3.492-18.5c1.556.047 2.484.22 3.125.862.88.88.88 2.295.88 5.126V12.5%27/%3E%3Cpath d=%27M6.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 110 3.5h-5.5a1.75 1.75 0 01-1.75-1.75%27/%3E%3C/g%3E%3C/svg%3E')",
                                }}
                              />
                            </Box>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>

                    {activeStepNested === stepsNested.length && (
                      <Paper
                        sx={{
                          p: 3,
                          mt: 3,
                          bgcolor: (theme) =>
                            alpha(theme.palette.grey[500], 0.12),
                        }}
                      >
                        <Typography paragraph>
                          All nested steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleResetNested}>
                          Reset Nested Stepper
                        </Button>
                      </Paper>
                    )}
                  </Paper>
                )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStepMain === stepsMain.length && (
        <Paper
          sx={{
            p: 3,
            mt: 3,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
          }}
        >
          <Button onClick={handleResetMain}>Reset Main Stepper</Button>
        </Paper>
      )}
    </>
  );
}
