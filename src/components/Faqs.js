import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FAQ1 from '../images/faq1.svg';
import FAQ2 from '../images/faq2.svg';
import FAQ3 from '../images/faq3.svg';
import FAQ4 from '../images/faq4.svg';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Faqs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex' }}
      className="faq-block">
      <Tabs
        className='faq-questions'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      // sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label=" What are the advantages of derivatives over spot trading?" {...a11yProps(0)} />
        <Tab label=" What is leverage in derivatives?" {...a11yProps(1)} />
        <Tab label="How secure is it to trade on Density Exchange?" {...a11yProps(2)} />
        <Tab label="How do I get started on Density Exchange?" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className='faq-image'>
        <div className='faq-img'><img src={FAQ1} /></div>
        <p>As a smart trader, you can hedge your portfolio via crypto derivatives. Buying and selling of Crypto assets might not be affordable and feasible all the time in Spot while with Derivatives you can go short in bear and long in bull markets to reap the benefits of both sides. 

        </p>
      </TabPanel>
      <TabPanel value={value} index={1} className='faq-image'>
      <div className='faq-img'><img src={FAQ2} /></div>
        <p>Leverage is a scaling tool used to increase the buying power of a trader. For instance, you can scale up the trade up to INR 5000 worth of assets by just depositing INR 500 with 10x leverage on Density Exchange. The option to increase your leverage is unlocked as you get more familiar with derivatives, making sure you trade responsibly

        </p>      </TabPanel>
      <TabPanel value={value} index={2} className='faq-image'>
      <div className='faq-img'><img src={FAQ3} /></div>
        <p>Density uses 256 AWS SHA encryption, with secure storage, and safe multi-signature sign-in authentication to ensure access control and real-time monitoring. We are backed by leading KYC and AML analytics providers like Chainanalysis, Hyperverge, and Onside (SOC-2 Type-II meeting the AICPA Standards).
        </p>      </TabPanel>
      <TabPanel value={value} index={3} className='faq-image'>
      <div className='faq-img'><img src={FAQ4} /></div>
        <p>Get onboarded with our KYC-verified account in under 30 seconds and fund instantly with as low as INR 500 to trade with our leverage tool up to 10x. You can trade 24/7 at Density Exchange and we are always there to assist with our 24/7 support. </p>
      </TabPanel>
    </Box>
  );
}
