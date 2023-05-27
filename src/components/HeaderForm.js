import React from 'react';

/**
 * MUI
 */
 import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SearchIcon from '@mui/icons-material/Search';

/**
 * Form Hook
 */
import { useFormContext } from "react-hook-form";

const HeaderForm=() => {
  const { register, loading, formState: { errors } } = useFormContext();

  return (
    <Grid container spacing={2} xs={12}>
      <Grid xs={12} sm={7} md={6}>
        <FormControl fullWidth>
          <InputLabel id='label-category'>Categorias</InputLabel>
          <Select
            labelId="label-category"
            id="demo-simple-select"
            label="Categorias"
            {...register("category")}
            defaultValue='people'
            disabled={loading}
          >
            <MenuItem value='people'>Personajes</MenuItem>
            <MenuItem value='films'>Películas</MenuItem>
            <MenuItem value='starships'>Naves</MenuItem>
            <MenuItem value='vehicles'>Vehículos</MenuItem>
            <MenuItem value='species'>Especies</MenuItem>
            <MenuItem value='planets'>Planetas</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      
      <Grid xs={12} sm={5} md={6}>
        <TextField
          label="Buscar ID"
          {...register("id", {
            required: { value: true, message: 'Campo requerido' }
          })}
          id="outlined-start-adornment"
          fullWidth
          error={Boolean(errors?.id)}
          helperText={errors?.id ? errors?.id?.message : ''}
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type='submit' disabled={loading} aria-label="Person">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  )
}

export default HeaderForm;
