import React from 'react'

export default function BoardView({ data }) {
    return (
        <div className="board__view">
            <table>
                <colgroup>
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "80%" }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>{data.boardTitle}</td>
                    </tr>
                    <tr>
                        <th>등록자</th>
                        <td>{data.user.name}</td>
                    </tr>
                    <tr>
                        <th>등록일</th>
                        <td>{data.createdAt.substring(0, 10)}</td>
                    </tr>
                    <tr>
                        <th>조회수</th>
                        <td>{data.boardView}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            {data.boardConts}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
