import { Suspense } from "react";
import { fetchProfileData } from "./fetchMock";

const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <ProfileDetails />
    </Suspense>
  );
}

function ProfileDetails() {
  console.log("ProfileDetails render");

  const user = resource.read();

  console.log("user: ", user);
  return <h1>{user.name}</h1>;
}

export default ProfilePage;
