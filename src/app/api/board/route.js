import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

// 게시판 모든글 가져오기
export const POST = async () => {
    try {
        const board = await prisma.board.findMany({
            include: {
                user: true,
            },
        });

        return new NextResponse(
            JSON.stringify(board, { status: 200 })
        )
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "게시판 모든글 가져오기 오류!!" }, { status: 500 })
        )
    }
}