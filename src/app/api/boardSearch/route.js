import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

// 게시판 검색
export const POST = async (req) => {
    const { keyword, option } = req.body;
};