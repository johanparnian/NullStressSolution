import Link from "next/link";


export default function Header() {
        return (
                <div>
                        <div className="container_header">
                                <h1>NULL STRESS</h1>
                        </div>
                        <div className="header_icons">
                                <img
                                        draggable="false"
                                        alt="image"
                                        src="1.png"
                                        height="100"
                                        width="100"

                                ></img>

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="2.png"
                                        height="100"
                                        width="100"
                                ></img>

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="3.png"
                                        height="100"
                                        width="100"
                                ></img>

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="4.png"
                                        height="100"
                                        width="100"
                                ></img>

                                <img
                                        draggable="false"
                                        alt="image"
                                        src="5.png"
                                        height="100"
                                        width="100"
                                ></img>
                                <div class="nav-bar">
                                        <ul>
                                                <li><a class="active" Link href="/">Hjem</a></li>
                                                <li><a class="active" Link href="/Kontrollpanel">Kontrollpanel</a></li>
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}
