// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'ja', 'zh'];
const defaultLocale = 'ja';

// Hàm xác định ngôn ngữ dựa trên Accept-Language header
function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Kiểm tra xem pathname đã có locale hay chưa
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Nếu đã có locale, không làm gì cả
  if (pathnameHasLocale) return;

  // Nếu là trang gốc, chuyển hướng đến trang với locale mặc định (tiếng Anh)
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/ja`, request.url));
  }

  // Nếu là các trang khác, thêm locale mặc định vào đường dẫn
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  // Chỉ áp dụng cho các đường dẫn không có locale
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|en/|ja/|zh/).*)',
  ],
};