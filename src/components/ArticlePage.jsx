import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/novosti/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <NavBar />
      {loading ? (
        <Spinner />
      ) : (
        <div className="font-link text-xl max-w-2xl mx-auto flex flex-col justify-center">
          <div className="p-4">
            <h1 className="text-4xl font-bold pb-2">{article.title}</h1>
            <p>{article.date}</p>
          </div>
          <div className=" p-4 border-t-[1px] border-b-[1px] border-black">
            <p>{article.body}</p>
          </div>
          <div className="p-4">
            <p>Fotografije:</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
