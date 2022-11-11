import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import AdminHeader from "../components/admin_components/AdminHeader";

function Admin() {
  return (
    <div>
      <NavBar />
      <AdminHeader />
      <GeneralUICard>Content!</GeneralUICard>
    </div>
  );
}

export default Admin;
