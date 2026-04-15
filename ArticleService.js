const API_URL = "https://panda-market-api-crud.vercel.app";

export async function getArticleList({
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const params = new URLSearchParams({ page, pageSize, keyword });
  const url = `${API_URL}/articles?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("API 호출 실패");
  return await response.json();
}

export async function getArticle(articleId) {
  const url = `${API_URL}/articles/${articleId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("게시글을 찾을 수 없습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("getArticle 함수 오류:", error);
  }
}

export async function createArticle(articleData) {
  const url = `${API_URL}/articles`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });

    if (!response.ok) {
      throw new Error("게시글 생성에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("createArticle 에러:", error);
  }
}
