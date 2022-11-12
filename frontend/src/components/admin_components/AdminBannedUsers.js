import BannedUsersListCard from "../ui/BannedUsersListCard";

function AdminBannedUsers() {
  return <ul style={{ listStyle: "none" }}>{<BannedUsersListCard />}</ul>;
}

export default AdminBannedUsers;
