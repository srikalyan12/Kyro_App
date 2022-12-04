import React from "react";

import ProfileForm from "./ProfileForm";
import ProfilePreview from "./ProfilePreview";
import Grid from "@mui/material/Grid";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formfield: {
        first_name: "",
        last_name: "",
        display_name: "",
        email: "",
        phone: "",
        location: "",
      },
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      formfield: {
        ...this.state.formfield,
        [e.target.id]: e.target.value,
      },
    });
  }
  render() {
    const { formfield } = this.state;
    return (
      <Grid sx={{ height: "100%" }} container>
        <Grid xs={8}>
          <ProfileForm formfield={formfield} onChange={this.onChange} />
        </Grid>
        <Grid xs={4} sx={{ backgroundColor: "#f3f3f3" }}>
          <ProfilePreview formfield={formfield} />
        </Grid>
      </Grid>
    );
  }
}
export default Profile;
