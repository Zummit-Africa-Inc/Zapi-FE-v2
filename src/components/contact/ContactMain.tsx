import React, { useState, SyntheticEvent } from 'react'
import ReactGA from "react-ga4";
import Hero from './Hero';
import TabPanel from '../shared/TabPanel'
import { makeStyles, styled } from '@mui/styles'
import { useAppContext } from '../../contexts/AppProvider';
import { Tab, Tabs, Typography, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import {
    apihub,
    apihubbox,
    signup,
    otp,
    login2,
    request,
    subscriptions1,
    subscriptions2,
    uploadapi,
    endpoints,
    visibility,
    uploadlogo,
    route,
    uploadendpoints,
    analytics,
    tests,
} from '../../assets/images';


const Contact: React.FC = () => {
    const { currentMode } = useAppContext();
  return (
    <>
        <Hero />
    </>
  )
}

export default Contact