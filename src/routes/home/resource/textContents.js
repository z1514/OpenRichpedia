import React from 'react';
import intro from './intro.jpg';
import licenseImg from './licenseImg.png';

const introduction = {
  title: 'Introduction',
  anchor: 'introduction',
  text: (
    <div>
      <p>
        With the rapid development of Semantic Web technologies, various
        knowledge graphs are published on the Web using Resource Description
        Framework (RDF), such as Wikidata and DBpedia. Knowledge graphs provide
        for setting RDF links among different entities, thereby forming a large
        heterogeneous graph, supporting semantic search, question answering and
        other intelligent services. Meanwhile, public availability of visual
        resource collections has attracted much attention for different Computer
        Vision (CV) research purposes, including visual question answering,
        image classiﬁcation, object and relationship detection, etc. And we have
        witnessed promising results by encoding entity and relation information
        of textual knowledge graphs for CV tasks. Whereas most knowledge graph
        construction work in the Semantic Web and Natural Language Processing
        (NLP) communities still focus on organizing and discovering only textual
        knowledge in a structured representation. There is a relatively small
        amount of attention in utilizing visual resources for KG research. A
        visual database is normally a rich source of image or video data and
        provides sufficient visual information about entities in KGs. Obviously,
        making link prediction and entity alignment in wider scope can empower
        models to make better performance when considering textual and visual
        features together.
      </p>
      <p>
        As mentioned above, general knowledge graphs focus on the textual facts.
        There is still no comprehensive multi-modal knowledge graph dataset
        prohibiting further exploring textual and visual facts on either side.
        To ﬁll this gap, we provide a comprehensive multi-modal dataset (called
        <span style={{ fontWeight: '600' }}> Richpedia</span>) in this paper, as
        shown in figure below.
      </p>
      <img src={intro} alt="intro" style={{ width: '100%' }} />
      <p>
        In summary, our <span style={{ fontWeight: '600' }}>Richpedia</span>{' '}
        data resource mainly makes the following contributions:
      </p>
      <ul>
        <li>
          To our best knowledge, we are the ﬁrst to provide comprehensive
          visualrelational resources to general knowledge graphs. The result is
          a big and high-quality multi-modal knowledge graph dataset, which
          provides a wider data scope to the researchers from The Semantic Web
          and Computer Vision.
        </li>
        <li>
          We propose a novel framework to construct the multi-modal knowledge
          graph. The process starts by collecting entities and images from
          Wikidata, Wikipedia, and Search Engine respectively. Images are then
          ﬁltered by a diversity retrieval model. Finally, RDF links are set
          between image entities based on the hyperlinks and descriptions in
          Wikipedia.
        </li>
        <li>
          We publish the <span style={{ fontWeight: '600' }}>Richpedia</span> as
          an open resource, and provide a faceted query endpoint using Apache
          Jena Fuseki. Researchers can retrieve and leverage data distributed
          over general KGs and image resources to answering more richer visual
          queries and make multi-relational link predictions.
        </li>
      </ul>
    </div>
  ),
};

const friendlyLink = {
  title: 'Friendly Link',
  anchor: 'friendlyLink',
  text: (
    <div>
      <p>Our data uses other resources, so we make a statement here.</p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.wikidata.org/wiki/Wikidata:Main_Page"
          >
            Wikidata
          </a>{' '}
          is becoming an increasingly important knowledge graph in the research
          community. We collect the KG entities from Wikidata as <span style={{fontFamily: "Georgia"}}>&epsilon;<sub>KG</sub></span> in 
          <span style={{ fontWeight: '600' }}> Richpedia</span>.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.wikipedia.org/"
          >
            Wikipedia
          </a>{' '}
          contains images for KG entities in Wikidata and a number of related
          hyperlinks among these entities. We will collect part of the image
          entities from Wikipedia and relations between collected KG entities
          and image entities. We will also discover relations between image
          entities based on the hyperlinks and related descriptions in
          Wikipedia.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            Google
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://search.yahoo.com/"
          >
            Yahoo
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cn.bing.com/"
          >
            Bing
          </a>{' '}
          image sources: To obtain sufficient image entities related to each KG
          entity, we implemented a web crawler taking input as KG entities to
          image search engines Google Images, Bing Images, and Yahoo Image
          Search, and parse query results.
        </li>
      </ul>
    </div>
  ),
};

const texts = [
  introduction,
  friendlyLink,
];

export default texts;
export {
  introduction,
  friendlyLink,
};
