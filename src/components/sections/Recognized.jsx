import "./Recognized.css";
import logos from "../../assets/logos.png";

function Recognized() {
  return (
    <section className="recognizedsection">

      <div className="recognizedwrapper">

        <div className="recognizedbadge">
          Recognised by
        </div>

        <div className="recognizedlogos">
          <img src={logos} alt="recognized logos" />
        </div>

      </div>

    </section>
  );
}

export default Recognized;