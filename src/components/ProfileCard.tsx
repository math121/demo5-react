import { Modal, Box, Button, TextField, Snackbar, Alert } from "@mui/material";
import "../index.css";
import { ProfileDetails } from "../dataTypes/data_types";
import { useState } from "react";

type MyProps = {
  props: ProfileDetails;
  show: boolean;
  setShowProfile: (x: boolean) => void;
};
// { imgUrl}: {imgUrl: string} for single props sending typescript notation

function ProfileCard({ props, show, setShowProfile }: MyProps) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      <Modal
        open={show}
        onClose={() => {
          setShowProfile(false);
          setMessage("");
        }}
      >
        <Box className="profile-card">
          <span className="profile-card__header">
            <img
              className="profile-card__image"
              src={props.profile_image}
              alt="just a pic"
            />
            <h1>{props.first_name + " " + props.last_name} </h1>
          </span>

          <p>
            <b>Email:</b> {props.email}
          </p>
          <p>
            <b>Gender:</b> {props.gender}
          </p>
          <h2>About me:</h2>
          <p>{props.description}</p>

          <div className="message-footer">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Write message here..."
              autoComplete="off"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></TextField>
            <Button
              style={{ marginTop: 20 }}
              variant="outlined"
              onClick={() => {
                setOpen(true);
              }}
            >
              Send message
            </Button>
          </div>
        </Box>
      </Modal>

      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          severity={message != "" ? "success" : "warning"}
          variant="filled"
        >
          {message != ""
            ? "You sent a message : " + message
            : "Nothing to send here!"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ProfileCard;
