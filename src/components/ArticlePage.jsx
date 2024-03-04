import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { CiClock1 } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BACKEND_URL } from "../../backend/config";
import { IoClose } from "react-icons/io5";

const MediaModal = ({ data, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-100">
       <button
        className="absolute top-2 z-50 right-2 p-2 cursor-pointer rounded-full text-3xl"
        onClick={onClose}
      > <IoClose /></button>
      <div className=" max-h-screen max-w-screen">
       
        {data.map((media, index) => (
          <div key={index} className={index === currentMediaIndex ? 'block' : 'hidden'}>
            {media.type === 'image' && (
              <div className="flex justify-center items-center h-full">
                <img src={media.data} className="object-cover  h-full max-w-full" />
              </div>
            )}

            {media.type === 'video' && (
              <video controls className="w-11/12 mx-auto">
                <source src={media.data} type="video/mp4" />
                Vaš pretraživać ne podržava video.
              </video>
            )}
          </div>
        ))}
        
      </div>
      <button className="absolute top-1/2 left-4 text-4xl  text-white " onClick={prevMedia}><FaChevronLeft /></button>
      <button className="absolute top-1/2 right-4  text-white text-4xl" onClick={nextMedia}><FaChevronRight /></button>
    </div>
  );
};

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { id } = useParams();

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
      .get(`${BACKEND_URL}/novosti/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
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
            {article.images &&
              article.images.map((item, index) => (
                <div key={index} className="m-1 cursor-pointer">
                  {item.type === 'image' && (
                    <img
                      src={item.data}
                      onClick={() => setIsViewerOpen(true)}
                      className="h-32 sm:block"
                      alt={`Image ${index}`}
                    />
                  )}
                  {item.type === 'video' && (
                    <video
                      className="h-32 sm:block"
                      onClick={() => setIsViewerOpen(true)}
                    >
                      <source src={item.data} type="video/mp4" />
                      Vaš pretraživać ne podržava video
                    </video>
                  )}
                </div>
              ))}

              {isViewerOpen && (
                <MediaModal
                  data={article.images}
                  onClose={() => setIsViewerOpen(false)}
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
