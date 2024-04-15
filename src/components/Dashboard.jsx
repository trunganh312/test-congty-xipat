import { NavLink, Outlet } from "react-router-dom";

Dashboard.propTypes = {};

function Dashboard() {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        Dashboard
      </h1>
      <div
        style={{
          display: "flex",
          margin: "10px 0",
          gap: "20px",
        }}
      >
        <NavLink to={`/dashboard/subcription`}>
          <button className='button'>Subcription</button>
        </NavLink>

        <NavLink to={`/dashboard/revenue`}>
          <button className='button'>Revenue</button>
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
