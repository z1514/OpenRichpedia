import React from 'react';

const download = {
  title: 'Download',
  text: (
    <div>
      <p>
        You can download parts of images and triples of relationship from here
        through Google Drive. Because the image entity folder is relatively
        large, we split it into three folders(Image1, Image2, Image3) for
        download.
      </p>
      <div>
        <ul>
          <li>
            <span
              style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
            >
              Image
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=1QVAUWf87v2Lct1YYlygOpphwE5TMlNBg"
              >
                image_sight&city
              </a>
            </span>
            {/* <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=15aoYUdCB5_bhagz3TlbBhkA3MLGBJv9P"
              >
                Image2
              </a>
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=1TiATEauW91_ptJz4qCk0Kn1p_6gojXTf"
              >
                Image3
              </a>
            </span> */}
          </li>
          <li>
            <span
              style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
            >
              NT Files
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/drive/folders/1---n-BKB8ZUhTmURh6qzSwNMopzWmCmZ?usp=sharing"
              >
                Triples
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  ),
};


const texts = [
  download,
];

export default texts;
export {
  download,
};
