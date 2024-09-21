import { Box, Container, Typography } from "@mui/material";
import UserTable from "./UserTable";
import { Margin } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export default function TeamSection({ teamName, users }) {
  return (
    <>
      <Typography variant="h4" sx={{ marginTop: 5 }} component="h2">
        Team {teamName}
      </Typography>
      <UserTable users={users}></UserTable>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          style={{ float: "right", margin: "10px" }}
        >
          Add Member
        </Button>
    </Box>
    </>
  );
}
