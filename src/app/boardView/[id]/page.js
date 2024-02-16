"use client"
import React, { useEffect, useState } from 'react'
import Menu from '@/components/menu/Menu'
import BoardView from '@/components/board/BoardView';
import Link from 'next/link';
import BoardDelete from '@/components/board/BoardDelete';

export default function page({ params }) {
    const { id } = params;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/boardView/${id}`);

                if (!res.ok) {
                    throw new Error('데이터를 가져오는 데 실패했습니다.');
                }
                const data = await res.json();

                setData(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>; // 데이터가 없을 때 로딩 표시
    }

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#boardView</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container' >
                    <BoardView data={data} />

                    <div className="board__btns">
                        <Link href={`/boardModify/${data.id}`}>수정하기</Link>
                        <BoardDelete id={data.id} />
                        <Link href="/board">목록보기</Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
