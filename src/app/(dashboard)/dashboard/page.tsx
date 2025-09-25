import { getUserSession } from "@/app/helpers/getUserSession";

const DashboardPage = async () => {
  const session = await getUserSession();
  console.log(session);
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <h1 className="text-4xl">Welcome, {session?.user?.name}</h1>
        <h1 className="">{session?.user?.email}</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
