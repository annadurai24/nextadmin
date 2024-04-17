import { NextRequest } from 'next/server';
import {users} from './data';
import { redirect } from 'next/navigation';

export async function GET(request:NextRequest) {
    const {searchParams} = new URL(request.url)
    const query = searchParams?.get("query");
    const filterUsers = query ? users.filter(user=>user.uname.includes(query)) : users;
   return Response.json(filterUsers)
}

export async function POST(request:Request) {
    const uid = users.length===0 ? 1 : users[users.length-1]?.usrid + 1
    const user = await request.json();
    const newUser = {
        "usrid" : uid,
        "uname" : user.uname,
        "Age" : user.Age
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser),{
        headers : {
            "Content-Type" : "application/json"
        },
        status : 201,
        statusText : 'New User Created...'
    })
}
