import { useUser } from "@auth0/nextjs-auth0";
import { AddPatient } from "../components/AddPatient";

export default function add() {
  const user = useUser();

  if (user) {
    return (
      <>
        <AddPatient />
      </>
    );
  }

  return (
    <>
      <h1>Please login</h1>
    </>
  );
}
