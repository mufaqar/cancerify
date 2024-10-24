import React from 'react'

const Faqs = () => {
  return (
    <section className='faq'>
        <div className='faq_wrapper'>
            <h2 className='title'>Frequently Asked Questions</h2>
            <div className='faqs_list'>
                {
                    [1,2,3,4,5].map((item,idx)=>{
                        <div key={idx}>
                            {item}
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Faqs