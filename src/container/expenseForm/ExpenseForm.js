import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modalSlice";
import { useForm, Controller } from "react-hook-form";
import { Timestamp } from "@firebase/firestore"
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

const ExpenseForm = ({addTransection}) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const category = useSelector((state) => state.modal.type);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #ddd",
    outline:"none",
    boxShadow: 10,
    p: 4,
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.amount=+data.amount;
    data.date=Timestamp.fromDate(new Date());
    data.category=category;
    const addTxn=await addTransection(data);
    dispatch(closeModal())
    reset();
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(closeModal());
        reset();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel>Category: {category}</InputLabel>
          <FormControl fullWidth variant="outlined" margin="normal">
            <Controller
              name="amount"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Amount"
                  type="text"
                  error={errors.amount ? true : false}
                  helperText={errors.amount ? errors.amount.message : ""}
                />
              )}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  error={errors.description ? true : false}
                  helperText={
                    errors.description ? "Description is required" : ""
                  }
                />
              )}
            />
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ExpenseForm;
