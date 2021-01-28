import React from 'react';
import Dataset from './Dataset';
import Layout from '../../components/Layout';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import CitySightDataset from '../../components/CitySightDataset/CitySightDataset';
import PeopleDataset from '../../components/PeopleDataset/PeopleDataset';

async function action({ params }) {
  const { datatype } = params;
  let content = <Dataset />;
  if (datatype) {
    if (datatype === 'city_sight') content = <CitySightDataset />;
    if (datatype === 'people') content = <PeopleDataset />;
  }
  return {
    title: 'Dataset Display',
    chunks: ['dataset'],
    component: (
      <Layout>
        {/* <HeaderMenu /> */}
        {content}
      </Layout>
    ),
  };
}

export default action;
