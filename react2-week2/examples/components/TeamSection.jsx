import { Box, Container, Typography } from "@mui/material";
import UserTable from "./UserTable";
import { Margin } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Roles } from "@/enums/Roles";
import { useContext } from "react";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { TeamMembersDispatchContext } from "@/contexts/TeamMembersContext";

export default function TeamSection({ team, teamName, users }) {
  const dispatch = useContext(TeamMembersDispatchContext);
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Typography variant="h4" sx={{ marginTop: 5 }} component="h2">
        Team {teamName}
      </Typography>
      <UserTable users={users}></UserTable>
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
            onClick={() => dispatch({type: 'add_member', team: team})}
          >
            Add Member
          </Button>
        )}
      </Box>
    </>
  );
}
