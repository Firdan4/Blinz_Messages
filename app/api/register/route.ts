import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import client from "@/app/libs/convex/client";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    if (!email || !name || !password) {
      return new NextResponse("Input is required!", { status: 404 });
    }

    const alreadyUsers = await client.query(api.users.getUser, { email });

    if (alreadyUsers) {
      return new NextResponse("Email already using", { status: 404 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    client.mutation(api.users.create, {
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json("internal ok");
  } catch (error: any) {
    console.log(error, "INTERNAL ERROR");
    return new NextResponse(error, { status: 500 });
  }
}
