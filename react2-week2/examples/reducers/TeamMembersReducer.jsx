import { Roles } from "@/enums/Roles";



export default function TeamMembersReducer(teamMembers, action) {
    switch(action.type) {
        case 'add_member':
            return [
                ...teamMembers,
                getRandomMember()
            ];
        case 'remove_member':
            return teamMembers.filter(x => x.id !== action.memberId)
        case 'grant_icecream':
            const teamMember = teamMembers.find(x => x.id === action.memberId);
            teamMember.icecreams++;
            return [...teamMembers]
        default:
            throw Error("Unknown type")
    }
}

function getRandomMember(team) {
    const names = ["Carla", "Michael", "Simone", "Tasha", "Paul", "Jerry"];
    const flavours = ["chocolate", "vanilla", "strawberry"];

    return {
        id: getRandomInt(1000),
        team: team,
        username: getRandomItem(names),
        role: Roles.guardian,
        icecreams: getRandomInt(3),
        favoriteFlavour: getRandomItem(flavours),
    }
}

function getRandomItem(items) {
    return items[getRandomInt(items.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




