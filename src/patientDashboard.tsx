import { Box, Stack, Typography } from "@mui/material";
import RangeSlider from "./FilterRange";
import PatientDataGrid from "./PatientDataGrid";
import usePatientInfo from "./customHooks/usePatientInfo";
import { useState } from "react";

function PatientDashboard() {
  const [patientList]: any = usePatientInfo(
    "https://hapi.fhir.org/baseR4/Patient?_pretty=true"
  );
  // console.log("patientList", patientList);

  const filterAge = (age: number) => {
    console.log("age", age);
  };

  return (
    <>
      <Box sx={{ width: 600 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="top">
          <Typography gutterBottom>Filter by age</Typography>
          <RangeSlider filterAge={filterAge}></RangeSlider>
        </Stack>
      </Box>
      {patientList?.length && (
        <PatientDataGrid patientList={patientList}></PatientDataGrid>
      )}
    </>
  );
}
export default PatientDashboard;
