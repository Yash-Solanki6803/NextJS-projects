type UserParams = {
  user: {
    name: string;
    email: string;
  };
};

const User: React.FC<UserParams> = ({ user }) => {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
};

export default User;
