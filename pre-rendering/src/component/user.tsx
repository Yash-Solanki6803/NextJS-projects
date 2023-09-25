export type UserParams = {
  id: number;
  name: string;
  email: string;
};

const User: React.FC<UserParams> = ({ name, email }) => {
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
    </>
  );
};

export default User;
