"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BoardConts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/board', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    throw new Error('네트워크 응답이 올바르지 않습니다.');
                }

                // 서버에서 받은 데이터 저장
                let result = await response.json();

                // 내림차순으로 정렬
                result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                // 데이터 저장
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])

    return (
        <div className='board__conts'>
            <table>
                <colgroup>
                    <col style={{ width: "5%" }} />
                    <col style={{ width: "63%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "7%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록자</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.boardNum}</td>
                            <td><Link href={`boardView/${item.id}`}>{item.boardTitle}</Link></td>
                            <td>{item.user.name}</td>
                            <td>{item.createdAt.substring(0, 10)}</td>
                            <td>{item.boardView}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BoardConts