import React from 'react';
import s from './seu.png'

const introduction = {
  title: 'About us',
  anchor: 'AboutUs',
  text: (
    <div>
      <p>
        Richpedia Multi-modal Website is designed and organized by SEU-KSE lab.
      </p>
      <img src={s} alt="seu" style={{width:"160px",margin:"10px"}}/>
      <p>
      Major source contributions and maintenance come from
      <li>Qiushuo Zheng, master, Knowledge Science and Engineering Laboratory, Southeast University, Nanjing, China.</li>
      <li>Jianxiong Zheng, bachelor, Knowledge Science and Engineering Laboratory, Southeast University, Nanjing, China.</li>
      <li>Chaoyu Bai, master, Knowledge Science and Engineering Laboratory, Southeast University, Nanjing, China.</li>
      <li>Meng Wang, assistant professor, Knowledge Science and Engineering Laboratory, Southeast University, Nanjing, China.</li>
      <li>Guilin Qi, professor, Knowledge Science and Engineering Laboratory, Southeast University, Nanjing, China.</li>
                    
      </p>
    </div>
  ),
};

const RelatedWorks = {
  title: 'Related Works',
  anchor: 'RelatedWorks',
  text: (
    <div>
      <p>
      Our dataset and Method is mainly based on the following paper：
      <li><a href="https://link.springer.com/chapter/10.1007/978-3-030-41407-8_9" target="_Blank">Richpedia: A Comprehensive Multi-modal Knowledge Graph</a></li>           
      </p>
    </div>
  ),
};

const License = {
  title: 'License (MIT)',
  anchor: 'License',
  text: (
    <div style={{textAlign:"justify"}}>
      <p>
      Copyright (c) 2020 SEU-KSE            
      </p>
      <p style={{wordWrap:"word-break" }}>
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <p style={{wordWrap:"word-break"}}>
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      </p>
      <p style={{wordWrap:"word-break"}}>
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  ),
};




const texts = [
  introduction,
  RelatedWorks,
  License,
];

export default texts;
export {
  introduction,
  RelatedWorks,
  License,
};
