import ShowAdmins from "../Components/Show/ShowAdmins";
import CreateAdmin from "../Components/Create/createadmin";

export default function AdminOverview() {
    return (
        <div>
            <ShowAdmins></ShowAdmins>
            <CreateAdmin></CreateAdmin>
        </div>
    )
}