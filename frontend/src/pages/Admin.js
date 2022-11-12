import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import AdminHeader from "../components/admin_components/AdminHeader";
import AdminUsers from "../components/admin_components/AdminUsers";
import modifiers from "../components/admin_components/Admin.module.css";

function Admin() {
  return (
    <div>
      <NavBar />
      <AdminHeader />
      <h3 className={modifiers.sectionTitle}>Users</h3>
      <GeneralUICard>
        <div style={{ margin: "auto" }}>
          <AdminUsers />
        </div>
      </GeneralUICard>
    </div>
  );
}

export default Admin;
