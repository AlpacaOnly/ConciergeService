import ManagerProfile from "./manager/ManagerProfile";
import ClientProfile from "./client/ClientProfile";

export default function ProfileRouter({user}) {
    switch (user.role) {
        case 'manager': return <ManagerProfile/>
        case 'client':  return <ClientProfile/>
    }
    return <h1>This is profile Router</h1>
}