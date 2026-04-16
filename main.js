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

//getArticleListTest();

//getArticle 함수를 테스트하는 함수
async function getArticleTest(n) {
  const data = await getArticle(n);
  console.log(data);
}

//getArticleTest(5988);

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

//createArticleTest();

//patchArticle, deleteArticle 함수를 테스트하는 함수
async function UpdateAndDeleteTest() {
  console.log("--- 테스트 시작 ---");

  const newPost = await createArticle({
    title: "테스트용 원본 제목",
    content: "수정 전 내용입니다.",
    image: "https://picsum.photos",
  });

  if (!newPost || !newPost.id) {
    console.error("게시글 생성 실패로 테스트를 중단합니다.");
    return;
  }
  console.log("1. 생성 완료 (ID):", newPost.id);

  const updated = await patchArticle(newPost.id, {
    title: "수정된 제목입니다!",
    content: "내용도 성공적으로 수정되었습니다.",
  });
  console.log("2. 수정 완료 결과:", updated);

  const deleted = await deleteArticle(newPost.id);
  console.log("3. 삭제 성공:", deleted);

  console.log("--- 모든 테스트 완료 ---");
}

//UpdateAndDeleteTest();
