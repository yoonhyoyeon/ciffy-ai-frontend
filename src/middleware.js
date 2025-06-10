import { NextResponse } from "next/server";

export async function middleware(request) {
  // 예시: access_token 또는 refresh_token 쿠키 확인
  const access_token = request.cookies.get('access_token')?.value;
  const refresh_token = request.cookies.get('refresh_token')?.value;

  // 인증 여부 판단
  const isAuthorized = !!access_token || !!refresh_token;

  if (!isAuthorized) {
    // 미인증 시 로그인 페이지로 리다이렉트
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // 인증된 경우 그대로 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/graduation/:path*', '/lecture/:path*', '/timetable/:path*', '/mypage/:path*']
}