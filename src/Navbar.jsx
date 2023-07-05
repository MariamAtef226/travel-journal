import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return(
        <>
        <div className="navbar fs-4 p-4">
           <div className="header"> <FontAwesomeIcon icon={faPlane} /> My Travel Journal</div>
            </div>
            </>
    )
}