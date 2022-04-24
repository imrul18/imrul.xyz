import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    const [component, setComponent] = useState()
    useEffect(()=>{
        setComponent(<Landing setComponent={setComponent} />)
    },[])
    
    const setComponentdata = (data) => {
        switch (data) {
            case 'home':
                setComponent(<Landing setComponent={setComponent}/>)
                break;
            case 'about':
                setComponent(<About />)
                break;
            case 'resume':
                setComponent(
                    <>
                        <Education />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Achievement />
                    </>)
                break;
            case 'service':
                setComponent(<Services />)
                break;
            case 'contact':
                setComponent(<Contacts />)
                break;
        }


    }
    return (
        <div>
            <Navbar setComponent={setComponentdata} />
            {component}
            <Footer />
        </div>
    )
}

export default Main
