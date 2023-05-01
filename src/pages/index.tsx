import TimeLineItem, {
  type TimeLineItemProps,
} from "@/components/timeLineItem";

function getAge() {
  const now = new Date();
  const bday = new Date(1993, 10, 2);

  if (now.getMonth() === 10 && now.getDay() >= 2)
    return now.getFullYear() - bday.getFullYear();
  if (now.getMonth() > 10) return now.getFullYear() - bday.getFullYear();
  return now.getFullYear() - bday.getFullYear() - 1;
}

const jobs: TimeLineItemProps[] = [
  {
    dateTime: "2022-08-01",
    jobTitle: "Praktikum bei der Jobasoft GmbH in Krefeld",
    readableDate: "Aug 22 - März 23",
  },
  {
    dateTime: "2021-08-01",
    jobTitle:
      "Umschulung als Fachinformatikerin für Anwendungsentwicklung bei der IBB in Krefeld",
    readableDate: "Aug 21 - Mai 23",
  },
  {
    dateTime: "2021-02-01",
    jobTitle: "Qualifizierten Sekundarabschluss I erhalten",
    readableDate: "Feb 21",
  },
  {
    dateTime: "2020-05-15",
    jobTitle: "Verkäuferin bei Aldi Süd in Ludwigshafen",
    readableDate: "Mai 20 - Mai 21",
  },
  {
    dateTime: "2018-11-01",
    jobTitle:
      "Telefonistin bei Pastor Toys Internacional in Finestrat, Spanien",
    readableDate: "Nov 18 - März 20",
  },
  {
    dateTime: "2017-03-01",
    jobTitle:
      "Als Verkäuferin bei TacoBell, McDonalds, Lidl, Vidal und Costa Blanca Supermercados in Spanien gearbeitet ",
    readableDate: "März 17 - Okt 18",
  },
  {
    dateTime: "2020-05-15",
    jobTitle: "Verkäuferin bei Aldi Nord in La Nucia, Spanien",
    readableDate: "Juli 15 - Dez 16",
  },
  {
    dateTime: "2015-07-15",
    jobTitle: "Verkäuferin bei Aldi Süd in Ludwigshafen",
    readableDate: "Juli 13 - März 15",
  },
  {
    dateTime: "2015-07-01",
    jobTitle: "Ausbildung als Verkäuferin bei Aldi Süd in Frankenthal",
    readableDate: "Juli 11 - Juni 13",
  },
  {
    dateTime: "2010-01-15",
    jobTitle: "Berufsbildende Schule Hauswirtschaft / Soz.Päd. Ludwigshafen",
    readableDate: "Jan 10 - Juni 11",
  },
  {
    dateTime: "2005-09-15",
    jobTitle: "Realschule in Spanien",
    readableDate: "Sep 05 - Dez 09",
  },
  {
    dateTime: "2000-01-01",
    jobTitle: "Grundschule in Ludwigshafen",
    readableDate: "Aug 00 - Juli 04",
  },
  {
    dateTime: "1993-10-02",
    jobTitle: "Geboren in Ludwigshafen am Rhein",
    readableDate: "Okt 02",
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex justify-center mb-4">
        <img
          src="/images/me.jpg"
          alt="me"
          className="rounded-full w-24 h:24 sm:w-40 sm:h-40"
        ></img>
      </div>

      <div className="flex justify-center mb-12 md:mb-16">
        <p className="font-bold text-2xl">Anwendungsentwicklerin</p>
      </div>

      <div className="mb-12 md:mb-16">
        <h1 className="text-white text-lg">Hallo!</h1>
        <p>
          Mein Name ist Melanie, bin {getAge()} Jahre alt und interessiere mich
          für die Frontend Webentwicklung. Diese Seite ist mein erstes Next.js
          Projekt!
        </p>
      </div>

      <h2 className="mb-4">Kenntnisse</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>Laravel</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>Tailwind CSS</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>HTML & CSS</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>JavaScript</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>Git</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>VS Code</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>PHPStorm</p>
        </div>

        <div className="bg-zinc-800 rounded-lg shadow-lg px-6 py-5">
          <p>Docker</p>
        </div>

        <h2 className="mb-4">Meine Timeline</h2>
      </div>

      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {jobs.map(({ dateTime, jobTitle, readableDate }) => {
            return (
              <TimeLineItem
                dateTime={dateTime}
                jobTitle={jobTitle}
                readableDate={readableDate}
              ></TimeLineItem>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
