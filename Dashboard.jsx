import React from "react";
import {
  FiUsers,
  FiFolder,
  FiTrendingUp,
  FiDollarSign,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const stats = [
  {
    title: "Total Projects",
    value: 12,
    icon: <FiFolder />,
    change: "+20%",
  },
  {
    title: "Active Tasks",
    value: 8,
    icon: <FiTrendingUp />,
    change: "+12%",
  },
  {
    title: "Team Members",
    value: 5,
    icon: <FiUsers />,
    change: "+8%",
  },
  {
    title: "Total Revenue",
    value: "$2,480",
    icon: <FiDollarSign />,
    change: "+18%",
  },
];

const chartData = [
  { month: "Jan", revenue: 800 },
  { month: "Feb", revenue: 1200 },
  { month: "Mar", revenue: 1000 },
  { month: "Apr", revenue: 1600 },
  { month: "May", revenue: 1400 },
  { month: "Jun", revenue: 2100 },
  { month: "Jul", revenue: 2480 },
];

function Dashboard() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.heading}>Dashboard</h1>
          <p style={styles.subtitle}>
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <button style={styles.button}>+ New Project</button>
      </div>

      {/* Statistics */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div style={styles.card} key={index}>
            <div style={styles.cardTop}>
              <div style={styles.iconBox}>{stat.icon}</div>

              <span style={styles.change}>
                {stat.change}
              </span>
            </div>

            <p style={styles.cardTitle}>{stat.title}</p>
            <h2 style={styles.value}>{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={styles.chartCard}>
        <div style={styles.chartHeader}>
          <div>
            <h2 style={styles.chartTitle}>Revenue Overview</h2>
            <p style={styles.chartSubtitle}>
              Monthly revenue performance
            </p>
          </div>

          <div style={styles.revenue}>
            $2,480
          </div>
        </div>

        <div style={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom cards */}
      <div style={styles.bottomGrid}>
        <div style={styles.activityCard}>
          <h2 style={styles.sectionTitle}>Recent Activity</h2>

          <div style={styles.activity}>
            <FiCheckCircle style={styles.activityIcon} />

            <div>
              <strong>Project completed</strong>
              <p style={styles.smallText}>
                Website redesign project completed
              </p>
            </div>
          </div>

          <div style={styles.activity}>
            <FiClock style={styles.activityIcon} />

            <div>
              <strong>Task pending</strong>
              <p style={styles.smallText}>
                Database integration needs attention
              </p>
            </div>
          </div>

          <div style={styles.activity}>
            <FiUsers style={styles.activityIcon} />

            <div>
              <strong>New team member</strong>
              <p style={styles.smallText}>
                A new member joined your team
              </p>
            </div>
          </div>
        </div>

        <div style={styles.taskCard}>
          <h2 style={styles.sectionTitle}>Tasks</h2>

          <div style={styles.task}>
            <div>
              <strong>UI Design</strong>
              <p style={styles.smallText}>Completed</p>
            </div>

            <span style={styles.completed}>Done</span>
          </div>

          <div style={styles.task}>
            <div>
              <strong>API Development</strong>
              <p style={styles.smallText}>In progress</p>
            </div>

            <span style={styles.progress}>60%</span>
          </div>

          <div style={styles.task}>
            <div>
              <strong>Testing</strong>
              <p style={styles.smallText}>Pending</p>
            </div>

            <span style={styles.pending}>Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  heading: {
    margin: 0,
    fontSize: "32px",
    color: "#111827",
  },

  subtitle: {
    marginTop: "8px",
    color: "#6b7280",
  },

  button: {
    border: "none",
    background: "#6366f1",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  card: {
    background: "white",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconBox: {
    width: "45px",
    height: "45px",
    borderRadius: "10px",
    background: "#eef2ff",
    color: "#6366f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  change: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  cardTitle: {
    color: "#6b7280",
    marginBottom: "5px",
    marginTop: "20px",
  },

  value: {
    margin: 0,
    fontSize: "28px",
    color: "#111827",
  },

  chartCard: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    marginBottom: "25px",
  },

  chartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  chartTitle: {
    margin: 0,
    color: "#111827",
  },

  chartSubtitle: {
    color: "#6b7280",
    marginTop: "6px",
  },

  revenue: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#6366f1",
  },

  chart: {
    width: "100%",
    height: "300px",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },

  activityCard: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },

  taskCard: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },

  sectionTitle: {
    marginTop: 0,
    color: "#111827",
  },

  activity: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },

  activityIcon: {
    fontSize: "22px",
    color: "#6366f1",
  },

  smallText: {
    margin: "5px 0 0",
    color: "#6b7280",
    fontSize: "14px",
  },

  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },

  completed: {
    background: "#dcfce7",
    color: "#15803d",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  progress: {
    background: "#dbeafe",
    color: "#2563eb",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  pending: {
    background: "#fef3c7",
    color: "#b45309",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },
};
