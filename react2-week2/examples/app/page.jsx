"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { useReducer, useState } from "react";
import Welcome from "@/components/Welcome";
import UserTable from "@/components/UserTable";
import { Roles } from "@/enums/Roles";
import TeamSection from "@/components/TeamSection";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Icecream } from "@mui/icons-material";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import TeamMembersReducer from "@/reducers/teamMembersReducer";

const initialTeamMembers = [
  {
    id: 1,
    team: "panda",
    username: "Bjørn Vinther",
    role: Roles.guardian,
    icecreams: 0,
    favoriteFlavour: "vanilla",
  },
  {
    id: 2,
    team: "panda",
    username: "Alice",
    role: Roles.guardian,
    icecreams: 0,
    favoriteFlavour: "vanilla",
  },
  {
    id: 3,
    team: "panda",
    username: "Bobby Jr.",
    role: Roles.crawer,
    icecreams: 1,
    favoriteFlavour: "chocolate",
  },
  {
    id: 4,
    team: "kangaroo",
    username: "Kaizad",
    role: Roles.crawer,
    icecreams: 0,
    favoriteFlavour: "vanilla",
  },
  {
    id: 5,
    team: "kangaroo",
    username: "Charlie",
    role: Roles.crawer,
    icecreams: 0,
    favoriteFlavour: "strawberry",
  },
  {
    id: 6,
    team: "kangaroo",
    username: "Daisy",
    role: Roles.crawer,
    icecreams: 0,
    favoriteFlavour: "strawberry",
  },
  {
    id: 7,
    team: "kangaroo",
    username: "Eve L.",
    role: Roles.crawer,
    icecreams: 2,
    favoriteFlavour: "chocolate",
  },
];

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [teamMembers, dispatch] = useReducer(TeamMembersReducer, initialTeamMembers);


  const handleOnLogout = () => {
    setCurrentUser(null);
  };

  const handleRoleChange = (role) => {
    setCurrentUser({ ...currentUser, role: role });
  }

  const renderUnauthorizedPage = () => {
    return (
      <Stack sx={{ margin: 10 }} direction="column" alignItems="center" gap={2}>
        <Typography variant="h4">You are not yet logged in.</Typography>
        <Typography>
          If you want to get delicious icecream you need to log in.
        </Typography>
        <Image src="/icecream.png" width={200} height={200}></Image>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => setCurrentUser({ name: "Bjørn", role: Roles.crawer })}
        >
          Log In as Bjørn
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() =>
            setCurrentUser({ name: "Kaizad", role: Roles.guardian })
          }
        >
          Log In as Kaizad
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => setCurrentUser({ name: "David", role: Roles.crawer })}
        >
          Log In as David
        </Button>
      </Stack>
    );
  };

  const renderPageContent = () => {
    return (
      <>
        <Welcome onSetRole={handleRoleChange}></Welcome>
        <TeamSection users={teamMembers.filter((x) => x.team === "panda")} teamName={"Panda 🐼"} dispatch={dispatch}></TeamSection>
        <TeamSection users={teamMembers.filter((x) => x.team === "kangaroo")} teamName={"Kangaroo 🦘"} dispatch={dispatch}></TeamSection>
        <Button onClick={() => dispatch({type: "remove_member", memberId: 2})}>Remove</Button>
      </>
    );
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Container className={styles.container} maxWidth="md">
        <Header onLogout={handleOnLogout}></Header>
        <Box sx={{ margin: 3 }}>
          {!currentUser ? renderUnauthorizedPage() : renderPageContent()}
        </Box>
        <Footer></Footer>
      </Container>
    </CurrentUserContext.Provider>
  );
}
