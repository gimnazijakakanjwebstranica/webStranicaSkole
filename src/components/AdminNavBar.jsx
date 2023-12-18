import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
      <>
        {windowWidth < 700 ? (
          <>
            <div className="flex mt-2 mb-4 uppercase justify-center text-xs gap-1">
              <div className="hover:text-blue-400 p-2">
                <Link to="/">Glavna</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel">Admin</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-clanci">Članci</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-za-ucenike">Za Učenike</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-za-roditelje">Za Roditelje</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-uposlenici">Uposlenici</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-o-skoli">O Školi</Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex mt-2 mb-4 uppercase justify-center text-xl gap-6">
              <div className="hover:text-blue-400 p-2">
                <Link to="/">Glavna</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel">Admin</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-clanci">Članci</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-za-ucenike">Za Učenike</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-za-roditelje">Za Roditelje</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-uposlenici">Uposlenici</Link>
              </div>
              <div className="hover:text-blue-400 p-2">
                <Link to="/admin-panel/admin-o-skoli">O Školi</Link>
              </div>
            </div>
          </>
        )}
      </>
    );
};

export default AdminNavBar;
