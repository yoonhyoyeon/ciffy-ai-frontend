'use server';

export async function loginAction(formData) {
  const id = formData.get('id');
  const password = formData.get('password');
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password }),
      cache: 'no-store',
    });
    const data = await res.json();
    if (!res.ok || data.status !== 200) {
      return { error: data.message || '로그인 실패' };
    }
    return { success: true, data };
  } catch (err) {
    return { error: err.message || '로그인 실패' };
  }
} 