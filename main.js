import * as ArticleAPI from "./ArticleService.js";

import * as ProductAPI from "./ProductService.js";

// Article API 테스트 함수
async function testArticleFlow() {
  console.log("Article API 테스트 시작");

  try {
    const newArticleData = {
      title: "test",
      content: "api test",
      image: "https://picsum.photos/600/400",
    };

    const createdArticle = await ArticleAPI.createArticle(newArticleData);
    if (!createdArticle) return;
    console.log("1. 게시글 등록 성공 (ID):", createdArticle.id);

    const articleDetail = await ArticleAPI.getArticle(createdArticle.id);
    console.log("2. 게시글 상세 조회 성공 (제목):", articleDetail.title);

    const articleList = await ArticleAPI.getArticleList({ pageSize: 3 });
    console.log(
      " 3. 게시글 목록 조회 성공 (갯수):",
      articleList.list?.length || 0,
    );

    const updateData = {
      title: "patchTest",
      content: "patchTest",
    };
    const updatedArticle = await ArticleAPI.patchArticle(
      createdArticle.id,
      updateData,
    );
    console.log("4. 게시글 수정 성공:", updatedArticle.title);

    const deletedArticle = await ArticleAPI.deleteArticle(createdArticle.id);
    console.log("5. 게시글 삭제 성공:", deletedArticle);

    console.log("모든 게시글 API 테스트 완료!");
  } catch (error) {
    console.error("테스트 도중 오류 발생:", error);
  }
}

testArticleFlow();

// Product API 테스트 함수
async function testProductFlow() {
  console.log("Product API 테스트 시작");

  try {
    const newProductData = {
      name: "test",
      description: "api test.",
      price: 15000,
      tags: ["테스트", "신상품"],
      images: ["https://picsum.photos/600/400"],
    };

    const createdProduct = await ProductAPI.createProduct(newProductData);
    if (!createdProduct) return;
    console.log("1. 상품 등록 성공:", createdProduct.id);

    const productDetail = await ProductAPI.getProduct(createdProduct.id);
    console.log("2. 상품 상세 조회 성공:", productDetail.name);

    const productList = await ProductAPI.getProductList({ pageSize: 3 });
    console.log(
      "3. 상품 목록 조회 성공 (갯수):",
      productList.list?.length || 0,
    );

    const updateData = {
      name: "이름이 수정된 상품",
      price: 20000,
    };
    const updatedProduct = await ProductAPI.patchProduct(
      createdProduct.id,
      updateData,
    );
    console.log("4. 상품 수정 성공 (수정된 가격):", updatedProduct.price);

    const deletedProduct = await ProductAPI.deleteProduct(createdProduct.id);
    console.log("5. 상품 삭제 성공:", deletedProduct);

    console.log("모든 상품 API 테스트 완료!");
  } catch (error) {
    console.error("테스트 도중 오류 발생:", error);
  }
}

testProductFlow();
