import CreateArticleForm from "../components/CreateArticleForm";
import ListArticle from "../components/ListArticle";
import AdminNavBar from "../components/AdminNavBar";

const AdminArticle = () => {

  return (
    <div>
          <AdminNavBar />
          <div className="flex justify-center flex-wrap gap-9">
            <CreateArticleForm />
            <ListArticle />
          </div>
     
    </div>
  );
};

export default AdminArticle;
