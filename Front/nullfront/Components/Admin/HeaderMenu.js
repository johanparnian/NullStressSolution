import Link from "next/link";


export default function HeaderMenu() {

    return (
        <div className="container_header">
            <div>
                
            </div>
            <div class="header_title">
                <h1>NULL STRESS</h1>
            </div>
            

            <nav>
                <Link href={"/"}>Hjem</Link>
                {/* <Link href={"/kontrollpanel"}>Kontrollpanel</Link> */}
            </nav>
            
        </div>
    )
}