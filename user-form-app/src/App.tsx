import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Management</h1>
      <UserForm />
      <UserDetails />
    </div>
  );
}

export default App;
