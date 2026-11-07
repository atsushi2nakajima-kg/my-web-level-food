
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/header";
import Chekout from "./components/from";
import Footer from "./components/Footer/footer";
import Certificates from "./components/certificat/certificates";
import Products from "./components/product/product";
import CardPage from "./components/card-page/cadr-page";
import CartPage from "./components/cart/cart-page";

import { CartProvider } from "./context/cartcontext";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section456 from "./components/section456";

import api from "./API/axios";

import "./App.css";
import "./Posts.css";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [actionError, setActionError] = useState("");
  const [notice, setNotice] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingPostKey, setEditingPostKey] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [workingPostKey, setWorkingPostKey] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get("/posts", { params: { _limit: 10 } });
        setPosts(response.data.map((post) => ({ ...post, uiKey: `post-${post.id}` })));
      } catch (err) {
        setLoadError("Не удалось загрузить записи. Проверьте соединение и попробуйте обновить страницу.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  async function getPostById() {
    setActionError("");
    setNotice("");
    try {
      const response = await api.get("/posts/1");
      setSelectedPost(response.data);
    } catch (err) {
      setActionError("Не удалось получить запись №1.");
      console.error("Ошибка получения записи:", err);
    }
  }

  async function createPost(event) {
    event.preventDefault();
    setSaving(true);
    setActionError("");
    setNotice("");

    try {
      const response = await api.post("/posts", {
        title: title.trim(),
        body: body.trim(),
        userId: 1,
      });
      const createdPost = {
        ...response.data,
        title: response.data.title || title.trim(),
        body: response.data.body || body.trim(),
        userId: response.data.userId || 1,
        uiKey: `new-${Date.now()}`,
      };
      setPosts((currentPosts) => [createdPost, ...currentPosts]);
      setTitle("");
      setBody("");
      setNotice("Тестовый запрос отправлен. Запись добавлена в список только на этой странице.");
    } catch (err) {
      setActionError("Не удалось отправить запись.");
      console.error("Не удалось создать запись:", err);
    } finally {
      setSaving(false);
    }
  }

  function startEditing(post) {
    setEditingPostKey(post.uiKey);
    setEditTitle(post.title);
    setActionError("");
    setNotice("");
  }

  async function changeTitle(post) {
    const nextTitle = editTitle.trim();
    if (!nextTitle) return;

    setWorkingPostKey(post.uiKey);
    setActionError("");
    setNotice("");
    try {
      const response = await api.patch(`/posts/${post.id}`, { title: nextTitle });
      setPosts((currentPosts) => currentPosts.map((item) =>
        item.uiKey === post.uiKey
          ? { ...item, ...response.data, title: response.data.title || nextTitle }
          : item
      ));
      setEditingPostKey(null);
      setNotice("Название обновлено в списке. JSONPlaceholder не сохраняет изменения на сервере.");
    } catch (err) {
      setActionError("Не удалось изменить название.");
      console.error("Не удалось изменить запись:", err);
    } finally {
      setWorkingPostKey(null);
    }
  }

  async function deletePost(post) {
    setWorkingPostKey(post.uiKey);
    setActionError("");
    setNotice("");
    try {
      await api.delete(`/posts/${post.id}`);
      setPosts((currentPosts) => currentPosts.filter((item) => item.uiKey !== post.uiKey));
      setNotice("Запись удалена из списка. JSONPlaceholder не сохраняет изменения на сервере.");
    } catch (err) {
      setActionError("Не удалось удалить запись.");
      console.error("Не удалось удалить запись:", err);
    } finally {
      setWorkingPostKey(null);
    }
  }

  return (
    <main className="posts-page">
      <h1>Список записей</h1>

      {loading && <p role="status">Загрузка записей...</p>}
      {loadError && <p role="alert">{loadError}</p>}
      {actionError && <p role="alert">{actionError}</p>}
      {notice && <p role="status">{notice}</p>}

      {!loading && !loadError && (
        <section aria-label="Записи">
          {posts.length === 0 ? (
            <p>Записей пока нет.</p>
          ) : (
            <ul className="posts-list">
              {posts.map((post) => (
                <li className="post-card" key={post.uiKey}>
                  {editingPostKey === post.uiKey ? (
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        changeTitle(post);
                      }}
                    >
                      <label>
                        Новое название
                        <input
                          value={editTitle}
                          onChange={(event) => setEditTitle(event.target.value)}
                          required
                        />
                      </label>
                      <button type="submit" disabled={workingPostKey === post.uiKey}>
                        {workingPostKey === post.uiKey ? "Сохранение..." : "Сохранить"}
                      </button>
                      <button type="button" onClick={() => setEditingPostKey(null)}>
                        Отмена
                      </button>
                    </form>
                  ) : (
                    <>
                      <h2>{post.title}</h2>
                      {post.body && <p>{post.body}</p>}
                      <div className="post-actions">
                        <button type="button" onClick={() => startEditing(post)} disabled={workingPostKey === post.uiKey}>
                          Изменить название
                        </button>
                        <button type="button" onClick={() => deletePost(post)} disabled={workingPostKey === post.uiKey}>
                          {workingPostKey === post.uiKey ? "Удаление..." : "Удалить"}
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="post-form-section">
        <h2>Добавить запись</h2>
        <form onSubmit={createPost}>
          <label>
            Название
            <input value={title} onChange={(event) => setTitle(event.target.value)} required />
          </label>
          <label>
            Описание
            <textarea value={body} onChange={(event) => setBody(event.target.value)} required rows="3" />
          </label>
          <button type="submit" disabled={saving || loading}>
            {saving ? "Отправка..." : "Добавить"}
          </button>
        </form>
      </section>

      <section className="single-post-section">
        <h2>Получить одну запись</h2>
        <button type="button" onClick={getPostById}>Получить запись №1</button>
        {selectedPost && (
          <article>
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.body}</p>
          </article>
        )}
      </section>
    </main>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/my-web-level-food">
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/company" replace />}
          />

          <Route
            path="/company"
            element={
              <>
                <Section1 />
                <Section2 />
                <Section456 />
              </>
            }
          />

          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
          <Route path="/section456" element={<Section456 />} />

          <Route path="/card-page" element={<CardPage />} />
          <Route path="/order" element={<Chekout />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/certificates" element={<Certificates />} />

          <Route
            path="/posts"
            element={<PostsPage />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
