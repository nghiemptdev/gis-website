import React from 'react';

import AppBanner from '../home/banner';
import AppAbout from '../home/about';
import AppFeature from '../home/feature';
import AppIntroduce from '../home/introduce';
import AppFaq from '../home/faq';
import AppPackage from '../home/package';
import AppContact from '../home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppBanner/>
      <AppAbout/>
      <AppFeature/>
      <AppIntroduce/>
      <AppFaq/>
      <AppPackage/>
      <AppContact/>
    </div>
  );
}

export default AppHome;