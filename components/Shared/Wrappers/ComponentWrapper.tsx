import React from 'react'

interface props {
    style?: string,
    children: React.ReactNode,
    id?: string
}

function ComponentWrapper({ style, children, id }: props) {
    return (
        <div id={id} className={`w-full ${style}`} >
            <div className='w-full h-full max-w-[1380px] m-auto md:px-10 px-4' >
                {children}
            </div>
        </div>
    )
}

export default ComponentWrapper