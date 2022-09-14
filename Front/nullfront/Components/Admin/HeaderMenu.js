import Link from "next/link";


export default function HeaderMenu() {

    return (
        <div className="container_header">
            <h1>NULL STRESS</h1>

            <nav>
                <Link href={"/"}>Hjem</Link><br/>
                <Link href={"/Nyelev"}>Ny elev</Link><br/>
                <Link href={"/Klasse"}>Klasse</Link><br/>
                <Link href={"Statistikk"}>Statistikk</Link><br/>
            </nav>
            
        </div>
    )
}