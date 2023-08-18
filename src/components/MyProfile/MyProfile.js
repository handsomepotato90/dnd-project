import ProfileNavigation from "./ProfileNavigation";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./MyProfile.css";

const MyProfiles = React.lazy(() => import("./MyProfileGeneral"));
const MyUploads = React.lazy(() =>
  import("./MyUploads/MyUploads")
);
const Sessions = React.lazy(() =>
  import("./Sessions/Sessions")
);
const AllSessions = React.lazy(() =>
  import("./Sessions/AllSessionInvites")
);
const VotingForFreeDay = React.lazy(() =>
  import("./Sessions/SessionVotingForFreeDays")
);
const Friends = React.lazy(() =>
  import("./Friends/Friends")
);
const Edit = React.lazy(() =>
  import("./MyUploads/Edit/Edit")
);

export default function MyProfile() {
  let routes = (
    <React.Fragment>
      <Route path="/MyUploads" element={<MyUploads />} />
      <Route path="/MyUploads/Edit/:id" element={<Edit />} />
      <Route path="/Friends" element={<Friends />} />
      <Route path="/Sessions" element={<Sessions />} />
      <Route path="/Sessions/AllSessions" element={<AllSessions />} />
      <Route path="/Sessions/AllSessions/:id" element={<VotingForFreeDay />} />
      <Route path="/" element={<MyProfiles />} />
    </React.Fragment>
  );
  return (
    <>
      <ProfileNavigation></ProfileNavigation>
      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>{routes}</Routes>
      </Suspense>
    </>
  );
}
