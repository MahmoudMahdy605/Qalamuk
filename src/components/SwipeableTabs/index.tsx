"use client";
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { autoPlay } from "react-swipeable-views-utils"
import localFont from "next/font/local";
import { colors } from '@mui/material';
import { orange } from '@mui/material/colors';
const Fade = require('react-reveal/Fade')
import { TypeAnimation } from 'react-type-animation';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const myFont = localFont({ src: "../../fonts/GEDinkum-Bold-1.ttf" });

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function SwipeableTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
  
    <Fade bottom duration= {1500}>
      <Box display={'flex'} flexDirection={'column'}  alignItems={'center'}  >
        <Typography style={myFont.style} sx={{fontSize: '50px' , right: '50%', color: 'orange' } }> المزيد عن قَلَمُك </Typography>
        <Typography style={myFont.style} sx={{fontSize: '15px' , right: '50%', color: '#16B0D4' } }>

        <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          ' قَلَمُك نعبر عنكم ....', 
          1000,
          'قَلَمُك إبداع بلا حدود ....',
        ]}
        speed={50}
        style={{ fontSize: '2em' }}
        repeat={Infinity}
        />
        </Typography>
        <Box sx={{ bgcolor: 'background.paper', width: '80%', margin: 'auto', borderWidth:2 ,  borderStyle: 'dashed', borderColor: '#16B0D4', position: 'relative', marginTop: '35px',
        borderRadius: '12px', backgroundImage: 'linear-gradient(#F3E7F3, #FFFDFF)' }}>
          <AppBar position="static" 
          sx={{backgroundColor: 'white', border: 2 , borderStyle: 'dashed', borderColor: '#16B0D4',
          boxShadow: 'none', color: '#f3921f' , padding: '4px', width: '80%', borderRadius: '10px', margin: 'auto', transform: 'translate(0, -50%)',
            "& .MuiTabs-indicator ":{
              display: 'none'}, 
            "& .MuiTab-root.Mui-selected": {
              color: 'white',
              background: 'orange',
              borderRadius: '10px'

            }
        }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab style={myFont.style} sx={{fontSize: 23}} label="قصتنا" {...a11yProps(0)} />
              <Tab style={myFont.style} sx={{fontSize: 23}} label="نبذة عنّا" {...a11yProps(1)} />
              <Tab style={myFont.style} sx={{fontSize: 23}} label="رؤيتنا" {...a11yProps(2)} />
              <Tab style={myFont.style} sx={{fontSize: 23}} label="رسالتنا" {...a11yProps(3)} />
              <Tab style={myFont.style} sx={{fontSize: 23}} label="هدفنا" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          
          <AutoPlaySwipeableViews
            interval={10000}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {/* <TabPanel value={value} index={0} dir={theme.direction} > */}
            <Typography style={myFont.style} textAlign={'right'}  maxWidth={'60%'} marginLeft={'auto'} marginRight={'10%'} sx={{fontSize: 20}} paddingBottom={3}>
            منذ عقدٍ من الزمان انطلقنا ودخلنا إلى عالم الأعمال عبر كتابة النصوص الإعلانية بشكلٍ خاص؛ ثم طورنا منظومة أعمالنا وتعمقنا أكثر في الخدمات النصية؛ ومع مرور الوقت وتحديدًا عام 2017 بدأ قلمك يأخذ منحنى جديد؛ وأصبحنا وجهة أولى للعديد من العملاء في القطاع الحكومي والخاص؛ وعلمنا ما يبحث عنه العملاء فوفرناه بجودةٍ لا تُنافس، وخلال مسيرةٍ حافلة أنهينا قرابة 1300 مشروع لأكثر من 500 عميل داخل وخارج الوطن العربي؛ وكتبنا آلاف النصوص؛ وما زلنا نسعى نحو المزيد؛ فمداد أقلامنا يشتاق إلى تستطير إنجازاتكم     
            </Typography>
            {/* </TabPanel> */}
            {/* <TabPanel value={value} index={1} dir={theme.direction}> */}
            <Typography style={myFont.style} textAlign={'right'} maxWidth={'60%'} marginLeft={'auto'} marginRight={'10%'} sx={{fontSize: 20}}>
            قلمك نبدع في سرد قصتك لأننا نعرف أسرار الكلمة وتأثيرها؛ وأقلامنا ستحقق لك نتائج تفوق توقعاتك، فخبرتنا لعشر سنوات في ميدان الخدمات النصية جعلنا الخيار الأمثل للكثير من العلامات التجارية والعملاء في مختلف أرجاء الوطن العربي؛ فانضم إلينا الآن واجعل لهويتك بصمةً خاصة؛ ودع فريقنا يبدع ما يميزك. قلمك نعبر عنكم
            </Typography>
            {/* </TabPanel> */}
            {/* <TabPanel value={value} index={2} dir={theme.direction}> */}
            <Typography style={myFont.style} textAlign={'right'} maxWidth={'60%'} marginLeft={'auto'} marginRight={'10%'} sx={{fontSize: 20}}>
            أن نكون المنصة الأولى في الوطن العربي في تقديم خدمات المحتوى النصي التي تجمع بين الإبداع والجودة؛ لننشر جمال اللغة وروعة بصمتها في دعم العلامات التجارية والأفراد
            </Typography>
            {/* </TabPanel> */}
            {/* <TabPanel value={value} index={3} dir={theme.direction}> */}
            <Typography style={myFont.style} textAlign={'right'} maxWidth={'60%'} marginLeft={'auto'} marginRight={'10%'} sx={{fontSize: 20}}>
            توظيف قوة الكلمة في تطوير الأعمال والمشروعات؛ وتقديم حلول إبداعية تلبي حاجة العملاء وتضمن لهم الوصول إلى أهدافهم
            </Typography>
            {/* </TabPanel> */}
            {/* <TabPanel value={value} index={4} dir={theme.direction}> */}
            <Typography style={myFont.style} textAlign={'right'} maxWidth={'60%'} marginLeft={'auto'} marginRight={'10%'} sx={{fontSize: 20}}>
            أن تكون لنا بصمة لدى مختلف العلامات والكيانات البارزة من خلال دعمهم بكتاباتٍ إبداعية تصل إلى جمهورهم وتعبر عنهم
            </Typography>
            {/* </TabPanel> */}
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
    </Fade>
  );
}
