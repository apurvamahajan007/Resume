import React, { useContext, useEffect } from 'react'
import Heading from '../Common/Heading'
import { data } from '../Store'
import AOS from "aos";

const About = () => {

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    let {mode,setMode} = useContext(data)

    let obj = [
        {
            id:1,
            heading: "Name",
            content: "Apurva Jibhakate",
            colour: "primary"
        },
        {
            id: 2,
            heading: "Email",
            content: "apurva.mahajan007@gmail.com",
            colour: "success"
        },
        {
            id:3,
            heading: "Date of Birth",
            content: "30 Dec 1996",
            colour: "Warning"
        },
        {
            id:4,
            heading: "From",
            content: "Nagpur",
            colour: "danger"
        }
    ]
  return (
    <>
    <div id='About'>
                <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark  '} `}>
                    <Heading h1="About Me" h2="Know Me More" />

                    <div className="row align-items-center">
                        <div className="col-8">
                            <h1>Hi, I'm Apurva Jibhakate</h1>
                            <p>A budding front end developer with a strong interest in projects that require both conceptual and analytical thinking. I am always eager to learn from anyone & everyone. I'm looking forward to enhance user's experience & maximizing user interface.</p>
                        </div>
                        <div className="col-4">
                            <img src="Images/e726c74ac081eed50feee1433d12c9-unscreen.gif" alt="" width="100%" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        {
                            obj.map((e) => {
                                return (
                                    <div className="col-sm-6 col-xl-3" key={e.id} >
                                        <div className={`card p-2 text-bg-${e.colour} mb-3`} data-aos="fade-down">
                                            <div className="card-header">{e.heading}</div>
                                            <div className="card-body">
                                                <h6 className="card-title">{e.content}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

    </>
  )
}

export default About