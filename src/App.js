import "./App.css";
import Graphs from "./components/graphs";
import RecentStreamsTable from "./components/recentstreams-table";
import StatsHeaders from "./components/stats-headers";

function App() {
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-4xl font-bold flex justify-start">
        Streamify Dashboard
      </h1>
      <StatsHeaders />
      <Graphs />
      <RecentStreamsTable />
    </div>
  );
}

export default App;
