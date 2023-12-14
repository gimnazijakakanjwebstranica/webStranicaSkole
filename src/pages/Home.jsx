import NavBar from "../components/NavBar"
import ArticleList from "../components/ArticleList"

const Home = () => {
    return (
        <div className="font-link">
            <NavBar/>
            <h1 className="text-center text-4xl font-extrabold pt-3">Novosti</h1>
            <ArticleList/>
        </div>
    )
}

export default Home