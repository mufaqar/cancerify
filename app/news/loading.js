import React from 'react'

const Loading = () => {
    return (
        <>
            <Header />
            {/* <!--End Main Header --> */}

            <MobileMenu />
            {/* End MobileMenu */}

            <main className="blog_page_head">
                <div className="b_wrapper">
                    <h2>Find the latest cancer news</h2>
                    <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                </div>
            </main>

            <p style={{textAlign: center, marginTop: "4rem", marginBottom: "4rem", fontSize: "1.2rem"}}>Llading...</p>
        </>
    )
}

export default Loading