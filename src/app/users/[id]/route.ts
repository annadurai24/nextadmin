import { NextRequest } from 'next/server';
import {users} from './../data'

export async function GET(request: NextRequest,{params} : {
    params : {id:string}
}) {

    const user = users.find(user=>user.usrid === parseInt(params.id))
    if (user) {
        return Response.json(user);
    } else {
        return Response.json({message : 'user id does not exist'})
    }
    
}

export async function PATCH(request:Request, {params} : {params : {
    id:string
}}) {

    const index = users.findIndex(user=>user.usrid === parseInt(params.id))
    if(index !== -1) {
        const {Age} = await request.json();
        users[index].Age = Age;
        return Response.json(users[index]);

    } else {
        return Response.json({message : 'user id does not exist'})
    }
}

export async function DELETE(request:Request,{params} : {
    params : {id:string}
}) {
    const index = users.findIndex(user=>user.usrid === parseInt(params.id))
    if(index !== -1) {
        const deleteUser = users[index];
        const resultJson = {
            message : 'User Deleted',
            deleteUser
        }
        users.splice(index,1)
        return new Response(JSON.stringify(resultJson), {
            headers :{
                "Content-Type" : "application/json"
            },
            status : 201,
            statusText : 'DELETED....'
        })
        return Response.json(deleteUser);

    } else {
        return Response.json({message : 'user id does not exist'})
    }    
}

export async function PUT(request:Request, {params} : {params:{id:string}}) {
    const index = users.findIndex(user=>user.usrid === parseInt(params.id))
    if(index !== -1) {
        const {Age,uname} = await request.json();
        users[index].Age = Age;
        users[index].uname = uname;
        return Response.json(users[index]);

    } else {
        return Response.json({message : 'user id does not exist'})
    }

}