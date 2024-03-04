import EditArticleForm from "../../components/EditArticleForm"
import AdminNavBar from "../../components/AdminNavBar"
import { useParams } from "react-router-dom"

const AdminEditArticle = () => {
const {id} = useParams() 

  return (
    <div>
    <div><AdminNavBar/></div>
    <div className="flex justify-center">
        <EditArticleForm articleId={id}/>
    </div>
    </div>
  )
}

export default AdminEditArticle