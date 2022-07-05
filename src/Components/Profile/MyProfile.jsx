import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../API/Api";
import { sampleSelector } from "../../redux/slice/index";
import ProfileForm from "./ProfileForm";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { sample } = useSelector(sampleSelector);

  useEffect(() => {
    dispatch(editProfile());
  }, []);

  return (
    <div>
      <ProfileForm
        sample={sample}
      />  
    </div>
  );
};

export default MyProfile;
