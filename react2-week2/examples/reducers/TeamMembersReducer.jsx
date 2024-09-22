import { Roles } from "@/enums/Roles";



export default function TeamMembersReducer(teamMembers, action) {
    console.log("Dispatch called with " + action.type)
    switch(action.type) {
        case 'add_member':
            return [
                ...teamMembers,
                getRandomMember(action.team)
            ];
        case 'remove_member':
            return teamMembers.filter(x => x.id !== action.memberId)
        case 'grant_icecream':
            console.log('Add icecream')
            const teamMember = teamMembers.find(x => x.id === action.memberId);
            teamMember.icecreams += 1;
            return [...teamMembers]
        default:
            throw Error("Unknown type")
    }
}

function getRandomMember(team) {
    const names = ["Carla", "Michael", "Simone", "Tasha", "Paul", "Jerry"];
    const flavours = ["chocolate", "vanilla", "strawberry"];

    const member = {
        id: getRandomInt(1000),
        team: team,
        username: getRandomItem(names),
        role: Roles.guardian,
        icecreams: getRandomInt(3),
        favoriteFlavour: getRandomItem(flavours),
    }
    console.log("new Member", member)
    return member
}

function getRandomItem(items) {
    return items[getRandomInt(items.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




