/* eslint-disable camelcase */
import React from 'react';

const owl_class = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2002/07/owl#Class"
  >
    owl:Class
  </a>
);

const owl_ontology = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2002/07/owl#Ontology"
  >
    owl:Ontology
  </a>
);

const owl_dataProperty = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2002/07/owl#DatatypeProperty"
  >
    owl:DatatypeProperty
  </a>
);

const owl_objectProperty = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2002/07/owl#ObjectProperty"
  >
    owl:ObjectProperty
  </a>
);

const rdfs_subClassOf = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2000/01/rdf-schema#subClassOf"
  >
    rdfs:subClassOf
  </a>
);

const rdfs_domain = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2000/01/rdf-schema#domain"
  >
    rdfs:domain
  </a>
);

const rdfs_range = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2000/01/rdf-schema#range"
  >
    rdfs:range
  </a>
);

const rdfs_subPropertyOf = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf"
  >
    rdfs:subPropertyOf
  </a>
);

const rdf_value = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="http://www.w3.org/1999/02/22-rdf-syntax-ns#value"
  >
    rdf:value
  </a>
);

const ontologyList = [
  {
    id: 0,
    name: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        The RichPedia Ontology
      </a>
    ),
    owl: owl_ontology,
    rdfs: [],
  },
  {
    id: 1,
    name: (
      <a id="Image" href="/ontology#Image">
        Image
      </a>
    ),
    owl: owl_class,
    rdfs: [
      {
        name: rdfs_subClassOf,
        url: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://schema.org/ImageObject"
          >
            http://schema.org/ImageObject
          </a>
        ),
      },
      {
        name: '',
        url: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://dbpedia.org/ontology/StillImage"
          >
            http://dbpedia.org/ontology/StillImage
          </a>
        ),
      },
    ],
  },
  {
    id: 2,
    name: (
      <a id="height" href="/ontology#height">
        Image height in pixels
      </a>
    ),
    owl: owl_dataProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#Image">Image</a>,
      },
      {
        name: rdfs_range,
        url: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.w3.org/2001/XMLSchema#integer"
          >
            http://www.w3.org/2001/XMLSchema#integer
          </a>
        ),
      },
      {
        name: rdfs_subPropertyOf,
        url: (
          <>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://ogp.me/ns#image:height"
              >
                http://ogp.me/ns#image:height
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://schema.org/height"
              >
                http://schema.org/height
              </a>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    name: (
      <a id="width" href="/ontology#width">
        Image width in pixels
      </a>
    ),
    owl: owl_dataProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#Image">Image</a>,
      },
      {
        name: rdfs_range,
        url: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.w3.org/2001/XMLSchema#integer"
          >
            http://www.w3.org/2001/XMLSchema#integer
          </a>
        ),
      },
      {
        name: rdfs_subPropertyOf,
        url: (
          <>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://ogp.me/ns#image:width"
              >
                http://ogp.me/ns#image:width
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://schema.org/width"
              >
                http://schema.org/width
              </a>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: 5,
    name: (
      <a id="Descriptor" href="/ontology#Descriptor">
        Descriptor
      </a>
    ),
    owl: owl_class,
    rdfs: [],
  },
  {
    id: 6,
    name: (
      <a id="describes" href="/ontology#describes">
        Describes an image
      </a>
    ),
    owl: owl_objectProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
      {
        name: rdfs_range,
        url: <a href="/ontology#Image">Image</a>,
      },
    ],
  },
  {
    id: 7,
    name: (
      <a id="GHD" href="/ontology#GHD">
        Gradation Histogram Descriptor
      </a>
    ),
    owl: owl_class,
    rdfs: [
      {
        name: rdfs_subClassOf,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
    ],
  },
  {
    id: 8,
    name: (
      <a id="HOGD" href="/ontology#HOGD">
        Histogram of Oriented Gradient Descriptor
      </a>
    ),
    owl: owl_class,
    rdfs: [
      {
        name: rdfs_subClassOf,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
    ],
  },
  {
    id: 9,
    name: (
      <a id="CM" href="/ontology#CM">
        Color Moment Descriptor
      </a>
    ),
    owl: owl_class,
    rdfs: [
      {
        name: rdfs_subClassOf,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
    ],
  },
  {
    id: 10,
    name: (
      <a id="CLD" href="/ontology#CLD">
        Color Layout Descriptor
      </a>
    ),
    owl: owl_class,
    rdfs: [
      {
        name: rdfs_subClassOf,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
    ],
  },
  {
    id: 11,
    name: (
      <a id="GLCM" href="/ontology#GLCM">
        GLCM Descriptor
      </a>
    ),
    owl: owl_class,
    rdfs: [
      {
        name: rdfs_subClassOf,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
    ],
  },
  {
    id: 12,
    name: (
      <a id="value" href="/ontology#value">
        Descriptor value
      </a>
    ),
    owl: owl_dataProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
      {
        name: rdfs_range,
        url: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.w3.org/2001/XMLSchema#string"
          >
            http://www.w3.org/2001/XMLSchema#string
          </a>
        ),
      },
      {
        name: rdfs_subPropertyOf,
        url: rdf_value,
      },
    ],
  },
  {
    id: 13,
    name: (
      <a id="usesDescriptor" href="/ontology#usesDescriptor">
        The descriptor used in the relation
      </a>
    ),
    owl: owl_objectProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#ImageRelation">Image Relation</a>,
      },
      {
        name: rdfs_range,
        url: <a href="/ontology#Descriptor">Descriptor</a>,
      },
    ],
  },
  {
    id: 14,
    name: (
      <a id="similarity" href="/ontology#similarity">
        The similarity between the images in the relation
      </a>
    ),
    owl: owl_dataProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#ImageRelation">Image Relation</a>,
      },
      {
        name: rdfs_range,
        url: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.w3.org/2001/XMLSchema#float"
          >
            http://www.w3.org/2001/XMLSchema#float
          </a>
        ),
      },
    ],
  },
  {
    id: 15,
    name: (
      <a id="ImageRelation" href="/ontology#ImageRelation">
        Image Relation
      </a>
    ),
    owl: owl_class,
    rdfs: [],
  },
  {
    id: 16,
    name: (
      <a id="sourceImg" href="/ontology#sourceImg">
        The source of an image relation
      </a>
    ),
    owl: owl_objectProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#ImageRelation">Image Relation</a>,
      },
      {
        name: rdfs_range,
        url: <a href="/ontology#Image">Image</a>,
      },
    ],
  },
  {
    id: 17,
    name: (
      <a id="targetImg" href="/ontology#targetImg">
        The target of an image relation
      </a>
    ),
    owl: owl_objectProperty,
    rdfs: [
      {
        name: rdfs_domain,
        url: <a href="/ontology#ImageRelation">Image Relation</a>,
      },
      {
        name: rdfs_range,
        url: <a href="/ontology#Image">Image</a>,
      },
    ],
  },
];

export default ontologyList;
