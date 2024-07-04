import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
  // "sk_dev_2jXUNSQD1If5vgpFNJ4DFHpZSce_T7hTC7WV0PgFNtuFgy_ecUP1df2lr32zxF1O",
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

  //   console.log("AUTH_INFO", {
  //     authorization,
  //     user,
  //   });

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });

  //   console.log("AUTH_INFO", {
  //     room,
  //     board,
  //     boardOrgId: board?.orgId,
  //     userOrgId: authorization.orgId,
  //   });

  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName!,
    picture: user.imageUrl!,
  };

  //   console.log("USERINFO", { userInfo });

  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  //   console.log("STATUS & BODY || ALLOWED", { status, body });

  return new Response(body, { status });
}
