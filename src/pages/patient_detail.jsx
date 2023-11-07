import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockDataCases } from "../data/mockData";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const Patient_Detail = ({ match }) => {
  const patientName = match;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const columns = [
    {
      field: "id",
      flex: 1,
      headerName: "Case Reference Number",
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <div style={{ cursor: "pointer" }}>
          <Link
            to={`/patient_info/${params.row.id}`}
            style={{ color: "white" }}
          >
            {params.row.id}
          </Link>
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      type: "date",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "endDate",
      headerName: "End Date",
      type: "date",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "caseStatus",
      headerName: "Case Status",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Patient Information" subtitle="Managing patient data" />
      <div>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          fixed
        >
          <Tab label="Patient Profile" />
          <Tab label="Cases" />
        </Tabs>
        {currentTab === 0 ? (
          <div>
            <Typography variant="h6">Patient Profile</Typography>
          </div>
        ) : (
          currentTab === 1 && (
            <Box
              m="10px 0 0 0"
              height="auto"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
              }}
            >
              <DataGrid rows={mockDataCases} columns={columns} />
            </Box>
          )
        )}
      </div>
    </Box>
  );
};

export default Patient_Detail;
