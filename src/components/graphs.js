import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { LineChart, Line } from "recharts";

export default function Graphs() {
  const userGrowthData = [
    { month: "Jan", totalUsers: 800000, activeUsers: 600000 },
    { month: "Feb", totalUsers: 850000, activeUsers: 650000 },
    { month: "Mar", totalUsers: 900000, activeUsers: 700000 },
    { month: "Apr", totalUsers: 950000, activeUsers: 725000 },
    { month: "May", totalUsers: 1000000, activeUsers: 750000 },
  ];

  const revenueData = [
    { name: "Subscriptions", value: 7500000 },
    { name: "Advertisements", value: 2500000 },
  ];

  const topSongsData = [
    { name: "Song 1", streams: 500000 },
    { name: "Song 2", streams: 450000 },
    { name: "Song 3", streams: 400000 },
    { name: "Song 4", streams: 350000 },
    { name: "Song 5", streams: 300000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <div className="flex flex-col my-6 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="border border-gray-300 p-4 flex flex-col space-y-3 bg-white rounded-lg">
          <h2 className="text-2xl font-bold mb-3">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
              <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="border border-gray-300 p-4 flex flex-col space-y-3 bg-white rounded-lg">
          <h2 className="text-2xl font-bold">Revenue Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full border border-gray-300 p-4 flex flex-col space-y-3 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-3">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topSongsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streams" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
