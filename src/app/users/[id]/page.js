import BackButton from "@/app/components/BackButton";

export default function UserProfile({ params }) {
  const users = [
    { id: 101, name: "User 101", email: "user101@test.com", role: "Admin", joined: "Jan 2024", bio: "Next.js!" },
    { id: 102, name: "User 102", email: "user102@test.com", role: "Member", joined: "Feb 2024", bio: "Frontend ☕" },
    { id: 103, name: "User 103", email: "user103@test.com", role: "User", joined: "March 2025", bio: "Backend" },
    { id: 104, name: "User 104", email: "user104@test.com", role: "User", joined: "June 2025", bio: "Full-Stack" },
    { id: 105, name: "User 105", email: "user105@test.com", role: "Member", joined: "October 2024", bio: "App-development" },
  ];

  const user = users.find((u) => u.id === parseInt(params.id));
  if (!user) return <p>User not found</p>;

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md w-full">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src={`https://api.dicebear.com/9.x/identicon/svg?seed=${user.name}`}
              alt={user.name}
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h1 className="text-3xl text-gray-800 font-bold">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mt-2 px-3 py-1 rounded-full">
                {user.role}
              </span>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <p className="text-gray-600">
              <strong>Joined:</strong> {user.joined}
            </p>
            <p className="text-gray-600">
              <strong>Bio:</strong> {user.bio}
            </p>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Edit Profile
            </button>
            <button className="bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-500">
              Message
            </button>
          </div>
        </div>
        <div className="w-1/2 p-10">
           <BackButton />
        </div>
      </div>

     
    </>
  );
}
