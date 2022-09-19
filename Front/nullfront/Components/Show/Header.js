import Link from "next/link";

const headerImageSize = 60;

const headerColorHexCode = 143847

export default function Header() {
        return (
                <div>
                        <nav class="navbar navbar-expand fixed-top navbar-dark">
                                <div class="container justify-content-center">
                                        <div class="row">
                                                <div>
                                                <a class="navbar-brand">
                                                                <div className="title">Null Stress</div>
                                                                <div className="questionmark">?</div>
                                                        </a>
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
                                                                <Link className="nav-item" href="/"><a className="nav-link mx-5">Forside</a></Link>
                                                                <Link className="nav-item" href="Kontrollpanel"><a className="nav-link mx-4">Kontrollpanel</a></Link>

                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </nav>

                </div>
        )
}
