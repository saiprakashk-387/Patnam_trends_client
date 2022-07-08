import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../API/Api";
import { sampleSelector } from "../../redux/slice/index";
import ProfileForm from "./ProfileForm";
import  Loader  from "../Loader/Loader";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { sample, isLoading, error } = useSelector(sampleSelector);
    // sessionStorage.setItem("profilephoto", sample?.data?.photoUrl);
  // useEffect(() => {
  //   dispatch(editProfile());
  // }, []);
  return (
    <div>
      {isLoading ? (
        <span>
          <Loader />
        </span>
      ) : null}
      <ProfileForm sample={sample} />
    </div>
  );
};

export default MyProfile;
