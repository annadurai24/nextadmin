import { readRecords } from "_lib/crud";
import { connectToDatabase } from "_lib/db";


export async function GET() {
    console.log('fetching api....')
    await connectToDatabase();
   const data =  await readRecords();
   return Response.json({result:data})
}