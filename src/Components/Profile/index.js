import React from "react";
import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import ProfilePreview from "./ProfilePreview";
import Grid from "@mui/material/Grid";
import { save, fetch } from "./../../Action";
import { axiosInstance } from "./../../axios";

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
    this.onSave = this.onSave.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  async componentDidMount() {
    const response = await axiosInstance.get("/profile");
    this.props.fetch(response);
    this.setState({
      formfield: {
        ...response.data,
      },
    });
  }

  onChange(e) {
    this.setState({
      formfield: {
        ...this.state.formfield,
        [e.target.id]: e.target.value,
      },
    });
  }

  resetForm() {
    this.setState({
      formfield: {
        ...this.props.profile,
      },
    });
  }

  onSave() {
    this.props.save({ ...this.state.formfield });
  }
  render() {
    const { formfield } = this.state;
    return (
      <Grid sx={{ height: "100%" }} container>
        <Grid xs={8}>
          <ProfileForm
            formfield={formfield}
            onSave={this.onSave}
            onChange={this.onChange}
            resetForm={this.resetForm}
          />
        </Grid>
        <Grid xs={4} sx={{ backgroundColor: "#f3f3f3" }}>
          <ProfilePreview formfield={formfield} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const newState = {
    ...state,
  };
  return newState;
};

export default connect(mapStateToProps, { save, fetch })(Profile);
