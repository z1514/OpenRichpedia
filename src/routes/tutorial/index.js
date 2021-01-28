import React from 'react';
import Ontology from './Tutorial';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Tutorial',
    chunks: ['tutorial'],
    component: (
      <Layout>
        <Ontology />
      </Layout>
    ),
  };
}

export default action;
