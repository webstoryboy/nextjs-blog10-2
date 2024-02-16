import React from 'react'
import Menu from '@/components/menu/Menu'
import BoardWrite from '@/components/board/BoardWrite'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#boardWrite</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <h3 className='blind'>게시판</h3>
                    <BoardWrite />
                </section>
            </div>
        </main>
    )
}
