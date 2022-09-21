import { useState } from "react";

export default function CreateClass(props) {
    const [schoolClassName, setSchoolClassName] = useState("")

    const { createClass } = props

    const handleCreateClass = async e => {
        await createClass(e, schoolClassName)
        setSchoolClassName("")
    }

    return (
        <div>
                                <div className="svartramme">

            <form>
                    <div className="overskrift2"><p>Ny skoleklasse</p></div>
                    &ensp;
                    <input placeholder="Navn..." value={schoolClassName} onChange={event => setSchoolClassName(event.target.value)} type="Text"></input>
                    
                <button type="submit" onClick={handleCreateClass}>Lagre</button>
            </form>
            </div>
        </div>
    )

}
