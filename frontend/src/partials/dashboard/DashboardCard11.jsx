import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function DashboardCard11() {
  const { user } = useContext(AuthContext);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("Token");
      const response = await axios.get("http://localhost:3000/api/reports/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching reports:", error.message);
    }
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          View Reports
        </h2>
      </header>
      <div className="p-5 overflow-y-auto max-h-80">
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <ul className="list-disc list-inside">
            {reports.map((report) => (
              <li key={report._id} className="mb-4">
                <strong className="text-blue-500">Type:</strong> {report.type}
                <br />
                <strong className="text-blue-500">Keywords:</strong>{" "}
                {report.keyWords.join(", ")}
                <br />
                <strong className="text-blue-500">Ticket ID:</strong>{" "}
                {report.ticketId}
                <br />
                <strong className="text-blue-500">Generated By:</strong>{" "}
                {report.generatedBy}
                <br />
                <strong className="text-blue-500">Generated At:</strong>{" "}
                {new Date(report.generatedAt).toLocaleString()}
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DashboardCard11;
  