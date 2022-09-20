import ShowAdmins from "../Components/Show/ShowAdmins";
import CreateAdmin from "../Components/Create/createadmin";
import Header from "../Components/Show/Header";
import Footer from "../Components/Show/Footer";

import ShowInfoAboutAdminProfile from "../Components/Show/ShowInfoAboutAdminProfile";
import ShowBellWhenStudentAsksForHelpoutAdminProfile from "../Components/Show/ShowBellWhenStudentAsksForHelp";

export default function AdminOverview() {
    return (
        <>
            <Header></Header>

            <div className="container">
                <div>
                    <div className="col-4" id="white"></div>
                    <div className="col">
                        <div className="overskrift1">Læreroversikt</div>
                    </div>
                    <div className="col-4" id="white"></div>
                </div>
            </div>

            <div className="container">
            <div className="col"><ShowAdmins></ShowAdmins></div>
            <div className="col"><CreateAdmin></CreateAdmin></div>
            </div>
            <Footer></Footer>
        </>
    )
}