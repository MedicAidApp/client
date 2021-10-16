import { useUser } from "@auth0/nextjs-auth0";

export default function app() {
  const { user } = useUser();
  if (user) {
    return (
      <>
        <h1 className="m-6 text-4xl font-extrabold leading-none md:pl-2">
          Hello,{" "}
          <span className="inline-block text-deep-purple-accent-400">
            {user.name}
          </span>
        </h1>
      </>
    );
  }

  return (
    <>
      <h1>Please login</h1>
    </>
  );
}
