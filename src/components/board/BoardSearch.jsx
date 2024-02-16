"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const BoardSearch = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchOption, setSearchOption] = useState('title');

    // 검색어 입력 핸들링
    const handleKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    // 검색 옵션 선택 핸들링
    const handleOptionChange = (e) => {
        setSearchOption(e.target.value);
    };

    // 검색 실행 핸들링
    const handleSearchSubmit = async (e) => {
        e.preventDefault(); // 폼 제출 기본 동작 방지
        console.log(`검색어: ${searchKeyword}, 옵션: ${searchOption}`);

        const searchResults = await fetch(`/api/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keyword: searchKeyword, option: searchOption }),
        }).then(res => res.json());

        console.log(searchResults);
    };

    return (
        <div className="board__search">
            <form onSubmit={handleSearchSubmit}>
                <fieldset>
                    <legend className="blind">게시판 검색 영역</legend>
                    <div>
                        <label className='blind' htmlFor="searchKeyword">검색</label>
                        <input
                            type="search"
                            name="searchKeyword"
                            id="searchKeyword"
                            placeholder="검색어를 입력하세요!"
                            value={searchKeyword}
                            onChange={handleKeywordChange}
                        />
                    </div>
                    <div>
                        <select
                            name="searchOption"
                            id="searchOption"
                            value={searchOption}
                            onChange={handleOptionChange}   >
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="name">등록자</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">검색</button>
                        <Link href="/boardWrite">글쓰기</Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default BoardSearch