import { Box, Container, Typography } from "@mui/material";
import UserTable from "./UserTable";
import { Margin } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Roles } from "@/enums/Roles";
import { useContext } from "react";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";

export default function TeamSection({ teamName, users, dispatch }) {

  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Typography variant="h4" sx={{ marginTop: 5 }} component="h2">
        Team {teamName}
      </Typography>
      <UserTable users={users} dispatch={dispatch}></UserTable>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {currentUser.role === Roles.guardian && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            style={{ float: "right", margin: "10px" }}
          >
            Add Member
          </Button>
        )}
      </Box>
    </>
  );
}
