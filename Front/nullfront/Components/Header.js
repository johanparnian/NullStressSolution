import Link from "next/link";

const headerImageSize = 60;

export default function Header() {
        return (
                <div>
                        <nav class="navbar navbar-expand fixed-top bg-dark navbar-dark">
                                <div class="container justify-content-center">
                                        <div class="row">
                                                <div>
                                                        <a class="navbar-brand"><h1>Null Stress</h1></a>
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="1.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="2.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="3.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="4.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="5.png"
                                                                height={headerImageSize}
                                                        />
                                                        <ul class="navbar-nav mx-auto">
                                                                <li class="nav-item">
                                                                        <a class="nav-link mx-4" href="/">Hjem</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                        <a class="nav-link mx-4" href="Kontrollpanel">Kontrollpanel</a>
                                                                </li>
                                                                {/* skal det være Link her, dette er kanskje ikke riktige typer link eller routing??? */}
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </nav>

                </div>
        )
}
