import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import AdminHeader from "../components/admin_components/AdminHeader";
import AdminUsers from "../components/admin_components/AdminUsers";
import modifiers from "../components/admin_components/Admin.module.css";
import AdminBannedUsers from "../components/admin_components/AdminBannedUsers";

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
      <h3 className={modifiers.sectionTitle} style={{ marginTop: "2em" }}>
        Banned Users
      </h3>
      <GeneralUICard>
        <div style={{ margin: "auto" }}>
          <AdminBannedUsers />
        </div>
      </GeneralUICard>
    </div>
  );
}

export default Admin;
