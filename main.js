import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

//getArticleList 함수를 테스트하는 함수
async function getArticleListTest() {
  const data = await getArticleList({ page: 1 });
  console.log(data);
}

//console.log(await getArticleListTest());

//getArticle 함수를 테스트하는 함수
async function getArticleTest() {
  const data = await getArticle(1);
  console.log(data);
}

//console.log(await getArticleTest());

//createArticle 함수를 테스트하는 함수
async function createArticleTest() {
  const newArticle = {
    title: "새로운 게시글",
    content: "이것은 새로운 게시글의 내용입니다.",
    image: "https://example.com/image.jpg",
  };
  const data = await createArticle(newArticle);
  console.log(data);
}

//console.log(await createArticleTest());
