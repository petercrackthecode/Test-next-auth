import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

export default function Home() {
  const { data: session } = useSession();

  const callBackend = async () => {
    await axios
      .get("backend/next-auth")
      .then((res) => res.data)
      .then((data) => alert(JSON.stringify(data)))
      .catch((err) => alert(JSON.stringify(err)));
  };

  if (session)
    return (
      <>
        Sign in as {session.user.email || session.user.name} <br />
        <button onClick={() => callBackend()}>
          Call the secured backend route
        </button>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );

  return (
    <>
      Not signed in <br />
      <button onClick={() => callBackend()}>
        Call the secured backend route
      </button>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}
