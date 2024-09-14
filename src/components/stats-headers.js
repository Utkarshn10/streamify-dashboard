export default function StatsHeaders() {
  const keyMetrics = {
    "Total Users": 1000000,
    "Active Users": 750000,
    "Total Streams": 5000000,
    Revenue: 10000000,
    "Top Artist": "Taylor Swift",
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 content-evenly my-5">
      {Object.entries(keyMetrics).map(([metricKey, metricValue]) => {
        return (
          <div className="border border-gray-300 p-4 flex flex-col space-y-3 bg-white rounded-lg">
            <h3 className="text-sm font-semibold">{metricKey}</h3>
            <p className="text-2xl font-bold">{metricValue}</p>
          </div>
        );
      })}
    </div>
  );
}
