import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import RecursiveComponent from "./comp"; // Import the recursive component

// ----------------------------------------------------------------------

const steps = [
  {
    label: "Screening and Procedure",
  },
  {
    label: "Post-Procedure/Discharge",
  },
  {
    label: "01-Month(+/- 7days)",
  },
  {
    label: "6 months(+/- 15days)",
  },
];

export const data = [
  {
    isFolder: true,
    name: "App.tsx",
    children: [
      {
        isFolder: true,
        name: "comp.tsx",
      },
    ],
  },
];

export default function VerticalLinearStepper() {
  const [selectedStep, setSelectedStep] = useState(null); // Track selected step for container

  const handleStepClick = (index) => {
    setSelectedStep(index === selectedStep ? null : index); // Toggle container visibility
  };

  return (
    <>
      <Stepper orientation="vertical" nonLinear>
        {steps.map((step, index) => (
          <Step key={step.label} expanded>
            <StepLabel
              onClick={() => handleStepClick(index)} // Set the selected step when clicked
              sx={{ cursor: "pointer" }} // Ensure step is clickable
            >
              {step.label}
            </StepLabel>

            <StepContent>
              {/* Ensure that content renders properly */}
              <Box sx={{ mt: 3 }}>
                {selectedStep === index && (
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      mt: 2,
                      bgcolor: "white", // White background
                      boxShadow: "0px 4px 12px rgba(15, 15, 15, 0.3)", // Grey shadow effect
                      borderRadius: 2, // Rounded corners
                    }}
                  >
                    <Typography variant="h6">
                      Details for: {step.label}
                    </Typography>

                    {/* Render RecursiveComponent only for the first step */}
                    {index === selectedStep && (
                      <RecursiveComponent data={data} />
                    )}
                  </Paper>
                )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  );
}
