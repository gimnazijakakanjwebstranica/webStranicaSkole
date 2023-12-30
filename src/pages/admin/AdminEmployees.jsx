import AdminNavBar from "../../components/AdminNavBar";
import AddUprava from "../../components/AddUprava"
import ListUprava from "../../components/ListUprava"
import ListProfessors from "../../components/ListProfessors";
import AddProfessor from "../../components/AddProfessor";
import AddAdministrativno from "../../components/AddAdministrativno";
import ListAdministrativno from "../../components/ListAdministrativno";
import AddPomocno from "../../components/AddPomocno";
import ListPomocno from "../../components/ListPomocno";

const AdminEmployees = () => {
  return (
    <div className="font-link">
      <AdminNavBar />
      <div className="flex justify-center flex-wrap gap-9">
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-4xl font-bold pb-4">Uprava</h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddUprava />
            <ListUprava />
          </div>
        </div>
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-4xl font-bold pb-4">Profesori</h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddProfessor />
            <ListProfessors />
          </div>
        </div>
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-4xl font-bold pb-4">
            Administrativno osoblje
          </h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddAdministrativno />
            <ListAdministrativno />
          </div>
        </div>
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-4xl font-bold pb-4">
            Pomoćno-tehničko osoblje
          </h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddPomocno />
            <ListPomocno />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployees;
