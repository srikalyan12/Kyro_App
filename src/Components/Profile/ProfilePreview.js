import React from "react";
import "./profile.css";

const ProfilePreview = ({ formfield }) => {
  const { first_name, last_name, email } = formfield;
  return (
    <div className="profile-preview">
      <img width="150px" height="150px" alt="profile" src="/profileImage.jpg" />
      <div>
        <strong>{`Name: ${first_name} ${last_name} `}</strong>
      </div>
      <div className="welcome-date">{`Email: ${email}`}</div>
    </div>
  );
};
export default ProfilePreview;
