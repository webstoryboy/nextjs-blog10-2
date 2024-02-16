"use client"
import React from 'react'

export default function BoardDelete({ id }) {
    const deletePost = async (postId) => {
        if (!confirm('정말로 삭제하시겠습니까?')) {
            return;
        }

        try {
            const response = await fetch(`/api/boardDelete/${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('게시글 삭제에 실패했습니다.');
            }

            alert('게시글이 성공적으로 삭제되었습니다.');
            window.location.href = '/board';
        } catch (error) {
            console.error('게시글 삭제 중 에러가 발생했습니다:', error);
            alert(error.message);
        }
    };

    return (
        <button onClick={() => deletePost(id)}>삭제하기</button>
    )
}
