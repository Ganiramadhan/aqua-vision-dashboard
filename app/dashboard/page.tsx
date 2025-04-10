'use client'

import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaFish, FaChartLine, FaChartBar } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    totalConsumption: 1500,
    mostPopularItem: "Shrimp",
    topRegion: "North Coast",
    dailyConsumption: 45,
    monthlyConsumption: 1200,
  };

  // Chart data for Line chart (Seafood consumption trend)
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Seafood Consumption (kg)',
        data: [120, 150, 170, 180, 160, 190, 200],
        borderColor: 'rgb(34, 197, 94)', 
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Chart data for Bar chart (Monthly consumption comparison)
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Consumption (kg)',
        data: [1200, 1100, 1150, 1250, 1300, 1400, 1450],
        backgroundColor: 'rgba(29, 78, 216, 0.6)',
        borderColor: 'rgb(29, 78, 216)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Bar chart (Daily consumption comparison)
  const dailyChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Daily Consumption (kg)',
        data: [45, 50, 40, 60, 55, 70, 65],
        backgroundColor: 'rgba(234, 179, 8, 0.6)',
        borderColor: 'rgb(234, 179, 8)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-center text-3xl font-bold mb-8 text-teal-400">Dashboard Monitoring</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
          <FaFish className="text-teal-400 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-4">Total Consumption</h2>
            <p className="text-2xl">{data.totalConsumption} kg</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
          <FaFish className="text-teal-400 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-4">Most Popular Item</h2>
            <p className="text-2xl">{data.mostPopularItem}</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
          <FaFish className="text-teal-400 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-4">Top Region</h2>
            <p className="text-2xl">{data.topRegion}</p>
          </div>
        </div>
      </div>

      {/* Three charts in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaChartLine className="mr-2 text-teal-400" /> Seafood Consumption Trend
          </h2>
          <Line data={lineChartData} />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaChartBar className="mr-2 text-teal-400" /> Monthly Consumption Comparison
          </h2>
          <Bar data={barChartData} />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaChartBar className="mr-2 text-teal-400" /> Daily Consumption Comparison
          </h2>
          <Bar data={dailyChartData} />
        </div>
      </div>
    </div>
  );
}
