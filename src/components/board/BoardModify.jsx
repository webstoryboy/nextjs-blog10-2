"use client"
import React, { useEffect, useState } from 'react'

export default function BoardModify({ id }) {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    // 기존 게시글 데이터 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/boardView/${id}`);
                const data = await response.json();
                setTitle(data.boardTitle);
                setContents(data.boardConts);
            } catch (error) {
                console.error('게시글을 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/boardModify`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ id, title, contents }),
            });

            if (!response.ok) {
                throw new Error('게시글 수정에 실패했습니다.');
            }

            alert('게시글이 성공적으로 수정되었습니다.');
            window.location.href = '/board';
        } catch (error) {
            console.error('게시글 수정 중 에러가 발생했습니다:', error);
            alert(error.message);
        }
    };

    return (
        <div className="board__write">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="blind">게시글 작성하기</legend>
                    <div>
                        <label htmlFor="boardTitle">제목</label>
                        <input
                            type="text"
                            id="boardTitle"
                            name="boardTitle"
                            placeholder='제목'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="boardContents">내용</label>
                        <textarea
                            id="boardContents"
                            name="boardContents"
                            rows="40"
                            placeholder='내용'
                            value={contents}
                            onChange={e => setContents(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <div className="board__btns">
                        <button type="submit">저장하기</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
