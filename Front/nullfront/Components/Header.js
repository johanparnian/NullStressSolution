import Link from "next/link";


export default function Header() {
        return (
                <div>
                        <div className="container_header">
                                <h1>Null Stress</h1>
                        </div>
                        <div className="header_icons">
                                <img
                                        draggable="false"
                                        alt="image"
                                        src="1.png"
                                        height="100"
                                        width="100"

                                />

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="2.png"
                                        height="100"
                                        width="100"
                                />

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="3.png"
                                        height="100"
                                        width="100"
                                />

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="4.png"
                                        height="100"
                                        width="100"
                                />
                                <img
                                        draggable="false"
                                        alt="image"
                                        src="5.png"
                                        height="100"
                                        width="100"
                                />

                        </div>
                        <div className="navbar">
                                <ul>
                                        {/* skal det være Link her, dette er kanskje ikke riktige typer link eller routing??? */}
                                        <li><a className="active" href="/">Hjem</a></li>
                                        <li><a className="active" href="/Kontrollpanel">Kontrollpanel</a></li>
                                </ul>
                        </div>
                </div>
        )
}
