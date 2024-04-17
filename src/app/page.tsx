export const metadata = {
  title:'Home | Sundari Silks'
}
export default function Home() {
  console.log(process.env.DB_CONNECTION_STRING);
  return <h1 className="flex justify-center items-center p-10">Home Page</h1>
}