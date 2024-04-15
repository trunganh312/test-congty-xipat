import Container from "~/components/Container";

import { Outlet } from "react-router-dom";
import Sidebar1 from "~/components/Sidebar1";

const styles = {
  display: "flex",
  gap: "40px",
};

const AdminLayout = () => {
  return (
    <div style={styles}>
      <Sidebar1></Sidebar1>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminLayout;
