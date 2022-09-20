import ShowAdmins from "../Components/Show/ShowAdmins";
import CreateAdmin from "../Components/Create/createadmin";
import Header from "../Components/Show/Header";

import ShowInfoAboutAdminProfile from "../Components/Show/ShowInfoAboutAdminProfile";

export default function AdminOverview() {
    return (
        <div>
            <Header></Header>
            <div className="container">
                    <div className="row" id="mainview">
                        <div className="col-1" id="white"></div>
                        <div className="col"><ShowAdmins></ShowAdmins></div>
                        <div className="col-5"><CreateAdmin></CreateAdmin></div>
                        <div className="col-1" id="white"></div>
                    </div>

                    <div class="row">
                        <div className="col-1" id="white"></div>
                        <div class="col"></div>
                        <div className="col"></div>
                        <div className="col-1" id="white"></div>
                    </div>

                    <div className="row">
                        <div className="col-1" id="white"><h2></h2></div>
                        <div className="col"><h2>Footer</h2></div>
                        <div className="col-1" id="white"><h2></h2></div>
                    </div>
                </div>
        </div>
    )
}