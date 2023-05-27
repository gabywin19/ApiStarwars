import React, { useState, useEffect } from 'react'

/**
 * MUI
 */
import { Paper, Container } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";

/**
 * Components
 */
import AxiosWar from './AxiosWar';

const ListCategory = ({ category, datos }) => {
  const [planeta, setPlaneta] = useState(null);


  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await AxiosWar.get(datos.homeworld);

        setPlaneta(response.data.name);
      } catch (error) {
        setPlaneta('No encontrado');
      }
    }

    if (category === 'people') {
      fetch();
    }
    // eslint-disable-next-line
  }, []);
  
  if (category === 'people') {
    return (
     <>
        {planeta && (
          <>
            <Grid container justifyContent='center' xs={12}>
              <img img src={`https://starwars-visualguide.com/assets/img/characters/${datos.url.split('/')[5]}.jpg`} width={300} height={300} alt='persona' />
            </Grid>
            <Grid xs={12} textAlign='center'>Nombre: {datos.name}</Grid>
            <Grid xs={12} textAlign='center'>Género: {datos.gender}</Grid>
            <Grid xs={12} textAlign='center'>Color de piel: {datos.skin_color}</Grid>
            <Grid xs={12} textAlign='center'>Color de pelo: {datos.hair_color}</Grid>
            <Grid xs={12} textAlign='center'>Planeta natal: {planeta}</Grid>
          </>
        )}
        {!planeta && (
          <span>Buscando planeta natal...</span>
        )}
      </>
    )
  } else if (category === 'films') {
    return (
      <>
        <Grid container justifyContent='center' xs={12}>
          <img img src={`https://starwars-visualguide.com/assets/img/films/${datos.url.split('/')[5]}.jpg`} width={300} height={300} alt='pelicula' />
        </Grid>
        <Grid xs={12} textAlign='center'>Nombre: {datos.title}</Grid>
        <Grid xs={12} textAlign='center'>Director: {datos.director}</Grid>
        <Grid xs={12} textAlign='center'>Productor: {datos.producer}</Grid>
        <Grid xs={12} textAlign='center'>Texto de apertura: {datos.opening_crawl}</Grid>
      </>
    )
  } else if (category === 'starships') {
    return (
      <>
        <Grid container justifyContent='center' xs={12}>
          <img img src={`https://starwars-visualguide.com/assets/img/starships/${datos.url.split('/')[5]}.jpg`} width={300} height={300} alt='Naves' />
        </Grid>
        <Grid xs={12} textAlign='center' md={3}>Nombre: {datos.name}</Grid>
        <Grid xs={12} textAlign='center' md={3}>Modelo: {datos.model}</Grid>
        <Grid xs={12} textAlign='center' md={3}>Fabricante: {datos.manufacturer}</Grid>
        <Grid xs={12} textAlign='center' md={3}>Clase de Nave: {datos.starship_class}</Grid>
      </>
    )
  } else if (category === 'species') {
    return (
      <>
        <Grid container justifyContent='center' xs={12}>
          <img img src={`https://starwars-visualguide.com/assets/img/species/${datos.url.split('/')[5]}.jpg`} width={300} height={300} alt='Especies' />
        </Grid>
        <Grid xs={12} textAlign='center' md={3}>Nombre: {datos.name}</Grid>
        <Grid xs={12} textAlign='center' md={3}>Clasificacion: {datos.classification}</Grid>
        <Grid xs={12} textAlign='center' md={3}>Designacion: {datos.designation}</Grid>
        <Grid xs={12} textAlign='center' md={3}>Altura Promedio: {datos.average_height}</Grid>
      </>
    )
  } else if (category === 'vehicles') {
    return (
      <>
      <Grid container justifyContent='center' xs={12}>
        <img img src={`https://starwars-visualguide.com/assets/img/vehicles/${datos.url.split('/')[5]}.jpg`} width={300} height={300} alt='Vehículo' />
      </Grid>
      <Grid xs={12} textAlign='center' md={3}>Nombre: {datos.name}</Grid>
      <Grid xs={12} textAlign='center' md={3}>Modelo: {datos.model}</Grid>
      <Grid xs={12} textAlign='center' md={3}>Clase de Vehículo: {datos.vehicle_class}</Grid>
      <Grid xs={12} textAlign='center' md={3}>Fabricante: {datos.manufacturer}</Grid>
    </>
    )
  } else if (category === 'planets') {
    return (
      <>
      <Grid container justifyContent='center' xs={12}>
        <img img src={`https://starwars-visualguide.com/assets/img/planets/${datos.url.split('/')[5]}.jpg`} width={300} height={300} alt='Planeta' />
      </Grid>
      <Grid xs={12} textAlign='center' md={3}>Nombre: {datos.name}</Grid>
      <Grid xs={12} textAlign='center' md={3}>Diametro: {datos.diameter}</Grid>
      <Grid xs={12} textAlign='center' md={3}>Periodo de Rotacion: {datos.rotation_period}</Grid>
      <Grid xs={12} textAlign='center' md={3}>Periodo Orbital: {datos.orbital_period}</Grid>
    </>
    )
  }
}

const Render = ({ category, datos })=> {
  return (
    <Container sx={{mt: 3, mb: 6}}>
      <Paper sx={{p: 3}}>
        <Grid container spacing={2}>
          <ListCategory category={category} datos={datos}  />
        </Grid>
      </Paper>
    </Container>
  )
}
export default Render;
