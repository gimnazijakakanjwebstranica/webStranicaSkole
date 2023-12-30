import { useRoutes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import AdminPanel from "./pages/admin/AdminPanel";

import Sekcije from "./pages/za-ucenike/Sekcije";
import IzvodIzPravilaGimnazije from "./pages/za-ucenike/IzvodIzPravilaGimnazije";
import TerminiVannastavnihAktivnosti from "./pages/za-ucenike/TerminiVannastavnihAktivnosti";
import UputstvoZaIzraduMaturskihRadova from "./pages/za-ucenike/UputstvoZaMaturskeRadove";

import VijeceRoditelja from "./pages/za-roditelje/VijeceRoditelja";
import TerminiIndividualnihKonsultacija from "./pages/za-roditelje/TerminiIndividualnihKonsultacija";

import Drustveno from "./pages/podrucja/Društveno";
import InformacionoKomunikaciono from "./pages/podrucja/InformacionoKomunikaciono";
import Jezicko from "./pages/podrucja/Jezicko";
import MatematickoInformaticko from "./pages/podrucja/MatematickoInformaticko";
import Prirodno from "./pages/podrucja/Prirodno";

import Uprava from "./pages/uposlenici/Uprava";
import Profesori from "./pages/uposlenici/Profesori";
import AdministrativnoOsoblje from "./pages/uposlenici/AdministrativnoOsoblje";
import PomocnoTehnickoOsoblje from "./pages/uposlenici/PomocnoTehnickoOsoblje";

import RijecDirektora from "./pages/o-skoli/RijecDirektora";
import Historijat from "./pages/o-skoli/Historijat";
import Maturanti from "./pages/o-skoli/Maturanti";
import UceniciGeneracije from "./pages/o-skoli/UceniciGeneracije";
import NastavniKalendar from "./pages/o-skoli/NastavniKalendar";

import ArticlePage from "./components/ArticlePage";
import AdminEmployees from "./pages/admin/AdminEmployees";
import AdminArticle from "./pages/admin/AdminArticle";
import AdminZaUcenike from "./pages/admin/AdminZaUcenike";
import AdminZaRoditelje from "./pages/admin/AdminZaRoditelje";
import AdminOSkoli from "./pages/admin/AdminOSkoli";

function App() {
  const routeResult = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/admin-panel", element: <AdminPanel /> },
    { path: "/za-ucenike/sekcije", element: <Sekcije /> },
    {
      path: "/za-ucenike/izvod-iz-pravila-gimnazije",
      element: <IzvodIzPravilaGimnazije />,
    },
    {
      path: "/za-ucenike/termini-vannastavnih-aktivnosti",
      element: <TerminiVannastavnihAktivnosti />,
    },
    {
      path: "/za-ucenike/uputstvo-za-izradu-maturskih-radova",
      element: <UputstvoZaIzraduMaturskihRadova />,
    },
    { path: "/za-roditelje/vijece-roditelja", element: <VijeceRoditelja /> },
    {
      path: "/za-roditelje/termini-individualnih-konsultacija",
      element: <TerminiIndividualnihKonsultacija />,
    },
    {
      path: "/za-roditelje/izvod-iz-pravila-gimnazije",
      element: <IzvodIzPravilaGimnazije />,
    },
    { path: "/podrucja/jezicko", element: <Jezicko /> },
    { path: "/podrucja/prirodno", element: <Prirodno /> },
    { path: "/podrucja/drustveno", element: <Drustveno /> },
    {
      path: "/podrucja/matematicko-informaticko",
      element: <MatematickoInformaticko />,
    },
    {
      path: "/podrucja/informaciono-komunikaciono",
      element: <InformacionoKomunikaciono />,
    },
    {
      path: "/uposlenici/uprava",
      element: <Uprava />,
    },
    {
      path: "/uposlenici/profesori",
      element: <Profesori />,
    },
    {
      path: "/uposlenici/administrativno-osoblje",
      element: <AdministrativnoOsoblje />,
    },
    {
      path: "/uposlenici/pomocno-tehnicko-osoblje",
      element: <PomocnoTehnickoOsoblje />,
    },
    { path: "/o-skoli/rijec-direktora", element: <RijecDirektora /> },
    { path: "/o-skoli/historijat", element: <Historijat /> },
    { path: "/o-skoli/maturanti", element: <Maturanti /> },
    { path: "/o-skoli/ucenici-generacije", element: <UceniciGeneracije /> },
    { path: "/o-skoli/nastavni-kalendar", element: <NastavniKalendar /> },

    { path: "/novosti/:id", element: <ArticlePage /> },

    { path: "/admin-panel/admin-clanci", element: <AdminArticle /> },
    { path: "/admin-panel/admin-za-ucenike", element: <AdminZaUcenike /> },
    { path: "/admin-panel/admin-uposlenici", element: <AdminEmployees /> },
    { path: "/admin-panel/admin-za-roditelje", element: <AdminZaRoditelje /> },
    { path: "/admin-panel/admin-o-skoli", element: <AdminOSkoli /> },
  ]);

  return routeResult;
}

export default App;
