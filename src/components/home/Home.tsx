import { DataTable } from "../dataTable/DataTable";

import { Map } from "../mapContainer/Map";
import { HeaderSidebar } from "../sidebar/HeaderSidebar";
import "./styles/_container-home.sass";

export const Home = () => {
  return (
    <div className="container-home">
      <HeaderSidebar />
      <div className="container-maps-and-avatar">
        <Map />
        <DataTable />
      </div>
    </div>
  );
};
