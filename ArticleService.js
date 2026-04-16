const API_URL = "https://panda-market-api-crud.vercel.app";

export async function getArticleList({
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const params = new URLSearchParams({ page, pageSize, keyword });
  const url = `${API_URL}/articles?${params.toString()}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("게시글 목록 조회 실패");

    return await response.json();
  } catch (error) {
    console.error("getArticleList 함수 오류:", error);
  }
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

export async function createArticle({ title, content, image }) {
  const url = `${API_URL}/articles`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        image: image,
      }),
    });

    if (!response.ok) {
      throw new Error(`게시글 등록 실패 (상태코드: ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error("createArticle 함수 오류:", error);
  }
}

export async function patchArticle(id, updateData) {
  const url = `${API_URL}/articles/${id}`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`게시글(ID: ${id}) 수정 실패`);
    }

    return await response.json();
  } catch (error) {
    console.error("patchArticle 함수 오류:", error);
  }
}

export async function deleteArticle(id) {
  const url = `${API_URL}/articles/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`게시글(ID: ${id}) 삭제에 실패했습니다.`);
    }
    return await response.json();
  } catch (error) {
    console.error("deleteArticle 함수 오류:", error);
  }
}
