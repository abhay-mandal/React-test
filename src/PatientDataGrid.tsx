import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 180,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.birthDate || "--"}`,
  },
  {
    field: "address",
    headerName: "Adress",
    sortable: false,
    width: 400,
  },
  {
    field: "telecom",
    headerName: "Phone",
    sortable: false,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

let rows = [
  {
    id: "592851",
    meta: {
      versionId: "1",
      lastUpdated: "2020-01-28T08:07:35.338+00:00",
      source: "#u4ep6EDMPNbw9PjV",
    },
    name: [
      {
        use: "official",
        family: "family",
        given: ["abc", "sy"],
      },
      {
        use: "usual",
        given: ["abc sy"],
      },
    ],
    gender: "male",
    birthDate: "1990-11-19",
  },
];

export default function PatientDataGrid({ patientList }: any) {
  console.log("patientList", patientList);
  rows = patientList;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
