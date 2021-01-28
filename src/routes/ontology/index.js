import React from 'react';
import Ontology from './Ontology';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Ontology',
    chunks: ['ontology'],
    component: (
      <Layout>
        <Ontology />
      </Layout>
    ),
  };
}

export default action;
