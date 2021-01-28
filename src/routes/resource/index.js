/* eslint-disable no-restricted-globals */
import React from 'react';
import Resource from './Resource';
import Layout from '../../components/Layout';
// import 'antd/dist/antd.css'

async function action({ params }) {
  const { id } = params;

  const component = id ? (
    <img src={`/images/${id}`} alt={id} />
  ) : (
    <Layout>
      <Resource />
    </Layout>
  );

  return {
    title: 'Resource',
    chunks: ['resource'],
    component,
  };
}

export default action;
