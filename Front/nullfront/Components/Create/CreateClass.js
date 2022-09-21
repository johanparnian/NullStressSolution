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
            <form>
                    <div className="overskrift2">Ny skoleklasse</div>
                    &ensp;
                    <input placeholder="Navn..." value={schoolClassName} onChange={event => setSchoolClassName(event.target.value)} type="Text"></input>
                    
                <button type="submit" onClick={handleCreateClass}>Lagre</button>
            </form>
        </div>
    )

}
