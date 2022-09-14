import HeaderMenu from "../Components/Admin/HeaderMenu";
import ShowInfoAboutAdminProfile from "../Components/Admin/ShowInfoAboutAdminProfile";
import CreateAdmin from "../Components/createadmin";


export default function Minprofil() {
    return (
        <div>
            <HeaderMenu />
            <CreateAdmin />
            <ShowInfoAboutAdminProfile />
        </div>
    )
}