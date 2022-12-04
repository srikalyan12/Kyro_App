import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import PersonIcon from "@mui/icons-material/Person";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ProfileForm = ({ onChange, formfield }) => {
  return (
    <>
      <h3>My Profile</h3>
      <Card
        variant="outlined"
        sx={{
          margin: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "40%" },
              "& .form-row": { m: 1, height: "75px" },
              textAlign: "center",
              height: "300px",
            }}
            noValidate
            autoComplete="off"
          >
            <div className="form-row">
              <TextField
                label="First Name"
                id="first_name"
                size="medium"
                onChange={onChange}
                value={formfield.first_name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Last Name"
                id="last_name"
                size="medium"
                onChange={onChange}
                value={formfield.last_name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="form-row">
              <TextField
                label="Display Name"
                id="display_name"
                size="medium"
                onChange={onChange}
                value={formfield.display_name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PortraitOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Email"
                id="email"
                size="medium"
                onChange={onChange}
                value={formfield.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="form-row">
              <TextField
                label="Phone No (work)"
                id="phone"
                size="medium"
                onChange={onChange}
                value={formfield.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Location"
                id="location"
                size="medium"
                onChange={onChange}
                value={formfield.location}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button color="error" variant="contained">
            Save Changes
          </Button>
          <Button color="error" variant="contained">
            Reset Changes
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProfileForm;
