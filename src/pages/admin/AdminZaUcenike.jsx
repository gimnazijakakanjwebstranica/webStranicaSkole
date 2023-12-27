import AdminNavBar from "../../components/AdminNavBar";
import AddSekcije from "../../components/AddSekcije";
import ListSekcije from "../../components/ListSekcije";
import AddVannastavneAktivnosti from "../../components/AddVannastavneAktivnosti";
import ListVannastavneAktivnosti from "../../components/ListVannastavneAktivnosti";

const AdminZaUcenike = () => {
  return (
    <div className="font-link">
      <AdminNavBar />
      <div className="flex justify-center flex-wrap gap-9">
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-2xl font-bold pb-4">Sekcije</h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddSekcije />
            <ListSekcije />
          </div>
        </div>
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-2xl font-bold pb-4">
            Vannastavne aktivnosti
          </h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddVannastavneAktivnosti />
            <ListVannastavneAktivnosti />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminZaUcenike;
