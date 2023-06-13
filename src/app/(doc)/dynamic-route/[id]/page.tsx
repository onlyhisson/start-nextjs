import styles from "@/styles/Home.module.scss";
import { ParsedUrlQuery } from "querystring";
import { wait } from "@/utils/common";
interface IParams extends ParsedUrlQuery {
  id: string;
}

type TPost = {
  id: number;
  title: string;
  content: string;
};

async function getPost(id: string) {
  //const res = await fetch(`https://api.example.com/artist/${username}`);
  //return res.json();

  const tempData: TPost[] = [
    { id: 1, title: "title1", content: "content1" },
    { id: 2, title: "title2", content: "content2" },
    { id: 3, title: "title3", content: "content3" },
  ];

  const posts = tempData.filter((el) => el.id === Number(id));

  if (posts.length < 1) {
    throw { message: "no post" };
  }

  return posts[0];
}

export default async function SSR({ params: { id } }: { params: IParams }) {
  // 브라우저에서 출력됨
  // 개발 모드에서는 server에도 출력됨
  // console.log(posts);

  await wait(3000);
  const post = await getPost(id);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>Static Generation With Data depends on paths</div>
        </div>
        <div>{post.title}</div>
        <div>{post.content}</div>
      </main>
    </>
  );
}
