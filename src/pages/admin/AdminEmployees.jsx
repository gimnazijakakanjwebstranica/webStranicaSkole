import AdminNavBar from "../../components/AdminNavBar";
import ListProfessors from "../../components/ListProfessors";
import AddProfessor from "../../components/AddProfessor";

const AdminEmployees = () => {
  return (
    <div className="font-link">
      <AdminNavBar />
      <div className="flex justify-center flex-wrap gap-9">
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <h1 className="text-center text-4xl font-bold pb-4">
            Profesori
          </h1>
          <div className="flex justify-center flex-wrap gap-9">
            <AddProfessor />
            <ListProfessors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployees;
