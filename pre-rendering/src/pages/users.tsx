import User from "@/component/user";

type UserType = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: UserType[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}

export default UserList;
