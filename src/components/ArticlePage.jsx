import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import NavBar from "./NavBar";
import { useEffect, useState, useCallback } from "react";
import Footer from "./Footer";
import ImageViewer from "react-simple-image-viewer";
import { CiClock1 } from "react-icons/ci";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { id } = useParams();

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/novosti/${id}`)
      .then((res) => {
        setArticle(res.data);
        setImages(res.data.images);
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
        <div
          className={`max-w-3xl mx-auto  my-4 p-4 font-link text-white rounded bg-gray-800 text-lg 
              ${windowWidth < 800 && "ml-4 mr-4"}
            `}
        >
          <div className="p-4">
            <h1 className="text-2xl font-bold pb-2">{article.title}</h1>
            <p className="text-sm pl-2 flex align-middle items-center">
              <CiClock1 />
              <p className="pl-2 pt-1">{article.date}</p>
            </p>
          </div>
          <div className="text-sm p-4 border-t-[1px] border-white border-b-[1px]">
            <p>{article.body}</p>
          </div>
          <div className="ml-4 pt-3 flex flex-wrap">
            {images.map((src, index) => (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                key={index}
                className="m-1 cursor-pointer h-32 sm:block"
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ArticlePage;
