import Article from "./Article.jsx";
import Spinner from "./Spinner.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://gimnazija.netlify.app/.netlify/functions/api")
      .then((res) => {
        setData(res.data.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="font-link flex justify-center sm:ml-6 lg:ml-16 items-center min-h-screen">
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-2xl w-full">
          <div>
            {data.map((article, index) => (
              <div key={index} className="w-full mb-4">
                <Article
                  id={article._id}
                  title={article.title}
                  date={article.date}
                  images={article.images}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
