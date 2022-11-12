import BannedUsersListCard from "../ui/BannedUsersListCard";

function AdminBannedUsers(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.bannedUsers[0].map((bannedUser) => (
        <BannedUsersListCard
          key={bannedUser._userId}
          _userId={bannedUser._userId}
          username={bannedUser.username}
          email={bannedUser.email}
          userType={bannedUser.userType}
          banStatus={bannedUser.banStatus}
        />
      ))}
    </ul>
  );
}

export default AdminBannedUsers;
