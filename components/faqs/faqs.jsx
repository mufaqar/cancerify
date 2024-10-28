'use client';

import React, { useState } from 'react';

const Faqs = ({ data, nobg }) => {
  const [open, setOpen] = useState(null);
  const handleFaq = (idx) => {
    if (idx === open) {
      return setOpen(null);
    }
    setOpen(idx);
    
  };

  return (
    <section className={`faqs ${nobg && "nobg"}`}>
      <div className="faq_wrapper">
        <h2 className="title">Frequently Asked Questions</h2>
        <div className="faqs_list">
          {data?.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`faq ${data.length === idx + 1 && 'last_faq'}`}
              >
                <div className={`head`} onClick={() => handleFaq(idx)}>
                  <h6>{item?.title}</h6>
                  {open === idx ? (
                    <button className="menus">
                      <span>_</span>
                    </button>
                  ) : (
                    <button className="plus">
                      <span>+</span>
                    </button>
                  )}
                </div>
                {open === idx && (
                  <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: item?.excerpt }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
