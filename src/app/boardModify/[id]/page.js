import React from 'react'
import Menu from '@/components/menu/Menu'
import BoardModify from '@/components/board/BoardModify'

export default function page({ params }) {
    const { id } = params;

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#boardModify</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container' >
                    <BoardModify id={id} />
                </section>
            </div>
        </main>
    )
}
