import User from "@/component/user";
import { UserParams } from "@/component/user";

type UserListProps = {
  users: UserParams[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <User {...user} />
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  console.log("Generating/Regenerating UserList");

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
    revalidate: 10,
  };
}

export default UserList;
