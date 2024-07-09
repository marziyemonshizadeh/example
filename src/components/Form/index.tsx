import { useForm, SubmitHandler, Controller } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchemaType } from "./type/formValidation";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import React from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Form() {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({resolver:zodResolver(formSchema)})
  console.log("error",errors);
  
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log("data==",data);
    handleOpen()
    
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" {...register("firstName")}  />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" {...register("lastName")}  />
        {errors.lastName && <span>{errors.lastName.message}</span>}



    <Controller control={control} name="age" render={({field})=>{ 
   return <FormControl fullWidth>
    <InputLabel>
    age
    </InputLabel>
    <Select label="age" {...field} >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
    </Select>
   </FormControl>
    }}/>
        <Button variant="text" color='primary' type="submit">submit</Button>
    </form>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {watch('age')}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}