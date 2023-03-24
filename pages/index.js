import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Nav from '@/src/nav';
import { Oswald } from 'next/font/google';
import { Toolbar } from '@mui/material';
import Head from 'next/head';
const oswald = Oswald({
  subsets:['latin']
})
export default function Index() {
  return (
    <Container maxWidth="lg" className={oswald.className}>
      <Head>
        <title>Suzuki Singapore</title>
      </Head>
      <Nav />
      <Toolbar/>

    </Container>
  );
}
