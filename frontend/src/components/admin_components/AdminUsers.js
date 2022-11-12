import UsersListCard from "../ui/UsersListCard";

function AdminUsers(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.users[0].map((user) => (
        <UsersListCard
          key={user._userId}
          _userId={user._userId}
          username={user.username}
          email={user.email}
          userType={user.userType}
          banStatus={user.banStatus}
        />
      ))}
    </ul>
  );
}

export default AdminUsers;
