import { useUser } from "@auth0/nextjs-auth0";
import { Stats } from "../components/Stats";
import { Patients } from "../components/Patients";

export default function app() {
  const { user } = useUser();
  if (user) {
    return (
      <div className="m-4">
        <h1 className="text-4xl font-extrabold leading-none md:pl-2">
          Hello,{" "}
          <span className="inline-block text-deep-purple-accent-400">
            {user.name}
          </span>
        </h1>
        <Stats />
        <Patients />
      </div>
    );
  }

  return (
    <>
      <h1>Please login</h1>
    </>
  );
}
