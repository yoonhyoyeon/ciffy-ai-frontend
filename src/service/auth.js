export const signIn = async ({ id, password }) => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password }),
    });
    const data = await res.json();
    if (!res.ok || data.status !== 200) {
      throw new Error(data.message || '로그인 실패');
    }
    return data;
  } catch (err) {
    throw err;
  }
};