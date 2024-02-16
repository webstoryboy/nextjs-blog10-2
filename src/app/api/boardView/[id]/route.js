
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

// 게시판 상세페이지 가져오기 API
export const GET = async (req, { params }) => {
    const { id } = params;

    try {
        const boardView = await prisma.board.update({
            where: { id },
            data: { boardView: { increment: 1 } },
            include: { user: true }
        });

        return new NextResponse(
            JSON.stringify(boardView, { status: 200 })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "글 가져오기 실패" }, { status: 500 })
        );
    }
};