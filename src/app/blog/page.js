import React from 'react'
import Menu from '@/components/menu/Menu'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#blog</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                main
            </div>
        </main>
    )
}
