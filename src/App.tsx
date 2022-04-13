import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { Grid } from '@mui/material';

import Navigation from './commons/Navigation';
import Footer from './commons/Footer';

import HomeView from './pages/HomeView';
import BlogView from './pages/BlogView';
import ContactView from './pages/ContactView';

import customMaterialTheme from './styles/theme';

import './App.css';
import SiteInfoView from './pages/SIteInfoView';

function App() {

  return (
    <ThemeProvider theme={customMaterialTheme}>
      <BrowserRouter>
        <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
          <Grid item xs={2}>
            <Navigation />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/blog" element={<BlogView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/siteinfo" element={<SiteInfoView />} />
              <Route path="*" element={<HomeView />} />
            </Routes>
          </Grid>
        </Grid>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )

}

export default App;
