import ShowAdmins from "../Components/arkiv/ShowAdmins";
import CreateAdmin from "../Components/Create/createadmin";

export default function AdminOverview() {
    return (
        <div>
            <ShowAdmins></ShowAdmins>
            <CreateAdmin></CreateAdmin>
        </div>
    )
}