import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Geographic information system',
    content: 'Geographic Information System ( GIS for short ) was formed in the 1960s and developed very widely in the past 10 years. GIS is today a decisive aid in many socio - economic and defense activities of many countries around the world. GIS has the ability to help government agencies , managers , businesses , individuals... to assess the current status of processes, natural, socio-economic entities through functions for collecting, managing, and querying, analyze and integrate the information associated with a consistent geometry (map) based on the coordinates of the input data.',
  },
  {
    key: '2',
    title: 'Geographic information system',
    content: 'Geographic Information System ( GIS for short ) was formed in the 1960s and developed very widely in the past 10 years. GIS is today a decisive aid in many socio - economic and defense activities of many countries around the world. GIS has the ability to help government agencies , managers , businesses , individuals... to assess the current status of processes, natural, socio-economic entities through functions for collecting, managing, and querying, analyze and integrate the information associated with a consistent geometry (map) based on the coordinates of the input data.',
  },
  {
    key: '3',
    title: 'Geographic information system',
    content: 'Geographic Information System ( GIS for short ) was formed in the 1960s and developed very widely in the past 10 years. GIS is today a decisive aid in many socio - economic and defense activities of many countries around the world. GIS has the ability to help government agencies , managers , businesses , individuals... to assess the current status of processes, natural, socio-economic entities through functions for collecting, managing, and querying, analyze and integrate the information associated with a consistent geometry (map) based on the coordinates of the input data.',
  },
]

function AppHero() {
  return (
    <div id="banner" className="bannerBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 style={{color: 'white'}}>{item.title}</h3>
                <p style={{textAlign:'justify', color: 'white'}}>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large" >Learn More</Button>
                  <Button size="large" style={{border: 'none'}}><i className="fas fa-desktop" ></i>Live Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;