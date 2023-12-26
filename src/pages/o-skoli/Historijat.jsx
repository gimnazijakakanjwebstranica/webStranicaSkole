// Historijat.jsx
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Historijat = () => {
  return (
    <div>
      <NavBar />

      <div className="container mx-auto my-8 p-8 bg-white shadow-lg">
        <header className="bg-gray-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Historijat Škole</h1>
        </header>
        <main className="mt-8">
          <section className="text-gray-700">
            {/* Vaš tekst o historijatu škole ovdje */}
            <p>
            Gimnazija u Kaknju osnovana je 1959. godine  i kao takva obrazovala je učenike do 1983. godine kada je, prelaskom na sistem usmjerenog obrazovanja, prestala da radi, da bi ponovo počela sa radom 1991. godine. Do sada je ova škola upisala 47 generacija učenika i stekla zavidnu tradiciju.                                           
Javna ustanova Gimnazija “Muhsin Rizvić” u Kaknju od 2004/2005. školske godine obrazuje učenike opće srednje škole - gimnazije prema novom NPP-u za gimnaziju u skladu sa reformom općeg srednjeg obrazovanja.
Osnovni cilj odgoja i obrazovanja u Gimnaziji “Muhsin Rizvić” Kakanj je sticanje novih znanja, vještina i navika, razvoj psihofizičkih sposobnosti, te sticanje širokog obrazovanja i opće kulture, kao osnova za nastavak obrazovanja na fakultetima, te samoobrazovanje.
Zadaci odgoja i obrazovanja u Gimnaziji “Muhsin Rizvić” Kakanj su:
- sticanje znanja, vještina i navika iz različitih oblasti nauke, kulture, umjetnosti, sporta,
- osposobljavanje učenika da se služe jednim od stranih jezika, da steknu osnovna znanja iz drugog stranog jezika i latinskog jezika, a u jezičkom izbornom području i trećeg stranog jezika,
- razvijanje mišljenja kod učenika svojstvenog prirodnim naukama (matematici, fizici, biologiji,   hemiji),
- osposobljavanje učenika da usvoje osnovna znanja iz informatike  i računarstva,
- razvijanje poduzetničke kompetencije kod učenika kroz postojeći nastavni plan i program,
- razvijanje tjelesnih sposobnosti učenika, zdravog načina života i rada, te razvoj posebno darovitih učenika za vrhunski sport,
- razvijanje stvaralačkih sposobnosti učenika,
- razvijanje ekološke kulture,
- razvijanje opće kulture življenja, kulture mira, međusobnog uvažavanja i poštivanja, te čuvanja duhovnih i materijalnih vrijednosti kulturnog naslijeđa.
Za ovu djelatnost škola je verifikovana rješenjem od strane Ministarstva obrazovanja, nauke, kulture i sporta R BiH broj: UP-1-03-611-2552 od 9. 5. 1995. godine, kao i Rješenjem Ministarstva za obrazovanje, nauku, kulturu i sport Zeničko-dobojskog kantona broj: 10-38-20101-67/15 od 11. 11. 2015. godine.
Osnovne ciljeve i zadatke Gimnazija “Muhsin Rizvić” Kakanj realizirat će:
- putem redovne nastave,
- organizovanjem dodatne i dopunske nastave,
- organizovanjem vannastavnih aktivnosti  (sekcije, klubovi, društva, organizacije),
- kroz rad odjeljenjske zajednice,
- saradnjom sa roditeljima,
- javnom i kulturnom djelatnošću škole.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Historijat;
