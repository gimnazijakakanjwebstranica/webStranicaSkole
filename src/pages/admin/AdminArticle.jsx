import CreateArticleForm from "../../components/CreateArticleForm";
import ListArticle from "../../components/ListArticle";
import AdminNavBar from "../../components/AdminNavBar";

const AdminArticle = () => {

  return (
    <div>
      <AdminNavBar />
      <div className="flex justify-center flex-wrap gap-9">
        <div className="shadow-lg p-5 border-[1px] rounded-md">
          <div className="flex justify-center flex-wrap gap-9">
            <CreateArticleForm />
            <ListArticle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminArticle;
