import React from 'react'
import Menu from '@/components/menu/Menu'
import BoardSearch from '@/components/board/BoardSearch'
import BoardConts from '@/components/board/BoardConts'
import BoardPages from '@/components/board/BoardPages'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#board</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <h3 className='blind'>게시판</h3>
                    <BoardSearch />
                    <BoardConts />
                    <BoardPages />
                </section>
            </div>
        </main>
    )
}
