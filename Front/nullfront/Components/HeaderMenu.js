import Link from "next/link";


export default function HeaderMenu() {
    return (
        <div class="container_menu">
                <ul>
                    <li><a class="active" Link href="/">Hjem</a></li>
                    <li><a class="active" Link href="/Kontrollpanel">Kontrollpanel</a></li>
                </ul>
        </div>
    )
}












            {/* <nav>
                <div id="nav-flex">
                <Link href={"/"}>Hjem</Link>
                <Link href={"/kontrollpanel"}>Kontrollpanel</Link>
                </div>
            </nav> */}