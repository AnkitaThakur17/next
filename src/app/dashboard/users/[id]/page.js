export default function UserPage({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-400">User ID: {params.id}</h1>
      <p className="text-gray-400">Details for user {params.id}</p>
    </div>
  );
}
