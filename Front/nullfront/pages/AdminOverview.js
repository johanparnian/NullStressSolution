import ShowAdmins from "../Components/Show/ShowAdmins";
import CreateAdmin from "../Components/Create/createadmin";
import Header from "../Components/Show/Header";
import Footer from "../Components/Show/Footer";

import ShowInfoAboutAdminProfile from "../Components/Show/ShowInfoAboutAdminProfile";

export default function AdminOverview() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row" id="mainview">
                    <div className="col-1" id="white"></div>

                    <div className="overskrift1">
                        Velg eller legg til ny lærer
                    </div>
                    <div className="col-1" id="white"></div>
                </div>

                <div className="row" id="mainview">
                    <div className="col-1" id="white"></div>
                    <div className="col"><ShowAdmins></ShowAdmins></div>
                    <div className="col"><CreateAdmin></CreateAdmin></div>
                    <div className="col-1" id="white"></div>
                </div>
            <Footer></Footer>
            </div>
        </>
    )
}