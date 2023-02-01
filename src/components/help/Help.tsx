import React, { useState, SyntheticEvent } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactGA from "react-ga4";
import { useAppContext } from '../../contexts/AppProvider';
import { makeStyles, styled } from '@mui/styles'
import { Link } from 'react-router-dom';
import TabPanel from '../shared/TabPanel';
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


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Help() {
    const { currentMode } = useAppContext();
    const CustomTab = styled(Tab)({
        "&.MuiTab-root": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: ".3rem",
            fontSize: "13px",
            textAlign: "left",
            color: currentMode === 'light' ? '#00000099' : '#BEC2C8' + ' !important',
            "@media screen and (max-width: 1024px)": {
                gap: "0",
                fontSize: "12px",
            },
            "@media screen and (max-width: 375px)": {

            },
        },
        "&.Mui-selected": {
            color: currentMode === 'light' ? '#060607' : '#060607' + ' !important',
            backgroundColor: currentMode === 'light' ? "#CFDEFA" : "#FFEA00",
            fontWeight: "bold",
        },
        "& svg": {
            width: "22px",

            "@media screen and (max-width: 1024px)": {
                width: "20px",
            },
            "@media screen and (max-width: 375px)": {

            },
        },
    });

    ReactGA.send({ hitType: "pageview", page: "/documentation" });
    const [tab, setTab] = useState<number>(1);
    const classes = useStyles();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box
      sx={{ 
        width: "100%",
        flexDirection: "row",
        display: 'flex',
        height: 700,
        padding: "30px 5rem 5rem 3rem", 
        "@media screen and (max-width: 1024px)": {
            gap: "2rem",
            marginTop: "10px",
            padding: "30px 2rem 5rem .5rem",

        },
        "@media screen and (max-width: 375px)": {

        },
    }}
    >
      <Tabs
        orientation="vertical"
        variant='scrollable'
        value={tab}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        sx={{ 
            borderRight: "1px solid #d1d1d1", 
            width: "50%",
            maxWidth: "270px",
            color: currentMode === 'light' ? "#060607" : "#ffffff",
            "@media screen and (max-width: 1024px)": {
                maxWidth: "250px",
            },
            "@media screen and (max-width: 375px)": {

            },
        }}
      >
        <Typography component="h2" pt={2} sx={{
            color: currentMode === 'light' ? "#060607" : "#ffffff",
            fontWeight: "600",
            fontSize: "18px",
        }}>
            Access API
        </Typography>
        <CustomTab label="Overview" {...a11yProps(1)} />
        <CustomTab label="Sign-Up" {...a11yProps(2)} />
        <CustomTab label="Subscribe" {...a11yProps(3)} />
        <CustomTab label="Access Token" {...a11yProps(4)} />
        <CustomTab label="Send Requests" {...a11yProps(5)} />
        <Typography component="h2" pt={2} sx={{
            color: currentMode === 'light' ? "#060607" : "#ffffff",
            fontWeight: "600",
            fontSize: "18px",
        }}>
            Upload API
        </Typography>
        <CustomTab label="Pre-requisite" {...a11yProps(7)} />
        <CustomTab label="Updating API" {...a11yProps(8)} />
        <CustomTab label="Endpoints" {...a11yProps(9)} />
        <CustomTab label="Gateway" {...a11yProps(10)} />
        <CustomTab label="Analytics" {...a11yProps(11)} />
        <Typography component="h2" pt={2} sx={{
            color: currentMode === 'light' ? "#060607" : "#ffffff",
            fontWeight: "600",
            fontSize: "18px",
        }}>
            Testing
        </Typography>
        <CustomTab label="Tests" {...a11yProps(13)} />
      </Tabs>

      <Box sx={{
            display: "fixed",
            width: "100%",
            overflowX: "scroll",
            overflowY: "unset",
            "& h1": {
                marginBottom: "10px",
                fontSize: "48px",
                fontWeight: "700",
                color: currentMode === 'light' ? "#060607" : "#ffffff",
            },
            "& h2": {
                marginBottom: "8px",
                fontSize: "26px",
                fontWeight: "bold",
                color: currentMode === 'light' ? "#060607" : "#ffffff",

                "@media screen and (max-width: 1024px)": {
                    marginBottom: "2px",
                    fontSize: "24px",

                },
                "@media screen and (max-width: 375px)": {

                },
            },
            "& h3": {
                marginBottom: "10px",
                fontSize: "17px",
                fontWeight: "bold",
                color: currentMode === 'light' ? "#223B6C" : "#A0BDF5",
                width: "100%",

                "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",

                },
                "@media screen and (max-width: 375px)": {

                },
            },
            "& p": {
                marginBottom: "20px",
                fontSize: "15px",
                color: currentMode === 'light' ? "#060607" : "#ffffff",
                width: "88%",

                "@media screen and (max-width: 1024px)": {
                    fontSize: "14px",

                },
                "@media screen and (max-width: 375px)": {

                },
            },
            "& img": {
                marginBottom: "30px",
                border: "1px solid #c1c1c1",
                borderRadius: "3px",
                width: "80%",
            },
        }}>
            <TabPanel value={tab} index={1}>
            <Typography component="h1">Access API</Typography>
                <Typography component="h2">Overview</Typography>
                <Typography component="p">Welcome to the world's largest Artificial Intelligence API hub.</Typography>

                <Typography component="p">
                    ZAPI is used by developers to find, test, and connect to thousands of APIs — all with a single API key and dashboard. <br /> <br />
                    Find the APIs that you need for your project, embed the API into your app, and track usage of all your APIs through a single dashboard. If you create an API, use ZAPI to make it available to other developers who are already using the ZAPI.
                </Typography>
            </TabPanel>

            <TabPanel value={tab} index={2}>
                <Typography component="h2">Sign-Up</Typography>
                    <Typography component="h3">How to create a ZAPI account</Typography>
                    <Typography component="p">
                        Create a ZAPI account by filling out the sign-up form on the <Link to='/signup'>Sign-up page</Link>. You can create an account using your email address, or by connecting an existing Google account.
                    </Typography>

                <Box
                    component="img"
                    alt="sign-up-page"
                    src={signup}
                />

                <Typography component="h3">Validating your email address</Typography>
                <Typography component="p">
                    To validate your account, a six digit code will be sent to the provided email address. You can enter the code on the verification screen to finalize your account registration.
                </Typography>

                <Box
                    component="img"
                    alt="otp-page"
                    src={otp}
                />
            </TabPanel>

            <TabPanel value={tab} index={3}>
            <Typography component="h2">Subscribe</Typography>
                <Typography component="h3">
                    Discover the API(s) that work best for your application
                </Typography>

                <Typography component="p">
                    Steps: <br />
                    01. Go to <Link to='/api-hub'>API Hub page</Link> <br />
                    02. Locate an API that you want to use <br />
                    03. Click on the top right icon of the card to subscribe to the API.
                </Typography>

                <Box
                    component="img"
                    alt="api-hub-page"
                    src={apihubbox}
                />
            </TabPanel>

            <TabPanel value={tab} index={4}>
            <Typography component="h2">Access Token</Typography>
                <Typography component="h3">
                    Getting access token
                </Typography>

                <Typography component="p">
                    Steps: <br />
                    01. Sign in by Clicking the Login button on the top right corner of the screen and add your credentials.
                </Typography>

                <Box
                    component="img"
                    alt="login"
                    src={login2}
                />

                <Typography component="p">
                    02. Locate Subscription tab on the <Link to='/developer/dashboard'>Dashboard page</Link> then click it.
                </Typography>

                <Box
                    component="img"
                    alt="subscriptions"
                    src={subscriptions1}
                />

                <Typography component="p">
                    03. Click the copy icon to copy the token.
                </Typography>

                <Box
                    component="img"
                    alt="subscriptions"
                    src={subscriptions2}
                />
            </TabPanel>

            <TabPanel value={tab} index={5}>
                <Typography component="h2">Send Requests</Typography>

                <Typography component="p">
                    In this example we are going to use Postman to send a request, to do so you will need an endpoint and your access token:
                </Typography>

                <Box
                    component="img"
                    alt="request"
                    src={request}
                />
            </TabPanel>

            <TabPanel value={tab} index={7}>
                <Typography component="h1">Upload API</Typography>
                <Typography component="h2">Pre-requisite</Typography>

                <Typography component="p">
                    In this example we are going to use Postman to send a request, to do so you will need an endpoint and your access token:
                </Typography>
                <Typography component="h3">Sign-in</Typography>

                <Typography component="p">
                    In this example we are going to use Postman to send a request, to do so you will need an endpoint and your access token:
                </Typography>
                <Typography component="h3">Add API</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis. Aliquam nunc blandit aliquet velit pellentesque fermentum sodales laoreet mauris.
                    Eget convallis pellentesque lectus integer enim feugiat consequat etiam.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={uploadapi}
                />
            </TabPanel>

            <TabPanel value={tab} index={8}>
                <Typography component="h2">Updating API</Typography>
                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis. Aliquam nunc blandit aliquet velit pellentesque fermentum sodales laoreet mauris.
                    Eget convallis pellentesque lectus integer enim feugiat consequat etiam.
                </Typography>

                <Typography component="h3">Upload Logo</Typography>
                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis. Aliquam nunc blandit aliquet velit pellentesque fermentum sodales laoreet mauris.
                    Eget convallis pellentesque lectus integer enim feugiat consequat etiam.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={uploadlogo}
                />

                <Typography component="h3">Short description, Read me, Descriptions (Optional)</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis. Aliquam nunc blandit aliquet velit pellentesque fermentum sodales laoreet mauris.
                    Eget convallis pellentesque lectus integer enim feugiat consequat etiam.
                </Typography>
                <Typography component="h3">Visibility</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis. Aliquam nunc blandit aliquet velit pellentesque fermentum sodales laoreet mauris.
                    Eget convallis pellentesque lectus integer enim feugiat consequat etiam.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={visibility}
                />
            </TabPanel>

            <TabPanel value={tab} index={9}>
                <Typography component="h2">Endpoints</Typography>
                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis. Aliquam nunc blandit aliquet velit pellentesque fermentum sodales laoreet mauris.
                    Eget convallis pellentesque lectus integer enim feugiat consequat etiam.
                </Typography>

                <Typography component="h3">Add & edit Endpoints (manually)</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={endpoints}
                />
                <Typography component="h3">Name</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Typography component="h3">Descriptions</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Typography component="h3">GET</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Typography component="h3">POST</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Typography component="h3">PATCH</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Typography component="h3">DELETE</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Typography component="h3">Route</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={route}
                />
                <Typography component="h3">Upload Endpoints</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper pulvinar mattis aliquam egestas sed et iaculis. Quis facilisis adipiscing purus vivamus integer lobortis.
                    Iaculis aliquam aliquam purus vel duis.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={uploadendpoints}
                />
            </TabPanel>

            <TabPanel value={tab} index={10}>
                <Typography component="h2">Gateway</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Mi congue tortor enim massa. Viverra ipsum consectetur quam diam mi ultricies eget. Dui id lacinia et purus commodo massa.
                </Typography>
                <Typography component="h3">Firewall security</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. At eget egestas turpis nisl lectus viverra facilisi pretium libero. Enim viverra ut sit libero quis eleifend enim sit. Morbi id sit non nisl egestas gravida.

                    X-ZAPI-Proxy-Secret Lorem ipsum dolor sit amet consectetur. At eget egestas turpis nisl lectus viverra facilisi pretium libero. Enim viverra ut sit libero quis eleifend enim sit. Morbi id sit non nisl egestas gravida.
                </Typography>
            </TabPanel>

            <TabPanel value={tab} index={11}>
                <Typography component="h2">Analytics</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Mi congue tortor enim massa. Viverra ipsum consectetur quam diam mi ultricies eget. Dui id lacinia et purus commodo massa.
                </Typography>
                <Typography component="h3">Requests</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. At eget egestas turpis nisl lectus viverra facilisi pretium libero. Enim viverra ut sit libero quis eleifend enim sit. Morbi id sit non nisl egestas gravida.
                </Typography>
                <Typography component="h3">Subscribers</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. At eget egestas turpis nisl lectus viverra facilisi pretium libero. Enim viverra ut sit libero quis eleifend enim sit. Morbi id sit non nisl egestas gravida.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={analytics}
                />
            </TabPanel>

            <TabPanel value={tab} index={13}>
                <Typography component="h1">Testing</Typography>
                <Typography component="h2">Tests</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Mi congue tortor enim massa. Viverra ipsum consectetur quam diam mi ultricies eget. Dui id lacinia et purus commodo massa.
                </Typography>
                <Typography component="h3">Search Tests</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. At eget egestas turpis nisl lectus viverra facilisi pretium libero. Enim viverra ut sit libero quis eleifend enim sit. Morbi id sit non nisl egestas gravida.
                </Typography>
                <Typography component="h3">Create Tests</Typography>

                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. At eget egestas turpis nisl lectus viverra facilisi pretium libero. Enim viverra ut sit libero quis eleifend enim sit. Morbi id sit non nisl egestas gravida.
                </Typography>
                <Box
                    component="img"
                    alt="request"
                    src={tests}
                />
            </TabPanel>
        </Box>
    </Box>
  );
}

const useStyles = makeStyles({
    root: {
        height: "auto",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "170px 1rem 90px 1rem",
        backgroundColor: "#d1d1d1",
        backgroundImage: "url('../../images/Clouds.svg')",
        width: "100%",
        opacity: .98,
        "& h1": {
            fontSize: "42px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
            lineHeight: "60px",

            "@media screen and (max-width: 1024px)": {
                fontSize: "36px",
                lineHeight: "50px",

            },
            "@media screen and (max-width: 375px)": {

            },
        },
        "& p": {
            textAlign: "center",
            fontSize: "15px",
            color: "#fff",
            lineHeight: "20px",
            width: "55%",

            "@media screen and (max-width: 1024px)": {
                fontSize: "12px",

            },
            "@media screen and (max-width: 375px)": {

            },
        },

        "@media screen and (max-width: 1024px)": {
            padding: "150px 1rem 70px 1rem",

        },
        "@media screen and (max-width: 375px)": {

        },
    },
    darkCustomTab: {
        backgroundColor: "#FFEA00",
        color: "#fff",
    }

});

export default Help;