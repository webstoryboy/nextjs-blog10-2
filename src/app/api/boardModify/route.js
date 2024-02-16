import prisma from "@/utils/connect"
import { getAuthSession } from "@/utils/session";
import { NextResponse } from "next/server"

// 게시판 글 수정하기
export const PUT = async (req) => {
    const session = await getAuthSession();

    if (!session) { // 사용자가 로그인하지 않았다면 오류 반환
        return new NextResponse(
            JSON.stringify({ message: "로그인이 필요합니다" }, { status: 401 })
        )
    }

    try {
        const body = await req.json();
        const board = await prisma.board.update({
            where: {
                id: body.id,
            },
            data: {
                boardTitle: body.title,
                boardConts: body.contents,
            },
        });
        console.log(body)
        return new NextResponse(
            JSON.stringify({ board }, { status: 200 })
        )
    } catch (error) {
        console.error('게시글 작성 중 오류 발생:', error);
        return new NextResponse(
            JSON.stringify({ message: "게시글 작성 중 오류가 발생했습니다." }, { status: 500 })
        )
    }
};