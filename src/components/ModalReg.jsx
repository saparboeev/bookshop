import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Contexts } from "../contexts/Contexts";
import DoneIcon from "@mui/icons-material/Done";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius: "20px",
};

export default function BasicModal() {
  const handleClose = () => setOpen(false);

  const { open, setOpen } = React.useContext(Contexts);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <DoneIcon
              style={{
                color: "green",
                fontSize: "35px",
              }}
            />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "25px" }}
          >
            Siz muvaffaqiyatli ro'yxatdan o'tdingiz!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
