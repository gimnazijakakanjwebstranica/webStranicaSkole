import NavBar from "../components/NavBar"
import ArticleList from "../components/ArticleList"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div className="font-link">
            <NavBar/>
            <h1 className="text-center text-4xl font-extrabold pt-3">Novosti</h1>
            <ArticleList />
            <Footer/>
        </div>
    )
}

export default Home