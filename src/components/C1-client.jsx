import "../style/C1-client.css";
import ReserverRDV from "./C1-PriseRDV";
import ListRDVLibre from "./ListRDVlibre";
export default function PrendreRDV() {
  return (
    <div className=" d-flex flex-column gap-2">
      <ReserverRDV />
      <ListRDVLibre />
    </div>
  );
}
