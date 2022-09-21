import Link from "next/link";

const headerImageSize = 60;

export default function Header() {
        return (
                <div>
                        <nav className="navbar navbar-expand fixed-top navbar-dark">
                                <div className="container justify-content-center">
                                        <div className="row">
                                                <div>
                                                <a className="navbar-brand">
                                                                <div className="title">Null Stress</div>
                                                                <div className="questionmark">?</div>
                                                        </a>
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="/1.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="/2.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="/3.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="/4.png"
                                                                height={headerImageSize}
                                                        />
                                                        <img
                                                                draggable="false"
                                                                alt="image"
                                                                src="/5.png"
                                                                height={headerImageSize}
                                                        />
                                                        <ul className="navbar-nav mx-auto">
                                                                {/* <Link className="nav-item" href="/"><a className="nav-link mx-5">Forside</a></Link> */}
                                                                <Link className="nav-item" href="/AdminOverview"><a className="nav-link mx-4">Hjem</a></Link>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </nav>

                </div>
        )
}
