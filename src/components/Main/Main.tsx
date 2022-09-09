import React from 'react';
import {AiOutlineSound} from "react-icons/ai";
import {BiShowAlt, BiShow} from "react-icons/bi";
import {HiOutlinePencil} from "react-icons/hi";
import {TbBook2} from "react-icons/tb";
import {BsFileWord} from "react-icons/bs";

const Main = () => {
  return (
    <main>
      <section className="word-section">
        <div className="title">Satisfaction</div>
        <div className="hints">
          <div className="hints-item" title="Sound">
            <AiOutlineSound/>
          </div>
          <div className="hints-item" title="Show capital word">
            <BiShowAlt/>
          </div>
          <div className="hints-item" title="Show word">
            <BiShow/>
          </div>
        </div>
      </section>
      <section className="word-params">
        <div className="blur">
          <div className="word-params-section">
            <div className="word-params-title">Translate</div>
            <div className="definition"><BsFileWord/>spokojenost</div>
          </div>
          <div className="word-params-section">
            <div className="word-params-title">Definition</div>
            <div className="definition"><TbBook2/>A fulfilment of a need or desire.</div>
          </div>
          <div className="word-params-section">
            <div className="word-params-title">Example</div>
            <div className="definition">
              <HiOutlinePencil/>He enjoyed the dish with great satisfaction. He'll order it again the next time he
              arrives.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
