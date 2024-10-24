"use client";

import React, { useState } from 'react'

const Faqs = () => {
    const [open, setOpen] = useState(null);
    const handleFaq = (idx) => {
        if (idx === open) {
            return setOpen(null)
        }
        setOpen(idx)
    }
    const data = [1, 2, 3, 4, 5]
    return (
        <section className='faqs'>
            <div className='faq_wrapper'>
                <h2 className='title'>Frequently Asked Questions</h2>
                <div className='faqs_list'>
                    {
                        data.map((item, idx) => {
                            return (
                                <div key={idx} className={`faq ${data.length === idx+1 && 'last_faq'}`}>
                                    <div className={`head`} onClick={() => handleFaq(idx)}>
                                        <h6>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam</h6>
                                        {
                                            open === idx ? <button className='menus'><span>_</span></button> :
                                            <button className='plus'><span>+</span></button>
                                        }
                                    </div>
                                    {
                                        open === idx && <div className='body'>
                                            Morem ipsum dolor sit amet, consectetur adipiscing elit. EMorem ipsum dolor sit amet, consectetur adipiscing elit. E
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs