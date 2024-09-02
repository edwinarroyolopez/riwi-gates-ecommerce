export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post:any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}