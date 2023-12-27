import NavBar from "../components/NavBar"
import ArticleList from "../components/ArticleList"
import Footer from "../components/Footer"
import GoTop from "../components/GoTop"

const Home = () => {
    return (
      <div className="font-link">
        <NavBar />
        <h1 className="text-center text-4xl font-bold pt-3">Novosti</h1>
        <ArticleList />
       <GoTop/>
        <Footer />
      </div>
    );
}

export default Home