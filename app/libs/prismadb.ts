//  import {PrismaClient} from '@prisma/client/edge'

//  declare global {
//     var prisma : PrismaClient | undefined
//  }

//  const client = globalThis.prisma || new PrismaClient()
//  if(process.env.NODE_ENV != 'production') globalThis.prisma = client

//  export default client;

import { PrismaClient } from '@prisma/client/edge';

// 전역 Prisma 클라이언트 인스턴스를 생성합니다.
let prisma;

// Prisma 클라이언트 인스턴스가 없는 경우, 새로 생성합니다.
if (typeof prisma === 'undefined') {
  prisma = new PrismaClient();
}

// 다른 모듈에서 사용할 수 있도록 내보냅니다.
export default prisma;
