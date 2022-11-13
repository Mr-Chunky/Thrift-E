import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import AdminHeader from "../components/admin_components/AdminHeader";
import AdminUsers from "../components/admin_components/AdminUsers";
import modifiers from "../components/admin_components/Admin.module.css";
import AdminBannedUsers from "../components/admin_components/AdminBannedUsers";
import { useState, useEffect } from "react";

function Admin() {
  const [users, setUsers] = useState([]);
  const [bannedUsers, setBannedUsers] = useState([]);
  const [userId, setUserId] = useState();

  // Fetch users that ARE NOT banned from backend
  useEffect(() => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
    try {
      fetch(`http://localhost/LoginService/api/users/unbanned`).then(
        async (response) => {
          if (!response.ok) {
            console.log(response.json());
            throw new Error(">Admin Page: Error! Can't find users!");
          } else if (response.ok) {
            console.warn(
              `>Admin Page: Success!  Admin Users List Status Code - ${response.status}`
            );
            const storedUsersInfo = await response.json();
            console.log(
              `Array of Unbanned Users:\n-------------------------\n${JSON.stringify(
                storedUsersInfo,
                undefined,
                2
              )}\n-------------------------`
            );

            let usersInfoString = JSON.stringify(storedUsersInfo, undefined, 2);
            let usersInfoObject = JSON.parse(usersInfoString);

            setUsers([]);

            if (Array.isArray(usersInfoObject) && usersInfoObject.length) {
              setUsers((tempArray) => [...tempArray, usersInfoObject]);
            }
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Fetch users that ARE banned from backend
  useEffect(() => {
    try {
      fetch(`http://localhost/LoginService/api/users/banned`).then(
        async (response) => {
          if (!response.ok) {
            console.log(response.json());
            throw new Error(">Admin Page: Error! Can't find banned users!");
          } else if (response.ok) {
            console.warn(
              `>Admin Page: Success!  Admin Banned Users List Status Code - ${response.status}`
            );
            const storedBannedUsersInfo = await response.json();
            console.log(
              `Array of Banned Users:\n-------------------------\n${JSON.stringify(
                storedBannedUsersInfo,
                undefined,
                2
              )}\n-------------------------`
            );

            let bannedUsersInfoString = JSON.stringify(
              storedBannedUsersInfo,
              undefined,
              2
            );
            let bannedUsersInfoObject = JSON.parse(bannedUsersInfoString);

            setBannedUsers([]);

            if (
              Array.isArray(bannedUsersInfoObject) &&
              bannedUsersInfoObject.length
            ) {
              setBannedUsers((tempArray) => [
                ...tempArray,
                bannedUsersInfoObject,
              ]);
            }
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      {userId && <NavBar />}
      {userId && <AdminHeader />}
      {userId ? <h3 className={modifiers.sectionTitle}>Users</h3> : null}
      <GeneralUICard>
        <div style={{ margin: "auto" }}>
          {userId && Array.isArray(users) && users.length ? (
            <AdminUsers users={users} />
          ) : (
            "ERROR: User is not properly authenticated!"
          )}
        </div>
      </GeneralUICard>
      {userId && (
        <h3 className={modifiers.sectionTitle} style={{ marginTop: "2em" }}>
          Banned Users
        </h3>
      )}
      <GeneralUICard>
        <div style={{ margin: "auto" }}>
          {userId && Array.isArray(bannedUsers) && bannedUsers.length ? (
            <AdminBannedUsers bannedUsers={bannedUsers} />
          ) : null}
        </div>
      </GeneralUICard>
    </div>
  );
}

export default Admin;
