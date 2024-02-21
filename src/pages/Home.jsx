import PrendreRDV from "../components/C1-client";
import SideBar from "../components/SideBar";
import "../style/Home.css";

export default function Home() {
  const sidebarData = [
    {
      id: "part1",
      title: "RDV",
      content: (
        <div className="form-container">
          {" "}
          <PrendreRDV />{" "}
        </div>
      ),
    },
    {
      id: "part2",
      title: "Historique des rendez-vos",
      content: <div className="form-container">La liste des rendez-vous</div>,
    },
    {
      id: "part3",
      title: "part 3",
      content: <div className="form-container">part 3</div>,
    },
  ];
  return (
    <div className="home-page">
      <SideBar sidebarData={sidebarData} />
    </div>
  );
}
