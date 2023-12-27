import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
const SubjectHeader = ({ title }) => (
  <h2 className="text-2xl font-semibold mb-4 text-center bg-gray-800 text-white p-2 rounded-lg">{title}</h2>
);

const TableHeader = ({ subject }) => (
  <thead>
    <tr>
      <th className="border p-3 text-center font-semibold">{subject}</th>
    </tr>
  </thead>
);

const MatematickoInformaticko = () => {
  return (
    <div className="0 min-h-screen">
      <NavBar />
      <h1 className="text-4xl font-bold mb-4 text-center pt-3">
        Matematičko-informatičko područje
      </h1>
      <div className="container mx-auto my-8">
        <div className="mb-8 text-center">
          <SubjectHeader title="III RAZRED" />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Bosanski jezik",
              "Engleski jezik",
              "Njemački jezik/Turski jezik",
              "Latinski jezik",
              "Matematika",
              "Vjeronauka/Etika",
              "Tjelesni i zdravstveni odgoj",
              "Demokratija",
              "Psihologija",
              "Sociologija",
              "Informatika",
            ].map((subject, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4"
              >
                <table className="min-w-full table-auto">
                  <TableHeader subject={subject} />
                </table>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 text-center">
          <SubjectHeader title="IV RAZRED" />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Bosanski jezik",
              "Engleski jezik",
              "Njemački jezik/Turski jezik",
              "Latinski jezik",
              "Matematika",
              "Vjeronauka/Etika",
              "Tjelesni i zdravstveni odgoj",
              "Izborni predmet",
              "Logika s filozofijom",
              "Kultura reigija",
              "Informatika",
              "Nacrtna geometrija",
            ].map((subject, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4"
              >
                <table className="min-w-full table-auto">
                  <TableHeader subject={subject} />
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MatematickoInformaticko;
