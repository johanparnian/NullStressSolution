import Link from "next/link";

const headerImageSize = 10;

export default function Footer() {
        return (
                <div>
                        <nav className="navbar navbar-expand fixed-bottom navbar-dark">
                                <div className="container justify-content-center">
                                    <div className="footertext">
                                                    <b>Laget av Emilie, Solveig, Johan og Jens -</b> Teknologi: Next.js, godt humør, Tomas, ASP.NET, Anders, Twilio og Anna
                                    </div>
                                </div>
                        </nav>
                </div>
        )
}
