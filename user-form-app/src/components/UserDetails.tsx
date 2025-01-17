import { useSelector } from "react-redux";

const UserDetails = () => {
  const user = useSelector((state:any) => state.user.user);

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-xl font-bold text-gray-700">User Details</h2>
      {user.name ? (
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">
            <strong className="font-medium text-gray-800">Name:</strong> {user.name}
          </li>
          <li className="text-gray-600">
            <strong className="font-medium text-gray-800">Email:</strong> {user.email}
          </li>
          <li className="text-gray-600">
            <strong className="font-medium text-gray-800">Age:</strong> {user.age}
          </li>
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No user details available.</p>
      )}
    </div>
  );
};

export default UserDetails;
