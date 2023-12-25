import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Article = ({ id, title, date, images }) => {
  return (
    <div className="font-link p-4">
      <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/novosti/${id}`}>
          {images ? (
            <img className="rounded-t-lg hover:opacity-80" src={images[0]} />
          ) : (
            <></>
          )}
        </Link>
        <div className="p-5">
          <Link to={`/novosti/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {date}
          </p>
          <Link
            to={`/novosti/${id}`}
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pročitaj više
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
