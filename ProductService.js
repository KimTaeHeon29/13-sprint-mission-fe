const API_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const params = new URLSearchParams({ page, pageSize, keyword });
  const url = `${API_URL}/products?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("상품 목록 조회 실패");
    return await response.json();
  } catch (error) {
    console.error("getProductList 함수 오류:", error);
  }
}

export async function getProduct(productId) {
  const url = `${API_URL}/products/${productId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("상품을 찾을 수 없습니다.");
    return await response.json();
  } catch (error) {
    console.error("getProduct 함수 오류:", error);
  }
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  const url = `${API_URL}/products`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });
    if (!response.ok) throw new Error("상품 등록 실패");
    return await response.json();
  } catch (error) {
    console.error("createProduct 함수 오류:", error);
  }
}

export async function patchProduct(id, updateData) {
  const url = `${API_URL}/products/${id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) throw new Error(`상품(ID: ${id}) 수정 실패`);
    return await response.json();
  } catch (error) {
    console.error("patchProduct 함수 오류:", error);
  }
}

export async function deleteProduct(id) {
  const url = `${API_URL}/products/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`상품(ID: ${id}) 삭제 실패`);
    return await response.json();
  } catch (error) {
    console.error("deleteProduct 함수 오류:", error);
  }
}
