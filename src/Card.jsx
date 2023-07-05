import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <>
      <div className="d-flex flex-column flex-md-row  p-3 border-bottom align-items-center">
        <div className="img">
          <img src={props.img} />
        </div>
        <div className="m-3">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="loc-icon" /> &nbsp;
            <span className="country text-uppercase">{props.country}</span>
          </div>
          <h1 className="place">{props.city}</h1>
          <div className="duration fw-bold">
            {props.from} {props.to && <span>-</span>} {props.to}
          </div>
          <div className="desc">{props.description}</div>
        </div>
      </div>
    </>
  );
}
