/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function ReserverRDV() {
  const [selectionService, setSelectionService] = useState([]);
  const [selectionEmployer, setSelectionEmployer] = useState([]);

  const handleServiceChange = (event, serviceId) => {
    if (event.target.checked) {
      setSelectionService([...selectionService, serviceId]);
    } else {
      setSelectionService(selectionService.filter((id) => id !== serviceId));
    }
  };

  const handleEmployerChange = (event, employerId) => {
    if (event.target.checked) {
      setSelectionEmployer([...selectionEmployer, employerId]);
    } else {
      setSelectionEmployer(selectionEmployer.filter((id) => id !== employerId));
    }
  };

  const [listService, setListService] = useState([
    {
      idService: 1,
      nom_service: "s1",
      commission: 1,
      duree: 100,
    },
    {
      idService: 2,
      nom_service: "s2",
      commission: 2,
      duree: 50,
    },
    {
      idService: 3,
      nom_service: "s3",
      commission: 0.5,
      duree: 90,
    },
    {
      idService: 4,
      nom_service: "s4",
      commission: 0.2,
      duree: 10,
    },
  ]);

  const [listEmployer, setListEmployer] = useState([
    {
      idEmploye: 1,
      nom: "e1",
      commission: 1,
      duree: 100,
    },
    {
      idEmploye: 2,
      nom: "e2",
      commission: 2,
      duree: 50,
    },
    {
      idEmploye: 3,
      nom: "e3",
      commission: 0.5,
      duree: 90,
    },
    {
      idEmploye: 4,
      nom: "e4",
      commission: 0.2,
      duree: 10,
    },
  ]);

  return (
    <div className="part1 d-flex flex-column align-items-start">
      {/* ---------------Date------------------- */}
      <span className="titre">Prendre un Rendez-vous</span>
      <div className="d-flex flex-row  gap-3 col-12 ">
        <label className="form-label col-2" htmlFor="daterdv">
          Choisir une date
        </label>
        <input
          type="datetime-local"
          className="form-control"
          name="daterdv"
          id="datedrv"
          placeholder="bla"
        />
      </div>

      {/* ---------------Service------------------- */}
      <div className="form-label" htmlFor="s1">
        Choisir une/les service(s):
      </div>
      <div className="d-flex flex-row gap-3 ">
        {listService.map((service, index) => (
          <span key={index} className="container">
            <label htmlFor={"service" + service.idService}>
              {service.nom_service}{" "}
            </label>
            <input
              type="checkbox"
              name="service"
              id={"service" + service.idService}
              checked={selectionService.includes(service.idService)}
              onChange={(event) =>
                handleServiceChange(event, service.idService)
              }
            />
            <div className="checkmark"></div>
          </span>
        ))}
      </div>

      {/* ---------------Empolyer------------------- */}
      <div className="form-label" htmlFor="s1">
        Choisir une/les personne(s) pour vous prendre en charge:
      </div>
      <div className="d-flex flex-row gap-3 ">
        {listEmployer.map((emp, index) => (
          <span key={index} className="container">
            <label htmlFor={"emp" + emp.idEmploye}>{emp.nom} </label>
            <input
              type="checkbox"
              name="employer"
              id={"emp" + emp.idEmploye}
              checked={selectionEmployer.includes(emp.idEmploye)}
              onChange={(event) => handleEmployerChange(event, emp.idEmploye)}
            />
            <div className="checkmark"></div>
          </span>
        ))}
      </div>

      <button type="submit" className="col-12">
        Valider
      </button>
    </div>
  );
}
