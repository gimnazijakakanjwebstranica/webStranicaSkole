import AdminNavBar from "../../components/AdminNavBar";
import AddMaturanti from "../../components/AddMaturanti";
import ListMaturnati from "../../components/ListMaturanti";
import AddUceniciGeneracije from "../../components/AddUceniciGeneracije";
import ListUceniciGeneracije from "../../components/ListUceniciGeneracije";

const AdminOSkoli = () => {
  return (
    <div className="font-link">
      <AdminNavBar />
      <div className="flex justify-center flex-wrap gap-9">
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-2xl font-bold pb-4">Maturanti</h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddMaturanti />
            <ListMaturnati />
          </div>
        </div>
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-2xl font-bold pb-4">
            Učenici generacije
          </h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddUceniciGeneracije />
            <ListUceniciGeneracije />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOSkoli;
