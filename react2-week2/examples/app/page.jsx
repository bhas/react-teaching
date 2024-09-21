"use client"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { useState } from "react";
import Welcome from "@/components/Welcome";
import UserTable from '@/components/UserTable';
import { Roles } from '@/enums/Roles';
import TeamSection from '@/components/TeamSection';
import { Box } from '@mui/material';



const team1Members = [
  { username: 'Bjørn Vinther', role: Roles.guardian, favoriteFlavour: 'vanilla', enabled: true },
  { username: 'Alice', role: Roles.guardian, favoriteFlavour: 'vanilla', enabled: true },
  { username: 'Bobby Jr.', role: Roles.crawer, favoriteFlavour: 'chocolate', enabled: false },
];

const team2Members = [
  { username: 'Bjørn Vinther', role: Roles.crawer, favoriteFlavour: 'vanilla', enabled: true },
  { username: 'Charlie', role: Roles.crawer, favoriteFlavour: 'strawberry', enabled: true },
  { username: 'Daisy', role: Roles.crawer, favoriteFlavour: 'strawberry', enabled: true },
  { username: 'Eve L.', role: Roles.crawer, favoriteFlavour: 'chocolate', enabled: false },
];

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [team1, setTeam1] = useState(team1Members);
  const [team2, setTeam2] = useState(team2Members);

  return <Box sx={{margin: 3}}>
      <Welcome></Welcome>
      <TeamSection users={team1} teamName={"Panda 🐼"}></TeamSection>
      <TeamSection users={team2} teamName={"Kangaroo 🦘"}></TeamSection>
    </Box>
}


