import React, {
  useState, useEffect
} from 'react';
import { useParams } from 'react-router-dom';

/**
 * Components
 */
import Header from '../../components/Header';
import AxiosWar from '../../components/AxiosWar';
import Render from '../../components/Render';

/**
 * MUI
 */
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Unstable_Grid2";

/**
 * React Hook Form
 */
import { useForm, FormProvider } from "react-hook-form";

const Home = () =>{
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState({});
  const [category, setCategory] = useState('people');

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      onSubmit({ category: 'people', id });
    }

  // eslint-disable-next-line
  }, []);

  const methods = useForm();

  const onSubmit = async data => {
    /**
     * Loading
     */
    setLoading(true);
    setDatos({});

    try {
      /**
       * Fetch
       */
      const response = await AxiosWar.get(`${data.category}/${data.id}`);
      console.log(response.data);

      /**
       * Actualizar estados
       */
      setDatos(response.data);
      setCategory(data.category);

      /**
       * Loading
       */
      setLoading(false);
    } catch (error) {
      /**
       * Errores en la petición
       */
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error);
      }
      setDatos(404);

      /**
       * Loading
       */
      setLoading(false);
    }
  };
  
  return (
    <main>
      <FormProvider {...methods} loading={loading}>
        <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
          <Header />
        </form>
      </FormProvider>
        {loading && (<CircularProgress />)}
        {(datos === 404) && (
          <Grid container justifyContent='center'>
            <Grid xs={3}>
              <span>Estos no son los droides que está buscando...</span>
            </Grid>
            <Grid xs={3}>
              <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-kenobi-1602508425.jpg?resize=980:*' alt='obin wan' width={400} height={217}/>
            </Grid>
          </Grid>
        )}
       
        
        {Boolean(datos.created) && <Render category={category} datos={datos} />}
      
    </main>
  )
}

export default Home;