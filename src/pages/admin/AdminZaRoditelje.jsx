import AdminNavBar from "../../components/AdminNavBar";
import AddTermin from "../../components/AddTermin";
import ListTermini from "../../components/ListTermini"

const AdminZaRoditelje = () => {
  return (
    <div className="font-link">
      <AdminNavBar />
      <div className="flex justify-center flex-wrap gap-9">
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-2xl font-bold pb-4">Vijeće roditelja</h1>
          <div className="flex justify-center flex-wrap gap-9">
            
          </div>
        </div>
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-2xl font-bold pb-4">
            Termini individualnih konsultacija
          </h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddTermin />
            <ListTermini/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminZaRoditelje;
