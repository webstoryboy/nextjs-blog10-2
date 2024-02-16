import prisma from "@/utils/connect"
import { getAuthSession } from "@/utils/session";
import { NextResponse } from "next/server"

// 게시글 작성하기
export const POST = async (req) => {
    if (req.method === 'POST') {
        const session = await getAuthSession();

        if (!session) { // 사용자가 로그인하지 않았다면 오류 반환
            return new NextResponse(
                JSON.stringify({ message: "로그인이 필요합니다" }, { status: 401 })
            )
        }

        try {
            // 요청 본문에서 데이터 추출
            const body = await req.json();
            let counterNum = 0;

            // boardCount 값 가져오기
            const counter = await prisma.counter.findFirst({
                where: { name: "counter" }
            });

            if (counter) {
                counterNum = counter.boardCount + 1;

                // 게시판 데이터 추가하기 
                const board = await prisma.board.create({
                    data: {
                        boardNum: counterNum,
                        boardTitle: body.title,
                        boardConts: body.contents,
                        userEmail: session.user.email
                    },
                });

                // counterNum 값을 boardCount 값에 저장하기
                await prisma.counter.update({
                    where: { id: counter.id },
                    data: { boardCount: counterNum },
                });

                // 성공 응답 반환
                return new NextResponse(
                    JSON.stringify({ board, counter }, { status: 200 })
                )
            } else {
                // Counter 레코드가 없으면 오류 처리
                throw new Error("Counter 레코드가 존재하지 않습니다.");
            }
        } catch (error) {
            console.error(error);
            return new NextResponse(
                JSON.stringify({ message: "게시글 작성 중 오류가 발생!!" }, { status: 500 })
            )
        }
    }
}